import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';
import { Background3D } from '../components/Background3D';

const vlogs = [
  {
    id: 1,
    title: "Behind the Scenes: Rebranding Anthropic",
    date: "April 24, 2026",
    duration: "12:45",
    thumbnail: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    video: "https://cdn.coverr.co/videos/coverr-server-room-4023/1080p.mp4",
  },
  {
    id: 2,
    title: "How to Build a Scalable Design System",
    date: "April 18, 2026",
    duration: "18:20",
    thumbnail: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    video: "https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-5232/1080p.mp4",
  },
  {
    id: 3,
    title: "Our Tech Stack in 2026",
    date: "April 10, 2026",
    duration: "09:15",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    video: "https://cdn.coverr.co/videos/coverr-futuristic-abstract-3151/1080p.mp4",
  },
  {
    id: 4,
    title: "Vlog #42 - Office Tour & New Studio",
    date: "April 02, 2026",
    duration: "15:30",
    thumbnail: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    video: "https://cdn.coverr.co/videos/coverr-someone-working-on-a-computer-1422/1080p.mp4",
  },
  {
    id: 5,
    title: "Q&A: Answering Your Design Questions",
    date: "March 28, 2026",
    duration: "22:10",
    thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    video: "https://cdn.coverr.co/videos/coverr-data-center-2940/1080p.mp4",
  },
  {
    id: 6,
    title: "Client Meeting Preparation",
    date: "March 15, 2026",
    duration: "08:45",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    video: "https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-5232/1080p.mp4",
  }
];

export const Vlogs = () => {
  const [selectedVlog, setSelectedVlog] = useState<typeof vlogs[0] | null>(null);

  return (
    <>
      <Background3D />
      <Navbar />
      
      <main className="pt-32 pb-24 min-h-screen relative z-10">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B8CFF] to-purple-500">Vlogs</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/60 leading-relaxed"
            >
              Behind the scenes, tutorials, and insights into our process.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vlogs.map((vlog, index) => (
              <motion.div
                key={vlog.id}
                onClick={() => setSelectedVlog(vlog)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-brand-secondary border border-white/10">
                  <img 
                    src={vlog.thumbnail} 
                    alt={vlog.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center pl-1 text-white">
                      <Play className="w-6 h-6 fill-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white">
                    {vlog.duration}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-mono text-[#5B8CFF]">{vlog.date}</div>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-[#5B8CFF] transition-colors">
                    {vlog.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selectedVlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVlog(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedVlog(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              
              <video
                src={selectedVlog.video}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};
