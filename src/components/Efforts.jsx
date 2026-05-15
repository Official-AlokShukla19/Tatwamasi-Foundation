import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Lightbulb, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const efforts = [
  {
    id: 1,
    title: "Education & Growth",
    description: "Nurturing minds through accessible learning resources, bridging the gap between rural and urban standards.",
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-edu-mustard/10",
    iconColor: "text-edu-mustard",
    motif: "শি",
    link: "/education-growth"
  },
  {
    id: 2,
    title: "Women-Led Empowerment",
    description: "Fostering economic independence and leadership among village matriarchs to drive community-wide change.",
    icon: <Heart className="w-5 h-5" />,
    color: "bg-comm-red/10",
    iconColor: "text-comm-red",
    motif: "মা",
    link: "/community-roots"
  },
  {
    id: 3,
    title: "Community Roots",
    description: "Building resilient networks that celebrate heritage while fostering modern collective growth and unity.",
    icon: <Users className="w-5 h-5" />,
    color: "bg-comm-olive/10",
    iconColor: "text-comm-olive",
    motif: "স",
    link: "/community-roots"
  },
  {
    id: 4,
    title: "Innovative Horizons",
    description: "Blending traditional wisdom with sustainable technology to build scalable futures for rural Bengal.",
    icon: <Lightbulb className="w-5 h-5" />,
    color: "bg-inno-cyan/10",
    iconColor: "text-inno-cyan",
    motif: "ন",
    link: "/innovative-horizons"
  }
];

const Efforts = () => {
  return (
    <section id="efforts" className="py-16 relative bg-dusty torn-edge-bottom z-10 pb-20">
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs font-sans uppercase tracking-[0.5em] text-accent">Our Initiatives</span>
            <div className="w-12 h-[1px] bg-primary/20"></div>
            <h3 className="text-4xl md:text-7xl font-serif text-primary leading-tight">Woven Threads of <span className="italic">Impact</span></h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {efforts.map((effort, index) => (
            <motion.div
              key={effort.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -4 }}
              className="group relative p-10 bg-paper border border-primary/10 transition-all duration-500 hover:shadow-xl paper-shadow flex flex-col"
            >
              <Link to={effort.link} className="absolute inset-0 z-20" aria-label={`Read more about ${effort.title}`}></Link>
              
              {/* Photo corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/20 m-2"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/20 m-2"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/20 m-2"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/20 m-2"></div>

              {/* Subtle background motif */}
              <div className="absolute top-4 right-4 text-8xl font-bengali text-primary opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 select-none pointer-events-none">
                {effort.motif}
              </div>

              <div className={`w-14 h-14 rounded-full ${effort.color} border border-primary/10 flex items-center justify-center mb-8 transition-transform duration-700`}>
                <div className={effort.iconColor}>{effort.icon}</div>
              </div>

              <h4 className="text-2xl font-serif text-primary mb-4 group-hover:text-accent transition-colors">
                {effort.title}
              </h4>
              
              <p className="text-primary/70 font-serif leading-relaxed mb-10 text-lg flex-grow">
                {effort.description}
              </p>

              <div className="pt-6 border-t border-primary/10 flex items-center justify-between mt-auto">
                <span className={`text-xs uppercase tracking-[0.3em] font-sans text-accent group-hover:text-primary transition-colors`}>Read Chapter</span>
                <div className={`w-1 h-1 rounded-full bg-accent/40 group-hover:bg-primary transition-colors`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Narrative Section Break */}
      <div className="max-w-md mx-auto mt-24 flex items-center justify-center gap-6 opacity-30 relative z-10">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-primary"></div>
        <div className="font-bengali text-2xl tracking-tighter text-primary">❈</div>
        <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-primary"></div>
      </div>
    </section>
  );
};

export default Efforts;
