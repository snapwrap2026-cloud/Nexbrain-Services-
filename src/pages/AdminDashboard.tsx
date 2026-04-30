import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function AdminDashboard() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fetchSubmissions = (adminUsername: string, adminPassword: string) => {
    setLoading(true);
    const encoded = btoa(`${adminUsername}:${adminPassword}`);
    fetch("/api/submissions", {
      headers: {
        "Authorization": `Basic ${encoded}`
      }
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error("Invalid password");
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setSubmissions(data.submissions);
          setIsAuthenticated(true);
          setError(null);
        } else {
          setError(data.message || "Failed to fetch");
        }
      })
      .catch((err) => {
        setError(err.message || "Network error");
        setIsAuthenticated(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchSubmissions(username, password);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-[#1C1C1C] p-8 rounded-2xl border border-white/10">
          <Link to="/" className="text-[#5B8CFF] hover:text-white transition-colors text-sm mb-6 inline-block">
            &larr; Back to Site
          </Link>
          <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white/90 mb-2">
                Admin ID
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#5B8CFF]/50 transition-all"
                placeholder="Enter admin ID"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#5B8CFF]/50 transition-all"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5B8CFF] text-black font-semibold py-3 rounded-xl hover:bg-white transition-colors disabled:opacity-50"
            >
              {loading ? "Authenticating..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard - Submissions</h1>
          <Link to="/" className="text-[#5B8CFF] hover:text-white transition-colors">
            &larr; Back to Site
          </Link>
        </div>
        
        {loading ? (
          <p>Loading submissions...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : submissions.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          <div className="overflow-x-auto bg-[#1C1C1C] rounded-lg border border-white/10">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-black/50">
                  <th className="p-4 font-medium text-white/70">Date</th>
                  <th className="p-4 font-medium text-white/70">Name</th>
                  <th className="p-4 font-medium text-white/70">Email</th>
                  <th className="p-4 font-medium text-white/70">Phone</th>
                  <th className="p-4 font-medium text-white/70">Message</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub) => (
                  <tr key={sub.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-sm text-white/70">
                      {new Date(sub.created_at).toLocaleString()}
                    </td>
                    <td className="p-4 font-medium">{sub.name}</td>
                    <td className="p-4 text-sm text-[#5B8CFF]">{sub.email}</td>
                    <td className="p-4 text-sm">{sub.phone}</td>
                    <td className="p-4 text-sm max-w-md truncate" title={sub.message}>
                      {sub.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
