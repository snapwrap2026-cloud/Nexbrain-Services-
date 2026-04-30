import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize SQLite Database
const dbPath = path.join(process.cwd(), 'submissions.db');
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route to handle form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      if (!name || !email || !phone || !message) {
        return res.status(400).json({ success: false, message: "All fields are required." });
      }

      const stmt = db.prepare('INSERT INTO submissions (name, email, phone, message) VALUES (?, ?, ?, ?)');
      const result = stmt.run(name, email, phone, message);
      const submissionId = result.lastInsertRowid;
      const timestamp = new Date().toISOString();

      const logEntry = JSON.stringify({
        id: submissionId,
        timestamp,
        name,
        email,
        phone,
        message
      }) + "\\n";

      fs.appendFile(path.join(process.cwd(), 'submissions.log'), logEntry, (err) => {
        if (err) console.error("Failed to write to log file:", err);
      });

      console.log(`[${timestamp}] New form submission - ID: ${submissionId}, Name: ${name} (${email}) - Phone: ${phone}`);

      // Forward to Web3Forms if key is configured
      const accessKey = process.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (accessKey) {
        try {
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: accessKey,
              from_name: name,
              subject: `New Contact Form Submission from ${name}`,
              email: email,
              phone: phone,
              message: message
            }),
          });
          console.log("Forwarded to Web3Forms successfully");
        } catch (fwErr) {
          console.error("Failed to forward to Web3Forms:", fwErr);
        }
      }

      res.status(200).json({ success: true, message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error saving submission:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });
  
  // API Route to retrieve form submissions (Admin only theoretically)
  app.get("/api/submissions", (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      const adminUsername = process.env.ADMIN_USERNAME || "admin";
      const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

      const expectedAuth = `Basic ${Buffer.from(`${adminUsername}:${adminPassword}`).toString('base64')}`;

      if (!authHeader || authHeader !== expectedAuth) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
      }

      const stmt = db.prepare('SELECT * FROM submissions ORDER BY created_at DESC');
      const submissions = stmt.all();
      res.status(200).json({ success: true, count: submissions.length, submissions });
    } catch (error) {
      console.error("Error retrieving submissions:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
