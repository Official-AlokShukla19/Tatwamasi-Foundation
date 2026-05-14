import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="bg-edu-cream text-edu-brown min-h-screen font-serif selection:bg-edu-mustard/30 relative z-10"
    >
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-50 z-0 pointer-events-none"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pb-20">
        {/* Subtle chalkboard/notebook texture effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-edu-mustard/5 z-0"></div>
        <div className="absolute top-10 right-10 text-[20rem] font-bengali opacity-[0.03] rotate-12 text-edu-maroon select-none pointer-events-none">
          শি
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-4xl pt-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-edu-orange/40"></div>
            <span className="text-xs font-sans uppercase tracking-[0.4em] text-edu-orange">Chapter One</span>
            <div className="h-px w-16 bg-edu-orange/40"></div>
          </div>
          <h1 className="text-6xl md:text-8xl text-edu-brown mb-8 leading-[1.1] tracking-tight">
            Education Lights the <span className="italic text-edu-mustard block mt-2">Path Forward</span>
          </h1>
          <p className="text-xl md:text-2xl text-edu-brown/70 max-w-2xl mx-auto italic leading-relaxed">
            Every child carries a future. We are simply providing the notebook where they can write their own story.
          </p>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-12 flex flex-col items-center"
        >
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-edu-orange/60 mb-4">Turn the Page</span>
          <div className="w-px h-16 bg-edu-brown/10 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 64, 64] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/3 bg-edu-mustard"
            />
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl text-edu-maroon mb-8">Roots of Knowledge</h2>
            <div className="prose prose-xl prose-p:text-edu-brown/80 prose-p:leading-relaxed">
              <p>
                In many rural communities, a classroom is more than a room—it is a sanctuary of possibility. For first-generation learners, opening a book is an act of quiet rebellion against circumstance.
              </p>
              <p>
                We realized early on that empowerment doesn't start with a curriculum; it starts with belief. When a young girl gains access to education, she doesn't just change her life; she rewrites the history of her entire community.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, rotate: 2 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5 }}
            className="md:w-1/2 relative"
          >
            <div className="aspect-[4/3] bg-edu-brown/5 border border-edu-brown/20 p-3 shadow-md relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-edu-mustard m-2"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-edu-mustard m-2"></div>
              <div className="w-full h-full border border-edu-brown/10 border-dashed flex items-center justify-center bg-edu-cream">
                <span className="font-sans text-xs tracking-widest uppercase text-edu-brown/40">Archival Photo: Rural Classroom</span>
              </div>
            </div>
            {/* Handwritten note */}
            <div className="absolute -bottom-8 -right-4 bg-white px-4 py-3 shadow-lg rotate-[-3deg] border border-edu-brown/10">
              <span className="font-sans italic text-sm text-edu-brown/70">"The first lesson is hope."</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 px-6 bg-white/40 border-y border-edu-brown/10 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-sans uppercase tracking-[0.4em] text-edu-orange block mb-6">Milestones</span>
          <h2 className="text-4xl md:text-5xl text-edu-brown mb-24">The Unfolding Path</h2>
          
          <div className="space-y-16">
            {[
              { year: "Year I", text: "Libraries created in remote villages." },
              { year: "Year II", text: "Skill programs launched for young women." },
              { year: "Year III", text: "Hundreds of first-generation learners empowered." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="flex flex-col md:flex-row items-center gap-8 justify-center group"
              >
                <span className="font-sans text-sm tracking-[0.3em] uppercase text-edu-mustard">{item.year}</span>
                <div className="w-12 h-px bg-edu-brown/20 group-hover:bg-edu-mustard transition-colors"></div>
                <p className="text-2xl text-edu-brown/80 italic">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-40 relative flex flex-col items-center text-center px-6 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-edu-mustard/10 to-transparent -z-10"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="max-w-3xl"
        >
          <div className="text-6xl text-edu-orange/20 mb-8 font-bengali">☼</div>
          <h2 className="text-5xl md:text-7xl text-edu-maroon mb-8 tracking-tight">Dawn of a New Chapter</h2>
          <p className="text-xl text-edu-brown/70 italic leading-relaxed mb-16">
            With every page turned, a community grows stronger. The story of education is the story of a brighter sunrise.
          </p>
          <div className="flex items-center justify-center gap-4 opacity-40">
            <div className="w-20 h-[1px] bg-edu-brown"></div>
            <span className="font-bengali text-3xl text-edu-brown">শিক্ষা</span>
            <div className="w-20 h-[1px] bg-edu-brown"></div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Education;
