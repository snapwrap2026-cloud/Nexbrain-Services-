import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, YAxis } from "recharts";

const projects = [
  {
    id: "nexa",
    client: "Nexa AI",
    category: "Platform Design & Dev",
    description: "Architecting a robust, scalable AI SaaS product for enterprise workflows.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    metrics: ["10x User Growth", "$2M+ ARR"],
    chartData: [
      { name: "Jan", value: 400 },
      { name: "Feb", value: 300 },
      { name: "Mar", value: 550 },
      { name: "Apr", value: 450 },
      { name: "May", value: 700 },
      { name: "Jun", value: 1200 },
    ],
    chartColor: "#5B8CFF"
  },
  {
    id: "aura",
    client: "Aura",
    category: "Brand & Social Growth",
    description: "Complete visual rebranding and data-driven social media strategy.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    metrics: ["3M+ Reach", "300% Engagement"],
    chartData: [
      { name: "Week 1", value: 20 },
      { name: "Week 2", value: 45 },
      { name: "Week 3", value: 80 },
      { name: "Week 4", value: 150 },
      { name: "Week 5", value: 240 },
      { name: "Week 6", value: 300 },
    ],
    chartColor: "#A855F7"
  },
  {
    id: "quantum",
    client: "Quantum",
    category: "AI Automation",
    description: "Custom conversational AI system automating customer success operations.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    metrics: ["40% Faster Ops", "99% Uptime"],
    chartData: [
      { name: "Q1", value: 100 },
      { name: "Q2", value: 85 },
      { name: "Q3", value: 60 },
      { name: "Q4", value: 40 },
    ],
    chartColor: "#10B981"
  },
];

export const CaseStudies = () => {
  return (
    <section id="work" className="section-spacing relative bg-brand-black/30 backdrop-blur-sm border-t border-b border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6"
            >
              Selected <span className="text-[#5B8CFF]">Work</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed"
            >
              We pattern-recognize the future and build it. Here are some of the ambitious brands we've helped scale through design, technology, and strategy.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col gap-12 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`group flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 relative overflow-hidden rounded-[24px] bg-brand-secondary border border-white/10 aspect-[4/3] md:aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                
                {/* Overlay link button */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-[#5B8CFF]/10 text-[#5B8CFF] text-sm font-medium border border-[#5B8CFF]/20">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#5B8CFF] transition-colors">
                  {project.client}
                </h3>
                
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {project.metrics.map((metric, mIndex) => {
                    const [value, ...labelParts] = metric.split(" ");
                    return (
                      <div key={mIndex} className="flex flex-col gap-2">
                        <span className="text-3xl font-bold text-white">{value}</span>
                        <span className="text-sm text-white/60 uppercase tracking-wider">{labelParts.join(" ")}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Data Chart */}
                <div className="w-full h-[120px] bg-white/5 rounded-xl border border-white/10 p-4 pb-0 mt-auto">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={project.chartData}>
                      <defs>
                        <linearGradient id={`gradient-${project.id}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={project.chartColor} stopOpacity={0.3}/>
                          <stop offset="95%" stopColor={project.chartColor} stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke={project.chartColor} 
                        fill={`url(#gradient-${project.id})`} 
                        strokeWidth={2}
                      />
                      <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
