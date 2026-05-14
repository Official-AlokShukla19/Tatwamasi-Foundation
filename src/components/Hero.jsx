import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper torn-edge-bottom z-20 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 texture-overlay mix-blend-multiply z-0"></div>
      
      {/* Subtle Bengali motif background */}
      <div className="absolute top-10 right-[-10%] text-[30rem] font-bengali opacity-[0.03] select-none pointer-events-none rotate-6 text-primary">
        ত
      </div>
      <div className="absolute bottom-10 left-[-10%] text-[20rem] font-bengali opacity-[0.03] select-none pointer-events-none -rotate-6 text-primary">
        ম
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-12 bg-accent/40"></div>
          <span className="text-xs font-sans uppercase tracking-[0.4em] text-accent/80">
            Chapter I
          </span>
          <div className="h-px w-12 bg-accent/40"></div>
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-serif text-primary mb-10 leading-[1.1] tracking-tight">
          A Journey Towards <br />
          <span className="italic text-accent font-normal block mt-4">Meaningful Change</span>
        </h1>
        
        <p className="text-lg md:text-xl text-primary/70 font-serif mb-16 max-w-2xl mx-auto leading-relaxed">
          Not just an organization, but a deeply rooted story of resilience. 
          Join us in turning the pages of hope, struggle, and community transformation.
        </p>
        
        <div className="flex flex-col items-center gap-8">
          <motion.button 
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border border-primary text-primary rounded-sm font-sans text-sm tracking-[0.2em] hover:bg-primary hover:text-dusty transition-colors duration-500 relative overflow-hidden group"
          >
            <span className="relative z-10">OPEN THE BOOK</span>
          </motion.button>
          
          <div className="flex items-center gap-4 opacity-40 mt-4">
            <span className="font-bengali text-xl text-primary">তত্ত্বমসি</span>
          </div>
        </div>
      </motion.div>

      {/* Decorative scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-4 font-sans text-primary/60">Read On</span>
        <div className="w-px h-20 bg-primary/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 80, 80] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/4 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
