import { motion } from "motion/react";
import React from "react";
import { Linkedin, Twitter, Github, Instagram, Facebook, ArrowRight } from "lucide-react";
import kumarRajnishImg from "../assets/kumar_rajnish.jpg";
import karanSinghImg from "../assets/karan_singh.jpg";

const teamMembers = [
  {
    name: "Kumar Rajnish",
    role: "Website Designer & Automation Maker",
    bio: "Passionate about creating seamless websites and automating workflows. Transforming complex processes into efficient, automated systems for optimal performance.",
    image: kumarRajnishImg,
    social: {
      instagram: "https://www.instagram.com/_rajjnish?igsh=ZnU1NnVuZGV1cHpq",
      facebook: "https://www.facebook.com/profile.php?id=61573882330656&mibextid=ZbWKwL",
    },
  },
  {
    name: "Karan Singh",
    role: "Graphic Designer & Social Media Specialist",
    bio: "Creative graphic designer and social media strategist. Crafting compelling visual narratives and engaging social campaigns that resonate with digital audiences.",
    image: karanSinghImg,
    social: {
      instagram: "https://www.instagram.com/snap_karan?igsh=MWN6NzdkamdwaWNqNQ==",
      facebook: "https://www.facebook.com/share/1BooUiWgmA/",
    },
  },
];

export const Team = () => {
  return (
    <section className="py-24 md:py-32 relative bg-black overflow-hidden" id="team">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5B8CFF]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-[14px] font-bold text-[#5B8CFF] uppercase tracking-[0.1em] mb-4 block">
              Leadership
            </span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-white drop-shadow-2xl">
              Meet the Founders
            </h2>
            <p className="text-lg text-white/60 leading-relaxed max-w-lg">
              We are a team of AI researchers, engineers, and creatives
              dedicated to pushing the boundaries of what's possible with modern
              technology.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {teamMembers.map((member, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative flex flex-col bg-white/[0.03] rounded-3xl border border-white/10 overflow-hidden hover:bg-white/[0.05] transition-colors duration-500"
              >
                {/* Image Section - Fixed Aspect Ratio */}
                <div className="w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <img 
                    src={member.image} 
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale-[60%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Name overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <h3 className="text-3xl font-semibold text-white tracking-tight mb-2">
                       {member.name}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#5B8CFF]/30 bg-[#5B8CFF]/10 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF] animate-pulse" />
                      <span className="text-[#5B8CFF] text-xs font-semibold uppercase tracking-wider">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-white/60 leading-relaxed font-light mb-8 flex-grow">
                    {member.bio}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-4">
                    {(member.social as any).linkedin && (
                      <a href={(member.social as any).linkedin} className="text-white/40 hover:text-[#5B8CFF] hover:-translate-y-1 transition-all duration-300">
                        <Linkedin className="w-5 h-5 relative z-10" />
                      </a>
                    )}
                    {(member.social as any).twitter && (
                      <a href={(member.social as any).twitter} className="text-white/40 hover:text-[#1DA1F2] hover:-translate-y-1 transition-all duration-300">
                        <Twitter className="w-5 h-5 relative z-10" />
                      </a>
                    )}
                    {(member.social as any).github && (
                      <a href={(member.social as any).github} className="text-white/40 hover:text-white hover:-translate-y-1 transition-all duration-300">
                        <Github className="w-5 h-5 relative z-10" />
                      </a>
                    )}
                    {(member.social as any).instagram && (
                      <a href={(member.social as any).instagram} className="text-white/40 hover:text-[#E1306C] hover:-translate-y-1 transition-all duration-300">
                        <Instagram className="w-5 h-5 relative z-10" />
                      </a>
                    )}
                    {(member.social as any).facebook && (
                      <a href={(member.social as any).facebook} className="text-white/40 hover:text-[#1877F2] hover:-translate-y-1 transition-all duration-300">
                        <Facebook className="w-5 h-5 relative z-10" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

