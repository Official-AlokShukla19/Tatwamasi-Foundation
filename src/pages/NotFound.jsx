import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-paper relative overflow-hidden px-6"
    >
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-50 z-0"></div>
      
      <div className="text-center relative z-10">
        <h1 className="text-[12rem] md:text-[20rem] font-serif text-primary/5 select-none leading-none">404</h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm font-sans uppercase tracking-[0.4em] text-accent mb-6">Lost in the Story</span>
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">This Page is Still <br /><span className="italic text-accent font-normal">Being Written</span></h2>
          <p className="text-xl text-primary/60 font-serif italic mb-12 max-w-md mx-auto leading-relaxed">
            "The path you seek is not yet part of our shared narrative. Let us return to the beginning."
          </p>
          <Button to="/">Return to Prologue</Button>
        </div>
        
        <div className="mt-40 text-8xl font-bengali text-primary/5 select-none">
          খুঁজে পাওয়া যায়নি
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
