import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { initiatives } from '../data/initiatives';

const InitiativesPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="pt-32 pb-24 bg-paper min-h-screen relative overflow-hidden z-10"
    >
      {/* Texture background */}
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-50 z-0"></div>
      
      {/* Background decoration */}
      <div className="absolute top-20 right-[-15%] text-[50rem] font-bengali opacity-[0.02] select-none pointer-events-none -rotate-12 text-primary">
        কাজ
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="text-center mb-32 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs font-sans uppercase tracking-[0.4em] text-accent mb-6">Our Efforts</span>
            <div className="w-16 h-[1px] bg-accent/30 mb-10"></div>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif text-primary mb-10 leading-tight tracking-tight">Channels of <span className="italic text-accent font-normal">Impact</span></h1>
          <p className="text-xl text-primary/70 max-w-2xl mx-auto font-serif font-light italic leading-relaxed">
            "Discover how we are making a difference across various sectors through our targeted programs and dedicated action."
          </p>
        </motion.div>

        <div className="space-y-32 md:space-y-48">
          {initiatives.map((initiative, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.section 
                key={initiative.id}
                id={initiative.id}
                className="scroll-mt-32"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}>
                  {/* Content Card */}
                  <div className="flex-1 w-full p-12 md:p-16 bg-dusty border border-primary/20 paper-shadow relative group overflow-hidden">
                    {/* Photo corners */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary/30 m-4"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary/30 m-4"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary/30 m-4"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary/30 m-4"></div>

                    {/* Motif Background */}
                    <div className="absolute top-0 right-0 p-8 text-6xl font-bengali text-primary opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 select-none pointer-events-none">
                      {initiative.id === 'education' ? 'শি' : initiative.id === 'health' ? 'স্বা' : 'উ'}
                    </div>

                    <span className="text-accent/80 font-sans tracking-[0.3em] uppercase text-[10px] mb-8 block">{initiative.category}</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">{initiative.title}</h2>
                    <p className="text-xl text-primary/75 mb-12 font-serif italic leading-relaxed">{initiative.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 border-t border-primary/10 pt-10">
                      <div>
                        <h4 className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary/40 mb-4">Focus Area</h4>
                        <p className="text-primary/80 font-serif italic">{initiative.focus}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-sans uppercase tracking-[0.3em] text-primary/40 mb-4">Key Offerings</h4>
                        <div className="flex flex-wrap gap-2">
                          {initiative.offerings.map((offering, idx) => (
                            <span key={idx} className="text-[10px] font-sans tracking-widest uppercase text-primary/60 bg-primary/5 px-3 py-1 border border-primary/10">
                              {offering}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-8 border-t border-primary/10">
                      <Link 
                        to={initiative.id === 'education' ? '/education-growth' : initiative.id === 'health-environment' ? '/innovative-horizons' : '/community-roots'}
                        className="text-[10px] font-sans tracking-[0.4em] text-primary hover:text-accent transition-colors uppercase"
                      >
                        Read Progress Story
                      </Link>
                    </div>
                  </div>
                  
                  {/* Image/Visual Area */}
                  <div className="flex-1 w-full relative">
                    <div className="aspect-[4/3] bg-primary/5 border border-primary/20 p-2 paper-shadow overflow-hidden group relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent mix-blend-multiply transition-all duration-1000 group-hover:scale-105 z-10"></div>
                      <div className="w-full h-full border border-primary/20 border-dashed flex items-center justify-center relative bg-dusty">
                         <p className="text-primary/40 font-serif italic text-center p-12 relative z-20">
                           Archival Photograph: {initiative.title}
                         </p>
                      </div>
                      
                      {/* Inner Photo corners */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-primary/30 m-2"></div>
                      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-primary/30 m-2"></div>
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-primary/30 m-2"></div>
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-primary/30 m-2"></div>
                    </div>
                    {/* Decorative element */}
                    <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-24 h-24 bg-paper border border-primary/20 rounded-full flex items-center justify-center text-3xl font-bengali text-accent/30 paper-shadow z-20`}>
                      ❈
                    </div>
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Footer ornament */}
        <div className="mt-48 flex flex-col items-center gap-6 opacity-30">
          <div className="w-20 h-[1px] bg-primary"></div>
          <p className="font-bengali text-3xl text-primary">পথ চলা শেষ নয়</p>
          <div className="w-20 h-[1px] bg-primary"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default InitiativesPage;
