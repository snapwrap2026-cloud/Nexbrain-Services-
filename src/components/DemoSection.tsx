import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  MessageSquare,
  Bot,
  ArrowUpRight,
  Zap,
  Globe,
  Sparkles,
} from "lucide-react";

export const DemoSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-transparent text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="text-[14px] font-bold text-[#5B8CFF] uppercase tracking-[0.1em] mb-4">
            The Engine
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold leading-tight text-white mb-6"
          >
            Designed to think, respond, and scale autonomously.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Main Chat Interface */}
          <motion.div
            style={{ y: y1 }}
            className="md:col-span-8 relative rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 overflow-hidden flex flex-col group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#5B8CFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="flex items-center gap-4 p-6 border-b border-white/5 relative z-10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="px-3 py-1.5 rounded-full bg-white/5 text-xs font-mono text-white/50 flex items-center gap-2">
                <Bot className="w-3 h-3" />
                terminal.nex
              </div>
            </div>

            <div className="flex-1 p-6 flex flex-col justify-end gap-4 relative z-10">
              <div className="bg-white/5 backdrop-blur-sm w-fit max-w-[80%] rounded-2xl rounded-tl-sm p-4 text-[14px] text-white/80 border border-white/5 tracking-wide">
                Diagnose our current lead acquisition flow. Where are the drop-offs?
              </div>
              
              <div className="bg-[#5B8CFF]/20 backdrop-blur-sm w-fit max-w-[80%] self-end rounded-2xl rounded-tr-sm p-4 text-[14px] text-[#5B8CFF] border border-[#5B8CFF]/20 tracking-wide font-medium">
                Analysis complete. 40% drop-off at Step 3. Implementing semantic follow-ups to recover lost leads. Estimated recovery: +25%.
              </div>
              
              <div className="flex items-center gap-2 text-xs text-[#5B8CFF] font-mono mt-2 opacity-70">
                <Sparkles className="w-3 h-3 animate-pulse" />
                Executing optimization protocol...
              </div>
            </div>
            
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-6 h-full">
            {/* Metric Card */}
            <motion.div
              style={{ y: y2 }}
              className="flex-1 relative rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 overflow-hidden p-8 flex flex-col justify-center group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                <ArrowUpRight className="w-12 h-12 text-[#5B8CFF]" />
              </div>
              <div className="relative z-10">
                <span className="text-sm font-medium text-white/50 tracking-wider uppercase mb-2 block">
                  System Efficiency
                </span>
                <div className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40 mb-4 tracking-tighter">
                  +340%
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Average output amplification achieved through our custom autonomous workflows.
                </p>
              </div>
            </motion.div>

            {/* Visual Node Card */}
            <motion.div 
              style={{ y: y3 }}
              className="flex-1 relative rounded-3xl bg-gradient-to-br from-[#5B8CFF]/20 via-black/30 to-purple-500/20 backdrop-blur-md border border-[#5B8CFF]/30 overflow-hidden p-8 flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Routing</h3>
                <p className="text-white/70 text-sm">
                  Instantaneous data synchronization across multi-region networks.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
