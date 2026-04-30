/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShoppingCart, Utensils, CreditCard, ShieldCheck, ShoppingBag } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { DemoSection } from "./components/DemoSection";
import { CaseStudies } from "./components/CaseStudies";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { Background3D } from "./components/Background3D";
import { Team } from "./components/Team";

const TrustStrip = () => {
  const logos = [
    { name: "Zepto", icon: ShoppingCart },
    { name: "Zomato", icon: Utensils },
    { name: "Razorpay", icon: CreditCard },
    { name: "CRED", icon: ShieldCheck },
    { name: "Flipkart", icon: ShoppingBag },
    { name: "Zepto", icon: ShoppingCart },
    { name: "Zomato", icon: Utensils },
    { name: "Razorpay", icon: CreditCard },
    { name: "CRED", icon: ShieldCheck },
    { name: "Flipkart", icon: ShoppingBag },
  ];

  return (
    <div className="py-20 bg-brand-secondary/80 backdrop-blur-md relative overflow-hidden border-b border-white/10 z-10">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-10 w-full relative z-20">
          <span className="text-[12px] font-bold text-[#5B8CFF] uppercase tracking-[0.2em] drop-shadow-md">
            Trusted by top Indian brands
          </span>
        </div>

        {/* Marquee Container */}
        <div className="w-full overflow-hidden flex relative mask-image-blur cursor-default">
          {/* Fade gradients for edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-black/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-black/80 to-transparent z-10" />

          <motion.div
            className="flex gap-20 whitespace-nowrap items-center w-max opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {logos.map((logo, index) => {
              const Icon = logo.icon;
              return (
                <div
                  key={`logo-orig-${index}`}
                  className="flex items-center gap-3 text-white"
                >
                  <Icon className="w-8 h-8" />
                  <span className="text-xl md:text-2xl font-bold tracking-wider uppercase">
                    {logo.name}
                  </span>
                </div>
              );
            })}
            {/* Duplicate logos for seamless looping */}
            {logos.map((logo, index) => {
              const Icon = logo.icon;
              return (
                <div
                  key={`logo-dup-${index}`}
                  className="flex items-center gap-3 text-white"
                >
                  <Icon className="w-8 h-8" />
                  <span className="text-xl md:text-2xl font-bold tracking-wider uppercase">
                    {logo.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminDashboard } from "./pages/AdminDashboard";
import { Vlogs } from "./pages/Vlogs";

function LandingPage() {
  return (
    <>
      {/* 3D Background */}
      <Background3D />

      <Navbar />

      <Hero />
      <TrustStrip />
      <Testimonials />
      <Services />
      <DemoSection />
      <Process />
      <CaseStudies />
      <Team />
      <CTASection />

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <main className="relative min-h-screen bg-transparent">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/vlogs" element={<Vlogs />} />
        </Routes>
      </main>
    </Router>
  );
}
