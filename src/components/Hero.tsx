import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const Hero = () => {
  const { scrollY } = useScroll();
  // Parallax effect: moves down 200px as user scrolls 500px down
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-[72px] overflow-hidden">
      {/* Parallax Background Element */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none"
      >
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-[#5B8CFF]/20 to-purple-500/20 rounded-full blur-[120px]" />
      </motion.div>

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-[56px] md:text-[80px] lg:text-[100px] font-semibold leading-[1.05] tracking-tight mb-6 text-white drop-shadow-2xl"
            >
              Built to Scale.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-lg"
            >
              Immersive 3D environments, AI systems, and digital experiences
              designed exclusively for the modern web.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto px-8 backdrop-blur-lg bg-white/95 text-black hover:bg-white transition-colors duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                onClick={() => {
                  window.open('https://calendly.com/info-rajnishh/30min', '_blank');
                }}
              >
                Book a meeting
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 border-white/30 text-white hover:bg-white/10 backdrop-blur-lg transition-colors duration-300 shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-black/20 hover:border-white/50"
                onClick={() => {
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View our work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
