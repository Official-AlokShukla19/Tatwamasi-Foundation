import React from 'react';
import { motion } from 'framer-motion';

const Community = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="bg-comm-beige text-comm-clay min-h-screen font-serif selection:bg-comm-terracotta/30 relative z-10"
    >
      {/* Mud-wall/Rustic texture overlay */}
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-60 z-0 pointer-events-none"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-comm-terracotta/5 rounded-full blur-[100px] z-0"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-5xl pt-20"
        >
          <span className="text-xs font-sans uppercase tracking-[0.5em] text-comm-terracotta mb-8 block">Our Roots</span>
          <h1 className="text-6xl md:text-8xl text-comm-red mb-8 leading-tight">
            Where Communities <span className="italic text-comm-olive block mt-2">Rise Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-comm-clay/80 max-w-2xl mx-auto italic leading-relaxed">
            A tapestry woven with shared struggles, heritage, and the unyielding strength of collective belonging.
          </p>
        </motion.div>
        
        <div className="absolute bottom-16 text-comm-terracotta/40 font-bengali text-4xl animate-pulse">
          ▼
        </div>
      </section>

      {/* Heritage & Identity */}
      <section className="py-32 px-6 md:px-12 border-t border-comm-terracotta/20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl text-comm-red mb-6">Heritage & Identity</h2>
            <div className="w-24 h-px bg-comm-terracotta/40 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5 }}
              className="bg-white/30 p-10 border border-comm-terracotta/20 shadow-sm relative group"
            >
              {/* Folk art border motif */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-comm-terracotta to-comm-gold opacity-50"></div>
              <h3 className="text-3xl text-comm-red mb-6">Cultural Preservation</h3>
              <p className="text-lg text-comm-clay/80 leading-relaxed italic mb-8">
                Traditions are not just echoes of the past; they are the anchors of our present. We document and celebrate the local stories that define us.
              </p>
              <div className="aspect-video bg-comm-clay/10 border border-comm-clay/20 flex items-center justify-center">
                 <span className="text-xs font-sans uppercase tracking-widest text-comm-clay/50">Oral History Archive</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="bg-white/30 p-10 border border-comm-terracotta/20 shadow-sm relative mt-0 md:mt-24"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-comm-olive to-comm-terracotta opacity-50"></div>
              <h3 className="text-3xl text-comm-red mb-6">Shared Stories</h3>
              <p className="text-lg text-comm-clay/80 leading-relaxed italic mb-8">
                Every face holds a narrative. By bringing community leaders together, we create a living journal of resilience and collective memory.
              </p>
              <div className="aspect-video bg-comm-clay/10 border border-comm-clay/20 flex items-center justify-center">
                 <span className="text-xs font-sans uppercase tracking-widest text-comm-clay/50">Community Portraits</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grassroots Change */}
      <section className="py-32 bg-comm-terracotta/5 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl text-comm-red mb-16">Grassroots Transformation</h2>
          
          <div className="relative border-l border-comm-terracotta/30 ml-4 md:ml-0 md:border-none">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-comm-terracotta/30 -translate-x-1/2"></div>
            
            {[
              { title: "Village Development", desc: "Building sustainable infrastructure from the ground up." },
              { title: "Women-Led Initiatives", desc: "Empowering matriarchs to guide economic change." },
              { title: "Collective Participation", desc: "Decisions made in circles, not top-down." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right px-6">
                  <h4 className="text-2xl text-comm-red mb-2">{item.title}</h4>
                  <p className="text-comm-clay/80 italic">{item.desc}</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-comm-gold border-2 border-comm-beige z-10 relative -left-[22px] md:left-auto"></div>
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-40 relative flex flex-col items-center text-center px-6 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-comm-terracotta/20 to-transparent -z-10"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl text-comm-red mb-8 tracking-tight">Strength in Unity</h2>
          <p className="text-xl text-comm-clay/80 italic leading-relaxed mb-16">
            Like roots intertwining beneath the soil, our shared humanity is what keeps us standing tall against the winds of time.
          </p>
          <div className="flex items-center justify-center gap-4 opacity-50">
            <span className="font-bengali text-4xl text-comm-terracotta">একতা</span>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Community;
