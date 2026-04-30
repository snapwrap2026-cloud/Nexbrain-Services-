import { motion } from "motion/react";
import { BadgeCheck, Star, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CTO",
    company: "ZeptoPay",
    video: "https://cdn.coverr.co/videos/coverr-server-room-4023/1080p.mp4",
    fallback: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
    text: "Next Brain completely transformed our payment infrastructure. We managed to scale 10x within months without any downtime.",
  },
  {
    name: "Rahul Verma",
    role: "Founder",
    company: "EduTech India",
    video: "https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-5232/1080p.mp4",
    fallback: "https://images.unsplash.com/photo-1627988350176-5991461cc427?auto=format&fit=crop&w=600&q=80",
    text: "The AI automation systems they built for our coaching platform are game-changing. Our student engagement grew rapidly.",
  },
  {
    name: "Ananya Desai",
    role: "Head of Growth",
    company: "Swasthya Health",
    video: "https://cdn.coverr.co/videos/coverr-futuristic-abstract-3151/1080p.mp4",
    fallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    text: "Their strategic systems are incredibly precise. We saw a 300% ROI on our patient acquisition campaigns in the first quarter.",
  },
  {
    name: "Vikram Singh",
    role: "CEO",
    company: "Bharat Logistics",
    video: "https://cdn.coverr.co/videos/coverr-someone-working-on-a-computer-1422/1080p.mp4",
    fallback: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80",
    text: "Supply chain visibility was a nightmare until we partnered with them. Now, we have an autonomous routing network that saves thousands daily.",
  },
  {
    name: "Neha Gupta",
    role: "CMO",
    company: "UrbanCart",
    video: "https://cdn.coverr.co/videos/coverr-modern-skyscraper-7744/1080p.mp4",
    fallback: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    text: "The personalized marketing flows completely revolutionized our D2C brand. Customer retention shot up by 40% almost instantly.",
  },
  {
    name: "Arjun Patel",
    role: "Director",
    company: "DataMind",
    video: "https://cdn.coverr.co/videos/coverr-data-center-2940/1080p.mp4",
    fallback: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=600&q=80",
    text: "Data-driven decision making is finally a reality for us. The automated dashboards they built are simply brilliant.",
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const TestimonialCard = ({
  item,
}: {
  item: (typeof testimonials)[0];
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
            setIsPlaying(true);
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div ref={containerRef} className="relative rounded-[24px] overflow-hidden group w-[300px] h-[533px] shrink-0 border border-white/10 shadow-2xl bg-[#111116]">
      {/* Fallback Image or Video Container */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <video 
          ref={videoRef}
          src={item.video} 
          poster={item.fallback}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          muted={isMuted}
          preload="none"
          loop 
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      </div>

      {/* Controls Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between">
        {/* Top Controls */}
        <div className="p-4 flex justify-end">
          <button 
            onClick={toggleMute}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-black/60 transition-colors pointer-events-auto"
          >
            {isMuted ? <VolumeX className="w-5 h-5 opacity-70" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>

        {/* Center Play/Pause button on hover or when paused */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <button 
            onClick={togglePlay}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className={`w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-black/60 transition-all pointer-events-auto ${!isPlaying ? 'opacity-100 scale-100' : 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100'}`}
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </button>
        </div>
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10 pointer-events-none">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#5B8CFF] text-[#5B8CFF]" />
          ))}
        </div>
        
        <p className="text-sm text-white/90 font-medium leading-[1.5] mb-6 line-clamp-4 drop-shadow-md">
          "{item.text}"
        </p>

        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-base text-white truncate drop-shadow-md">{item.name}</h4>
            <p className="text-xs text-[#5B8CFF] font-medium truncate uppercase tracking-wider mt-0.5">{item.role} @ {item.company}</p>
          </div>
          <div className="flex items-center justify-center bg-[#5B8CFF]/20 p-2 rounded-full backdrop-blur-sm shrink-0 border border-[#5B8CFF]/30">
            <BadgeCheck className="w-5 h-5 text-[#5B8CFF]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let lastTime = performance.now();

    const animateContent = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      // Smooth scrolling rate: approx 1 pixel per frame (60fps)
      if (!isHovered && !isDragging) {
        el.scrollLeft += (delta * 0.05); // Adjust speed multiplier as needed
        
        // Loop when reaching the middle securely (since duplicated items are identical in size)
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animateContent);
    };

    animationId = requestAnimationFrame(animateContent);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-transparent text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#5B8CFF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="text-[14px] font-bold text-[#5B8CFF] uppercase tracking-[0.1em] mb-4">
              Real Impacts
            </div>
            <h2 className="text-[32px] md:text-[48px] leading-tight font-semibold text-white">
              Trust from modern labs
            </h2>
          </div>
          
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-sm self-start md:self-auto">
            <div className="flex -space-x-3">
              {[testimonials[0].fallback, testimonials[1].fallback, testimonials[2].fallback].map((src, i) => (
                <img key={i} src={src} className="w-10 h-10 rounded-full border-2 border-black object-cover" alt="Reviewer" />
              ))}
            </div>
            <div className="flex flex-col ml-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#5B8CFF] text-[#5B8CFF]" />
                ))}
              </div>
              <span className="text-sm font-semibold">50+ Verified Reviews</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div 
        className="w-full relative z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsDragging(false);
        }}
      >
        {/* Gradients for fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing px-6 py-4"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          {duplicatedTestimonials.map((item, index) => (
            <TestimonialCard key={`testimonial-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
