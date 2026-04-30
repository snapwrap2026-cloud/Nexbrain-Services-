import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/Button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { Logo } from "./ui/Logo";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsLightMode(true);
      document.documentElement.classList.add("light");
    } else {
      setIsLightMode(false);
      document.documentElement.classList.remove("light");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsLightMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      }
      return newMode;
    });
  };

  const navLinks = [
    { name: "Services", href: "/#services", isHash: true },
    { name: "Work", href: "/#work", isHash: true },
    { name: "Vlogs", href: "/vlogs", isHash: false },
    { name: "Contact", href: "/#contact", isHash: true },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        isScrolled
          ? "bg-white/[0.02] backdrop-blur-[24px] border-white/10 h-[72px] flex items-center shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-transparent h-[72px] flex items-center",
      )}
    >
      {isScrolled && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent mix-blend-overlay" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      )}
      <div className="container-custom w-full flex items-center justify-between relative z-10">
        <Link
          to="/"
          className="flex items-center gap-2 group scale-75 origin-left"
        >
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              link.isHash ? (
                 <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    location.pathname === link.href ? "text-white" : "text-text-secondary hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="text-text-secondary hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {isLightMode ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                window.open('https://calendly.com/info-rajnishh/30min', '_blank');
              }}
            >
              Book a meeting
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-white p-2"
            aria-label="Toggle theme"
          >
            {isLightMode ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
          <button
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 md:hidden bg-brand-black/95 backdrop-blur-2xl border-b border-white/5 p-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              link.isHash ? (
                 <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-medium text-text-secondary hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-2xl font-medium transition-colors",
                    location.pathname === link.href ? "text-white" : "text-text-secondary hover:text-white"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.open('https://calendly.com/info-rajnishh/30min', '_blank');
              }}
            >
              Book a meeting
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
