import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 relative bg-paper z-10">
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-50 z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-center">
          {/* Narrative Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-accent/40"></div>
              <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-accent">The Foundation</h2>
            </div>
            
            <div className="prose prose-xl prose-p:text-primary/90 prose-p:font-serif prose-p:leading-[1.7]">
              <p className="relative">
                <span className="float-left text-6xl md:text-8xl leading-[0.8] font-serif text-accent mr-4 mt-2 select-none opacity-80">
                  I
                </span>
                t began with a simple belief: that profound transformation is rooted in human connection. We are not just an organization; we are a collective movement striving to nurture potential and create spaces where every voice is heard.
              </p>
              <p className="mt-6 text-lg text-primary/70 font-sans leading-relaxed font-light italic">
                Our mission is to empower rural communities by providing the resources, mentorship, and support needed for local seeds of change to flourish into sustainable legacies.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-primary/5 pt-10">
              <div className="">
                <p className="text-4xl font-serif text-primary">12+</p>
                <p className="text-xs uppercase tracking-widest text-primary/60 mt-2 font-sans">Active Chapters</p>
              </div>
              <div className="">
                <p className="text-4xl font-serif text-primary">5k+</p>
                <p className="text-xs uppercase tracking-widest text-primary/60 mt-2 font-sans">Lives Touched</p>
              </div>
            </div>
          </motion.div>

          {/* Editorial Image Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative w-full aspect-[4/5] max-w-sm md:max-w-md"
          >
            {/* Stacked photo effect */}
            <div className="absolute inset-0 bg-dusty border border-muted shadow-sm rotate-2 translate-x-2 translate-y-2 -z-20 p-2"></div>
            <div className="absolute inset-0 bg-paper border border-muted shadow-sm rotate-1 translate-x-1 translate-y-1 -z-10 p-2"></div>
            
            <div className="w-full h-full bg-primary/5 relative flex items-center justify-center border border-muted paper-shadow p-4 bg-dusty overflow-hidden">
               <div className="w-full h-full border border-primary/10 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/5 mix-blend-multiply opacity-30"></div>
                  
                  <div className="text-primary/5 text-[15rem] font-bengali select-none z-0 absolute -bottom-10 -right-10">
                    শ
                  </div>

                  <p className="text-primary/40 font-serif italic text-sm text-center px-10 relative z-10">
                    Visual archive of our early community gatherings.
                  </p>
                  
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary/20 m-4"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary/20 m-4"></div>
               </div>
               
               <div className="absolute -bottom-4 right-4 bg-paper px-4 py-2 text-primary/60 text-xs font-serif italic border border-muted shadow-sm">
                 Ref: #001 - Beginnings
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-md mx-auto mt-24 flex items-center justify-center gap-6 opacity-20 relative z-10">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-primary"></div>
        <div className="font-bengali text-xl text-primary">❈</div>
        <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-primary"></div>
      </div>
    </section>
  );
};

export default About;
