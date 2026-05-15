import React from 'react';
import { motion } from 'framer-motion';

const StoryBridge = ({ 
  title, 
  subtitle, 
  bengaliText, 
  imageLabel, 
  className = "", 
  variant = "light" 
}) => {
  const isDark = variant === "dark";

  return (
    <section className={`py-24 relative flex flex-col items-center justify-center text-center px-6 overflow-hidden min-h-[40vh] ${className}`}>
      {/* Background Textures */}
      <div className={`absolute inset-0 ${isDark ? 'bg-primary' : 'bg-paper'} z-0`}></div>
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-30 z-10"></div>
      
      {/* Decorative Gradients */}
      <div className={`absolute inset-0 z-20 ${isDark ? 'from-primary/80' : 'from-paper/80'} story-gradient-top`}></div>
      <div className={`absolute inset-0 z-20 ${isDark ? 'from-primary/80' : 'from-paper/80'} story-gradient-bottom`}></div>

      {/* Large Bengali Motif in Background */}
      {bengaliText && (
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[40rem] font-bengali ${isDark ? 'text-white' : 'text-primary'} opacity-[0.03] select-none pointer-events-none z-10`}>
          {bengaliText}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 max-w-4xl"
      >
        {imageLabel && (
          <span className={`text-[10px] font-sans uppercase tracking-[0.5em] ${isDark ? 'text-accent' : 'text-accent'} mb-12 block opacity-60`}>
            {imageLabel}
          </span>
        )}
        
        {title && (
          <h2 className={`text-4xl md:text-7xl font-serif ${isDark ? 'text-dusty' : 'text-primary'} mb-8 leading-tight tracking-tight`}>
            {title}
          </h2>
        )}
        
        {subtitle && (
          <p className={`text-lg md:text-2xl font-serif italic ${isDark ? 'text-dusty/60' : 'text-primary/70'} max-w-2xl mx-auto leading-relaxed`}>
            "{subtitle}"
          </p>
        )}

        {/* Divider */}
        <div className={`mt-16 flex items-center justify-center gap-6 opacity-30`}>
          <div className={`w-12 h-[1px] ${isDark ? 'bg-dusty' : 'bg-primary'}`}></div>
          <span className={`text-xl ${isDark ? 'text-dusty' : 'text-primary'}`}>❈</span>
          <div className={`w-12 h-[1px] ${isDark ? 'bg-dusty' : 'bg-primary'}`}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default StoryBridge;
