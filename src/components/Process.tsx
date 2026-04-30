import { motion } from 'motion/react';
import { Target, Cpu, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Diagnose',
    description: 'Deep-layer analysis of workflow bottlenecks and infrastructure gaps.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Build',
    description: 'Deployment of custom neural architectures and autonomous growth loops.',
    icon: Cpu,
  },
  {
    number: '03',
    title: 'Scale',
    description: 'Achieve exponential growth through continuous AI scaling.',
    icon: Rocket,
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 relative bg-black text-white overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5B8CFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-20"
        >
          <div className="text-[14px] font-bold text-[#5B8CFF] uppercase tracking-[0.1em] mb-4 drop-shadow-md">
            Deployment Protocol
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-2xl">
            How We Execute
          </h2>
        </motion.div>

        <div className="relative mt-24">
          {/* Horizontal connection line for desktop */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-white/10" />
          
          <div className="grid md:grid-cols-3 gap-20 md:gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
                  className="relative group flex flex-col items-center text-center"
                >
                  {/* Step Node */}
                  <div className="w-20 h-20 rounded-full bg-black border border-white/20 flex items-center justify-center relative z-10 mb-8 transition-all duration-500 group-hover:border-[#5B8CFF] group-hover:shadow-[0_0_30px_rgba(91,140,255,0.3)]">
                    <div className="absolute inset-0 rounded-full bg-[#5B8CFF]/0 group-hover:bg-[#5B8CFF]/10 transition-colors duration-500" />
                    <Icon className="w-8 h-8 text-white/50 group-hover:text-[#5B8CFF] transition-colors duration-500" />
                  </div>

                  {/* Numbering as watermark behind */}
                  <span className="absolute top-0 font-mono text-[120px] leading-none font-bold text-white/[0.03] -z-10 select-none group-hover:text-[#5B8CFF]/10 transition-colors duration-700 pointer-events-none -mt-4">
                    {step.number}
                  </span>

                  {/* Content */}
                  <div className="relative z-20 px-4">
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#5B8CFF] transition-colors duration-300">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


