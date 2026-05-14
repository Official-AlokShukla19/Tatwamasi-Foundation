import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const efforts = [
  {
    id: 1,
    title: "Education & Growth",
    description: "Nurturing minds through accessible learning resources, mentorship, and spaces where curiosity can thrive without boundaries.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "bg-primary/5",
    iconColor: "text-primary",
    accentColor: "accent",
    motif: "শি",
    link: "/education-growth"
  },
  {
    id: 2,
    title: "Community Roots",
    description: "Building strong, supportive networks that uplift the marginalized, fostering a sense of belonging and collective resilience.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-primary/5",
    iconColor: "text-primary",
    accentColor: "accent",
    motif: "স",
    link: "/community-roots"
  },
  {
    id: 3,
    title: "Innovative Horizons",
    description: "Exploring new paradigms for sustainable living and holistic development, blending traditional wisdom with modern solutions.",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "bg-primary/5",
    iconColor: "text-primary",
    accentColor: "accent",
    motif: "ন",
    link: "/innovative-horizons"
  }
];

const Efforts = () => {
  return (
    <section id="efforts" className="py-32 relative bg-dusty torn-edge-bottom z-10 pb-40">
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-50 z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-primary/20"></div>
            <h2 className="text-sm font-sans uppercase tracking-[0.4em] text-accent">Our Initiatives</h2>
            <div className="w-16 h-[1px] bg-primary/20"></div>
          </div>
          <h3 className="text-4xl md:text-6xl font-serif text-primary mb-6">Woven Threads of Change</h3>
          <p className="font-serif text-primary/70 max-w-2xl mx-auto text-xl leading-relaxed italic">
            Every initiative we undertake is a thread woven into the larger tapestry of human progress. 
            We focus our energy where it matters most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {efforts.map((effort, index) => (
            <motion.div
              key={effort.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
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
                <span className={`text-[10px] uppercase tracking-[0.3em] font-sans text-accent group-hover:text-primary transition-colors`}>Read Chapter</span>
                <div className={`w-1 h-1 rounded-full bg-accent/40 group-hover:bg-primary transition-colors`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Narrative Section Break */}
      <div className="max-w-md mx-auto mt-40 flex items-center justify-center gap-6 opacity-30 relative z-10">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-primary"></div>
        <div className="font-bengali text-2xl tracking-tighter text-primary">❈</div>
        <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-primary"></div>
      </div>
    </section>
  );
};

export default Efforts;
