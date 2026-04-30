import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { Bot, Share2, Users, Monitor, TrendingUp } from "lucide-react";

const services = [
  {
    id: "01",
    title: "AI Automations",
    description: "Systems that handle leads, workflows, and operations automatically.",
    video: "/videos/service-1.mp4",
    icon: Bot,
  },
  {
    id: "02",
    title: "Social Media Management",
    description: "Data-driven content strategies that turn followers into brand advocates using AI.",
    video: "/videos/service-2.mp4",
    icon: Share2,
  },
  {
    id: "03",
    title: "Influencer Marketing",
    description: "Connecting your brand with the right voices for explosive growth.",
    video: "/videos/service-3.mp4",
    icon: Users,
  },
  {
    id: "04",
    title: "Website Development",
    description: "High-converting, performance-optimized digital engines tailored for scale.",
    video: "/videos/service-4.mp4",
    icon: Monitor,
  },
  {
    id: "05",
    title: "Brand Growth Systems",
    description: "Comprehensive scaling strategies designed for modern dominance.",
    video: "/videos/service-5.mp4",
    icon: TrendingUp,
  },
];

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5B8CFF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <div className="text-[14px] font-bold text-[#5B8CFF] uppercase tracking-[0.1em] mb-4 drop-shadow-md">
            Our Ecosystem
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-white drop-shadow-2xl">
            The Growth Flow
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto md:text-lg">
            An interconnected flow process where each stage accelerates the next.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main vertical connecting line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#5B8CFF] via-purple-500 to-[#5B8CFF] -translate-x-1/2 origin-top"
            style={{ scaleY: lineHeight }}
          />

          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const Icon = service.icon;
              
              return (
                <div key={service.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  
                  {/* Node on the line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-[#5B8CFF] z-10 flex items-center justify-center shadow-[0_0_20px_rgba(91,140,255,0.4)] transition-transform duration-300 hover:scale-125">
                    <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_white]" />
                  </div>

                  {/* Content side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`pl-16 md:pl-0 ${isEven ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'}`}
                  >
                    <div className={`flex items-center gap-4 mb-6 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      {!isEven && <span className="hidden md:block font-mono text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white/20 to-transparent">{service.id}</span>}
                      {/* On mobile, ID is inside here. On desktop, ID is outside */}
                      <span className="md:hidden font-mono text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white/20 to-transparent">{service.id}</span>
                      
                      {isEven && <span className="hidden md:block font-mono text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white/20 to-transparent">{service.id}</span>}
                      <div className="w-14 h-14 rounded-2xl bg-[#5B8CFF]/10 flex items-center justify-center border border-[#5B8CFF]/30 text-[#5B8CFF] shadow-[0_0_20px_rgba(91,140,255,0.1)]">
                        <Icon strokeWidth={1.5} size={28} />
                      </div>
                      {!isEven && <span className="hidden md:block font-mono text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white/20 to-transparent">{service.id}</span>}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">{service.title}</h3>
                    <p className={`text-white/60 text-lg leading-relaxed max-w-md mx-auto md:mx-0 ${isEven ? 'md:ml-auto' : ''}`}>{service.description}</p>
                  </motion.div>

                  {/* Image side */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className={`pl-16 md:pl-0 ${isEven ? 'md:order-2' : 'md:order-1'}`}
                  >
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 group aspect-video md:aspect-[4/3] bg-[#111]">
                      {/* Connecting line to node on desktop */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-[2px] z-20 transition-all ${isEven ? '-left-8 bg-gradient-to-l from-[#5B8CFF]/50 to-transparent' : '-right-8 bg-gradient-to-r from-[#5B8CFF]/50 to-transparent'}`} />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#5B8CFF]/10 transition-opacity duration-700 z-10" />
                      <video 
                        src={service.video} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
