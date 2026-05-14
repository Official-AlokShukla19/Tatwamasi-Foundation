import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-40 relative bg-paper z-10">
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-50 z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-start">
          {/* Narrative Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 md:pt-10"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[1px] bg-accent/40"></div>
              <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-accent">The Foundation</h2>
            </div>
            
            <div className="prose prose-2xl prose-p:text-primary/90 prose-p:font-serif prose-p:leading-[1.7]">
              <p className="relative">
                <span className="float-left text-7xl md:text-9xl leading-[0.8] font-serif text-accent mr-4 mt-2 select-none opacity-80">
                  I
                </span>
                t began with a simple belief: that profound transformation is rooted in human connection. We are not just an organization; we are a collective movement of individuals striving to nurture potential, bridge gaps, and create spaces where every voice is heard.
              </p>
              <p className="mt-8 text-xl text-primary/70 font-sans leading-relaxed font-light">
                We believe that every community holds the seeds of its own flourishing. Our role is simply to provide the water, the sunlight, and the support needed for those seeds to take root.
              </p>
            </div>

            <div className="mt-16 flex items-center gap-12">
              <div className="text-center">
                <p className="text-5xl font-serif text-primary">12+</p>
                <p className="text-[10px] uppercase tracking-widest text-primary/60 mt-2 font-sans">Chapters Written</p>
              </div>
              <div className="w-[1px] h-12 bg-primary/20"></div>
              <div className="text-center">
                <p className="text-5xl font-serif text-primary">5k+</p>
                <p className="text-[10px] uppercase tracking-widest text-primary/60 mt-2 font-sans">Lives Touched</p>
              </div>
            </div>
          </motion.div>

          {/* Editorial Image Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative w-full aspect-[4/5] max-w-md mx-auto md:mx-0"
          >
            {/* Soft decorative background block - like a stack of photos */}
            <div className="absolute inset-0 bg-dusty border border-muted shadow-sm rotate-2 translate-x-3 translate-y-3 -z-20 p-2"></div>
            <div className="absolute inset-0 bg-paper border border-muted shadow-sm rotate-1 translate-x-1 translate-y-1 -z-10 p-2"></div>
            
            <div className="w-full h-full bg-primary/5 relative flex items-center justify-center border border-muted paper-shadow p-4 bg-dusty">
               <div className="w-full h-full border border-primary/20 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/5 mix-blend-multiply opacity-50"></div>
                  
                  {/* Symbolic motif in the center */}
                  <div className="text-primary/10 text-9xl font-bengali select-none z-10">
                    শ
                  </div>
                  
                  {/* Photo corners */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 m-4"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 m-4"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 m-4"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 m-4"></div>
               </div>
               
               <div className="absolute -bottom-6 right-0 bg-paper px-4 py-2 text-primary/60 text-xs font-serif italic border border-muted shadow-sm rotate-[-2deg]">
                 Archive Ref: #001 - Beginnings
               </div>
            </div>
          </motion.div>
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

export default About;
