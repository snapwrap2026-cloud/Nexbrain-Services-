import { motion } from "motion/react";
import { Button } from "./ui/Button";

export const CTASection = () => {
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
            Ready to deploy your next AI growth engine? Book a meeting below.
          </p>

          <Button
            variant="primary"
            size="lg"
            className="px-10 py-6 text-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] bg-white text-black hover:bg-gray-100"
            onClick={() => {
              window.open('https://calendly.com/info-rajnishh/30min', '_blank');
            }}
          >
            Book a meeting
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
