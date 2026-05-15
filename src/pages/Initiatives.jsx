import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { initiatives } from '../data/initiatives';
import StoryBridge from '../components/StoryBridge';

const InitiativesPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-paper min-h-screen relative overflow-hidden z-10"
    >
      {/* Texture background */}
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-50 z-0"></div>
      
      {/* Background decoration */}
      <div className="absolute top-20 right-[-15%] text-[50rem] font-bengali opacity-[0.02] select-none pointer-events-none -rotate-12 text-primary">
        কাজ
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-24 pb-16">
        <motion.div 
          className="text-center mb-16 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs font-sans uppercase tracking-[0.4em] text-accent mb-4">Our Efforts</span>
            <div className="w-12 h-[1px] bg-accent/30 mb-8"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight tracking-tight">Channels of <span className="italic text-accent font-normal">Impact</span></h1>
          <p className="text-lg md:text-xl text-primary/70 max-w-2xl mx-auto font-serif font-light italic leading-relaxed">
            "Every initiative is a thread in the larger tapestry of change. We nurture the potential already existing within our soil."
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {initiatives.map((initiative, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.section 
                key={initiative.id}
                id={initiative.id}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center`}>
                  {/* Content Card */}
                  <div className="flex-1 w-full p-8 md:p-12 bg-dusty/80 border border-primary/10 paper-shadow relative group overflow-hidden">
                    <div className="absolute inset-0 paper-grain opacity-20"></div>
                    
                    {/* Photo corners */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary/20 m-3"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary/20 m-3"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary/20 m-3"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary/20 m-3"></div>

                    <span className="text-accent font-sans tracking-[0.4em] uppercase text-xs mb-6 block opacity-60">{initiative.category}</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 tracking-tight">{initiative.title}</h2>
                    <p className="text-lg text-primary/75 mb-10 font-serif italic leading-relaxed">{initiative.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 border-t border-primary/5 pt-8">
                      <div>
                        <h4 className="text-xs font-sans uppercase tracking-[0.4em] text-primary/30 mb-3">Core Focus</h4>
                        <p className="text-base text-primary/80 font-serif italic leading-snug">{initiative.focus}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-sans uppercase tracking-[0.4em] text-primary/30 mb-3">Key Elements</h4>
                        <div className="flex flex-wrap gap-2">
                          {initiative.offerings.map((offering, idx) => (
                            <span key={idx} className="text-[10px] font-sans tracking-widest uppercase text-primary/50 bg-primary/5 px-2 py-1 border border-primary/5">
                              {offering}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-8 border-t border-primary/5">
                      <Link 
                        to={
                          initiative.id === 'education' ? '/education-growth' : 
                          initiative.id === 'health-environment' ? '/innovative-horizons' : 
                          '/community-roots'
                        }
                        className="group inline-flex items-center gap-4 text-xs font-sans tracking-[0.4em] text-primary uppercase transition-all"
                      >
                        <span className="group-hover:text-accent group-hover:translate-x-1 transition-all">Read Narrative</span>
                        <span className="text-accent group-hover:translate-x-2 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Visual Area */}
                  <div className="flex-1 w-full relative">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.8 }}
                      className="aspect-[4/3] bg-primary/5 border border-primary/10 p-2 paper-shadow overflow-hidden relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent mix-blend-multiply transition-all duration-1000 z-10"></div>
                      <div className="w-full h-full border border-primary/10 border-dashed flex items-center justify-center relative bg-dusty">
                         <p className="text-primary/30 font-serif italic text-center p-8 text-sm leading-relaxed">
                           "Visual Journal: Capturing the essence of {initiative.title} in the field."
                         </p>
                      </div>
                    </motion.div>
                    {/* Ornamental character */}
                    <div className={`absolute -bottom-4 ${isEven ? '-right-4' : '-left-4'} w-16 h-16 bg-paper border border-primary/10 rounded-full flex items-center justify-center text-2xl font-bengali text-accent/20 paper-shadow z-20`}>
                      {index === 0 ? '❈' : index === 1 ? '❧' : index === 2 ? '❀' : '✿'}
                    </div>
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Narrative Bridge to next step - Tighter */}
        <div className="mt-32 border-t border-primary/10 pt-24 flex flex-col items-center">
          <StoryBridge 
            variant="light"
            bengaliText="চলো" 
            imageLabel="The Next Step"
            title="The Journey Continues"
            subtitle="Impact is not a destination, but a direction. Join us as we explore new horizons of growth."
          />
          
          <Link 
            to="/community-roots" 
            className="mt-8 px-10 py-5 border border-primary text-primary hover:bg-primary hover:text-paper transition-all font-sans uppercase tracking-[0.3em] text-xs"
          >
            Explore Community Roots
          </Link>
        </div>
      </div>
    </motion.div>

  );
};

export default InitiativesPage;
