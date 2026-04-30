import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Logo } from "./ui/Logo";

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-brand-black/60 backdrop-blur-xl">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <a
              href="/"
              className="flex items-center gap-3 mb-8 scale-75 origin-left"
            >
              <Logo />
            </a>
            <p className="text-text-secondary text-sm max-w-xs leading-relaxed mb-8">
              Architecting high-ticket AI growth engines for the world's most
              ambitious brands.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-text-muted hover:text-white transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[12px] font-bold text-white uppercase tracking-wider mb-6">
              Capabilities
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/#services"
                  className="text-sm text-text-secondary hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#work"
                  className="text-sm text-text-secondary hover:text-white transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/#process"
                  className="text-sm text-text-secondary hover:text-white transition-colors"
                >
                  Process
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[12px] font-bold text-white uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-text-secondary hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-sm text-text-secondary hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/#testimonials"
                  className="text-sm text-text-secondary hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <Link
                  to="/admin"
                  className="text-sm text-[#5B8CFF] hover:text-white transition-colors"
                >
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[12px] font-bold text-white uppercase tracking-wider mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-text-secondary hover:text-white transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-text-secondary hover:text-white transition-colors"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] text-text-muted">
            © {new Date().getFullYear()} NEX brain Labs. Built for the future.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[12px] text-text-muted uppercase tracking-wider">
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
