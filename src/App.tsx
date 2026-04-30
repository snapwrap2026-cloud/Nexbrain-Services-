/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, memo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "motion/react";
import { ShoppingCart, Utensils, CreditCard, ShieldCheck, ShoppingBag } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

// Lazy load heavy or below-the-fold components
const Services = React.lazy(() => import("./components/Services").then(m => ({ default: m.Services })));
const Process = React.lazy(() => import("./components/Process").then(m => ({ default: m.Process })));
const DemoSection = React.lazy(() => import("./components/DemoSection").then(m => ({ default: m.DemoSection })));
const CaseStudies = React.lazy(() => import("./components/CaseStudies").then(m => ({ default: m.CaseStudies })));
const Testimonials = React.lazy(() => import("./components/Testimonials").then(m => ({ default: m.Testimonials })));
const CTASection = React.lazy(() => import("./components/CTASection").then(m => ({ default: m.CTASection })));
const Footer = React.lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));
const Background3D = React.lazy(() => import("./components/Background3D").then(m => ({ default: m.Background3D })));
const Team = React.lazy(() => import("./components/Team").then(m => ({ default: m.Team })));

const AdminDashboard = React.lazy(() => import("./pages/AdminDashboard").then(m => ({ default: m.AdminDashboard })));
const Vlogs = React.lazy(() => import("./pages/Vlogs").then(m => ({ default: m.Vlogs })));

const TrustStrip = memo(() => {
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
});

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-20" />}>
        <TrustStrip />
        <Testimonials />
        <Services />
        <DemoSection />
        <Process />
        <CaseStudies />
        <Team />
        <CTASection />
        <Footer />
        {/* 3D Background */}
        <Background3D />
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <main className="relative min-h-screen bg-transparent">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" /></div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/vlogs" element={<Vlogs />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}
