import { motion } from "motion/react";
import { Button } from "./ui/Button";
import { useState } from "react";

export const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ email?: string; phone?: string; message?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; phone?: string; message?: string } = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneDigits = formData.phone.replace(/[^0-9]/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      newErrors.phone = "Phone number must be between 10 and 15 digits.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus("submitting");
    
    // Simulate API call using Web3Forms for email forwarding
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success || result.message === "Mock mode") {
        console.log("Form submitted:", formData);
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        
        // Reset success message after 3 seconds
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error(result.message || "Failed to submit");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear error when user starts typing again
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  return (
    <section id="contact" className="section-spacing relative overflow-hidden text-center bg-transparent border-t border-white/5">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-[48px] md:text-[56px] font-semibold mb-6 leading-tight text-white drop-shadow-2xl">
            Let your business run smarter.
          </h2>

          <p className="text-lg text-white/90 mb-12 max-w-xl mx-auto leading-relaxed font-medium drop-shadow-lg">
            Ready to deploy your next AI growth engine? Contact us below.
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5 text-left bg-[#0A0D14]/80 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/40 xl:text-lg focus:outline-none focus:ring-2 focus:ring-[#5B8CFF]/50 focus:border-[#5B8CFF]/30 transition-all shadow-inner"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-5 py-4 bg-black/50 border ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:border-[#5B8CFF]/30 focus:ring-[#5B8CFF]/50'} rounded-xl text-white placeholder-white/40 xl:text-lg focus:outline-none focus:ring-2 transition-all shadow-inner`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">Contact Number (with Country Code)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                minLength={10}
                maxLength={20}
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-5 py-4 bg-black/50 border ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:border-[#5B8CFF]/30 focus:ring-[#5B8CFF]/50'} rounded-xl text-white placeholder-white/40 xl:text-lg focus:outline-none focus:ring-2 transition-all shadow-inner`}
                placeholder="+1 234 567 8900"
              />
              {errors.phone && <p className="text-red-400 text-sm mt-2">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-5 py-4 bg-black/50 border ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:border-[#5B8CFF]/30 focus:ring-[#5B8CFF]/50'} rounded-xl text-white placeholder-white/40 xl:text-lg focus:outline-none focus:ring-2 transition-all resize-none shadow-inner`}
                placeholder="Tell us about your project..."
              />
              {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
            </div>
            
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full px-6 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] mt-6 text-lg"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-center font-medium mt-4">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center font-medium mt-4">Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};
