import React from 'react';
import { motion } from 'framer-motion';
import StandardButton from './Button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper torn-edge-bottom z-20 pt-24 pb-32">
      {/* Background elements */}
      <div className="absolute inset-0 texture-overlay mix-blend-multiply z-0"></div>
      
      {/* Subtle Bengali motif background */}
      <div className="absolute top-20 right-[-10%] text-[30rem] font-bengali opacity-[0.03] select-none pointer-events-none rotate-6 text-primary">
        ত
      </div>
      <div className="absolute bottom-20 left-[-10%] text-[20rem] font-bengali opacity-[0.03] select-none pointer-events-none -rotate-6 text-primary">
        ম
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-5xl mx-auto px-6 flex flex-col items-center"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col items-center mb-10 relative z-10"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-accent/30"></div>
            <span className="text-xs font-sans uppercase tracking-[0.6em] text-accent ml-[0.6em]">
              Chapter I
            </span>
            <div className="h-px w-8 bg-accent/30"></div>
          </div>
          <div className="mt-3 text-xs font-sans uppercase tracking-[0.3em] text-primary/20">
            The Awakening
          </div>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-primary mb-8 md:mb-10 leading-[1.1] tracking-tight">
          A Journey Towards <br />
          <span className="italic text-accent font-normal block mt-2 md:mt-4">Meaningful Change</span>
        </h1>
        
        <p className="text-base md:text-xl text-primary/60 font-serif mb-10 md:mb-16 max-w-2xl mx-auto leading-relaxed">
          Not just an organization, but a deeply rooted story of resilience. 
          Join us in turning the pages of hope, struggle, and community transformation.
        </p>
        
        <div className="flex flex-col items-center gap-8">
          <StandardButton 
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            OPEN THE BOOK
          </StandardButton>
          
          <div className="flex items-center gap-4 opacity-20 mt-2">
            <span className="font-bengali text-lg text-primary tracking-tighter">তত্ত্বমসি</span>
          </div>
        </div>
      </motion.div>

      {/* Decorative scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 cursor-pointer group/scroll"
        onClick={() => {
          const element = document.getElementById('about');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.3em] font-sans text-accent group-hover/scroll:text-primary transition-colors">Read Chapter</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/30 via-primary/5 to-transparent relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48, 48] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/4 bg-accent/60"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
