import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "Phase I",
    title: "The Silent Struggle",
    description: "Before intervention, we sit with the truth. We document the raw, unfiltered realities of grassroots communities. Empathy begins with an open heart and a listening ear.",
    motif: "শুনুন",
    date: "The Beginning"
  },
  {
    num: "Phase II",
    title: "Gathering the Threads",
    description: "Solutions are not handed down; they are woven together. We collaborate with local voices, recognizing their inherent wisdom and agency in shaping their own future.",
    motif: "নকশা",
    date: "Finding Roots"
  },
  {
    num: "Phase III",
    title: "Sowing the Seeds",
    description: "Action is grounded and deliberate. We provide resources not as charity, but as tools for empowerment—nurturing the soil for long-term resilience.",
    motif: "কাজ",
    date: "Taking Action"
  },
  {
    num: "Phase IV",
    title: "Blossoming Hope",
    description: "Transformation takes time. We stand beside the community as they reclaim their narrative, celebrating every small victory on the path to enduring change.",
    motif: "চিন্তা",
    date: "A New Dawn"
  }
];

const Journey = () => {
  return (
    <section id="journey" className="py-24 md:py-32 relative overflow-hidden bg-dusty torn-edge-bottom z-10 pb-28">
      {/* Texture Overlay */}
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-50 z-0"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-24"
        >
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-accent/80 block mb-6">Our Narrative</span>
          <h2 className="text-5xl md:text-7xl font-serif text-primary mb-10 tracking-tight">The Unfolding Path</h2>
          <p className="font-serif text-primary/70 max-w-2xl mx-auto text-xl leading-relaxed italic">
            "Transformation is rarely a straight line. It is a mindful, unfolding process carved out of resilience."
          </p>
        </motion.div>

        <div className="relative">
          {/* Spine of the book / Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/20 to-transparent transform md:-translate-x-1/2"></div>
          
          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.num} className="relative group">
                  {/* Timeline marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 md:translate-y-6 flex flex-col items-center z-20">
                    <motion.div 
                      whileInView={{ scale: [0, 1] }}
                      viewport={{ once: true, margin: "0px" }}
                      transition={{ duration: 0.3 }}
                      className="w-4 h-4 rounded-full bg-accent border-4 border-dusty shadow-md"
                    />
                    <span className="hidden md:block text-xs font-serif italic text-primary/40 mt-4 absolute top-8 whitespace-nowrap">{step.date}</span>
                  </div>

                  <div className={`flex flex-col md:flex-row pl-12 md:pl-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "0px" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className={`md:w-1/2 ${isEven ? 'md:pl-24' : 'md:pr-24'}`}
                    >
                      <div className="flex flex-col mb-6">
                        <span className="text-sm font-sans tracking-[0.2em] text-accent/80 uppercase mb-2">{step.num}</span>
                        <h3 className="text-4xl md:text-5xl font-serif text-primary">{step.title}</h3>
                      </div>
                      
                      <div className="relative">
                        <span className="absolute -top-6 -left-6 md:-top-8 md:-left-8 text-[5rem] md:text-[8rem] font-serif text-primary/5 select-none font-bengali pointer-events-none">
                          {step.motif}
                        </span>
                        <p className="text-primary/75 font-serif leading-loose text-lg relative z-10">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Image Placeholder / Visual side */}
                    <motion.div 
                      initial={{ opacity: 0, filter: 'blur(10px)' }}
                      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                      viewport={{ once: true, margin: "0px" }}
                      transition={{ duration: 0.5 }}
                      className="md:w-1/2 mt-12 md:mt-0 flex items-center justify-center"
                    >
                      <div className={`w-full aspect-[4/3] bg-primary/5 rounded-sm border border-primary/10 relative overflow-hidden p-4 ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
                         <div className="w-full h-full border border-primary/20 border-dashed rounded-sm flex items-center justify-center opacity-50">
                           <span className="font-serif italic text-primary/40 text-sm">Documentary Photograph</span>
                         </div>
                         {/* Photo corners aesthetic */}
                         <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-primary/30"></div>
                         <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-primary/30"></div>
                         <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-primary/30"></div>
                         <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-primary/30"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Narrative Section Break */}
      <div className="max-w-md mx-auto mt-40 flex items-center justify-center gap-6 opacity-40 relative z-10">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-primary"></div>
        <div className="font-bengali text-2xl tracking-tighter text-primary">❈</div>
        <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-primary"></div>
      </div>
    </section>
  );
};

export default Journey;
