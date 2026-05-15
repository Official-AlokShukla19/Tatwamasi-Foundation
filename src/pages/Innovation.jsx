import React from 'react';
import { motion } from 'framer-motion';
import StoryBridge from '../components/StoryBridge';
import { Link } from 'react-router-dom';
const Innovation = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="bg-inno-midnight text-inno-silver min-h-screen font-sans selection:bg-inno-cyan/30 relative z-10"
    >
      {/* Subtle modern grid/noise overlay */}
      <div className="absolute inset-0 texture-overlay mix-blend-screen opacity-[0.08] pointer-events-none z-0"></div>
      
      {/* Hero Section - Tightened spacing */}
      <section className="relative min-h-[75vh] flex flex-col items-center justify-center overflow-hidden px-6 py-12 md:py-20">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-inno-cyan/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-inno-indigo rounded-full blur-[100px] pointer-events-none z-0"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-5xl"
        >
          <span className="text-xs font-mono uppercase tracking-[0.5em] text-inno-cyan mb-4 block">The Third Pillar</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-inno-white mb-6 leading-tight font-light">
            Innovating for <br />
            <span className="text-inno-copper font-serif italic">Human Progress</span>
          </h1>
          <p className="text-lg md:text-xl text-inno-silver/80 max-w-2xl mx-auto font-light leading-relaxed">
            Where vision meets community impact. We are building scalable, sustainable futures without losing our human roots.
          </p>
        </motion.div>
      </section>

      {/* Narrative Bridge 1 - Tighter vertical rhythm */}
      <div className="py-6">
        <StoryBridge 
          variant="dark"
          bengaliText="নতুন" 
          imageLabel="The Blueprint"
          title="Engineering Empathy"
          subtitle="Innovation isn't about replacing the old; it's about empowering the existing with tools that respect their dignity."
        />
      </div>

      {/* Innovation Stories Section - Reduced spacing */}
      <section className="py-16 md:py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Digital Literacy", desc: "Equipping rural youth with the language of the future—coding and digital ethics.", color: "border-inno-cyan/20" },
              { title: "Sustainable Living", desc: "Implementing solar grids and water filtration systems that the community owns.", color: "border-inno-copper/20" },
              { title: "Creative Economy", desc: "Using digital platforms to bring local artisan work to a global audience.", color: "border-inno-silver/20" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`p-8 bg-inno-indigo/20 border ${item.color} backdrop-blur-sm rounded-none group hover:bg-inno-indigo/40 transition-all duration-700`}
              >
                <div className="w-10 h-[1px] bg-inno-cyan/40 mb-6 group-hover:w-16 transition-all duration-700"></div>
                <h3 className="text-xl text-inno-white font-serif mb-4">{item.title}</h3>
                <p className="text-inno-silver/50 font-light leading-relaxed italic text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentary Style Narrative Section - IMAGE FIRST SEQUENCE */}
      <section className="py-20 md:py-24 bg-white/[0.01] relative overflow-hidden">
        <div className="absolute inset-0 paper-grain opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Side - Now first in flow */}
            <div className="lg:w-1/2 w-full order-1">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-video bg-inno-indigo/40 border border-inno-cyan/20 p-4 paper-shadow group relative"
              >
                <div className="absolute inset-0 bg-inno-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="w-full h-full border border-white/5 border-dashed flex items-center justify-center text-center p-12 italic text-inno-silver/30 text-sm">
                  [Cinematic Visual: Sunlight reflecting off local solar installations in a rural setting]
                </div>
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-inno-cyan/30 m-6"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-inno-cyan/30 m-6"></div>
              </motion.div>
            </div>

            {/* Text Side - Following the impact */}
            <div className="lg:w-1/2 order-2">
               <span className="text-xs font-mono uppercase tracking-[0.5em] text-inno-copper mb-4 block">Case Study 01</span>
               <h2 className="text-3xl md:text-5xl text-inno-white font-serif mb-6 leading-tight">The Solar <br /><span className="italic text-inno-cyan font-normal">Matriarchs</span></h2>
               <p className="text-lg md:text-xl text-inno-silver/80 leading-relaxed mb-10 font-light italic">
                 "In the village of Sundar Gram, innovation didn't come from a lab. It came from the local women's committee deciding to harness the sun to power their night classes."
               </p>
               <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                 <div className="w-12 h-px bg-inno-copper/50"></div>
                 <p className="text-xs font-mono text-inno-copper tracking-[0.3em] uppercase">Project: Decentralized Energy</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section - Fixed Footer Separation Issue */}
      <section className="py-24 md:py-32 relative flex flex-col items-center text-center px-6 overflow-hidden z-10">
        {/* Tonal contrast background to separate from footer - stronger gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-inno-midnight to-primary z-0"></div>
        <div className="absolute inset-0 texture-overlay opacity-10 mix-blend-soft-light z-0"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl relative z-10"
        >
          <h2 className="text-4xl md:text-6xl text-inno-white mb-8 tracking-tight font-light">The Future is <span className="font-serif italic text-inno-cyan font-normal">Human</span></h2>
          <p className="text-lg md:text-xl text-inno-silver/60 font-light leading-relaxed mb-12 italic">
            Join us in engineering a tomorrow that honors our shared heritage.
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <Link to="/get-involved" className="px-10 py-5 bg-inno-cyan text-inno-midnight rounded-none hover:bg-inno-white transition-colors font-sans uppercase tracking-[0.2em] text-xs text-center inline-block">
              Support Innovation
            </Link>
            <Link to="/contact" className="px-10 py-5 border border-inno-cyan text-inno-cyan rounded-none hover:bg-inno-cyan hover:text-inno-midnight transition-all font-sans uppercase tracking-[0.2em] text-xs text-center inline-block">
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Strong footer separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent relative z-20"></div>
    </motion.div>

  );
};

export default Innovation;
