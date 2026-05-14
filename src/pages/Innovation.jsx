import React from 'react';
import { motion } from 'framer-motion';

const Innovation = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="bg-inno-midnight text-inno-silver min-h-screen font-sans selection:bg-inno-cyan/30 relative z-10"
    >
      {/* Subtle modern grid/noise overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-screen pointer-events-none z-0"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pb-20">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-inno-cyan/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-inno-indigo rounded-full blur-[100px] pointer-events-none z-0"></div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-5xl pt-20"
        >
          <span className="text-xs font-mono uppercase tracking-[0.5em] text-inno-cyan mb-8 block">Future Forward</span>
          <h1 className="text-6xl md:text-8xl text-inno-white mb-8 leading-tight font-light">
            Innovating for <br />
            <span className="text-inno-copper font-serif italic">Human Progress</span>
          </h1>
          <p className="text-xl md:text-2xl text-inno-silver/70 max-w-2xl mx-auto font-light leading-relaxed">
            Where vision meets community impact. We are building scalable, sustainable futures without losing our human roots.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-12 w-px h-24 bg-gradient-to-b from-inno-cyan to-transparent"
        ></motion.div>
      </section>

      {/* Innovation Stories Section */}
      <section className="py-32 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Digital Literacy", desc: "Bridging the gap with modern education tools.", color: "border-inno-cyan/30" },
              { title: "Sustainable Tech", desc: "Green solutions for rural infrastructure.", color: "border-inno-copper/30" },
              { title: "Youth Led Change", desc: "Empowering the next generation of problem solvers.", color: "border-inno-silver/30" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className={`p-10 bg-inno-indigo/50 border ${item.color} backdrop-blur-sm rounded-sm hover:bg-inno-indigo transition-colors duration-500`}
              >
                <div className="w-10 h-[1px] bg-inno-white/20 mb-8"></div>
                <h3 className="text-2xl text-inno-white font-serif mb-4">{item.title}</h3>
                <p className="text-inno-silver/70 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-40 px-6 relative z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-inno-silver/10 -translate-y-1/2"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 bg-inno-midnight/80 backdrop-blur-md p-12 md:p-20 border border-inno-cyan/20">
          <h2 className="text-4xl md:text-6xl text-inno-white font-serif italic mb-8">A Scalable Horizon</h2>
          <p className="text-xl text-inno-silver/80 font-light leading-relaxed max-w-2xl mx-auto">
            Technology is merely a tool; humanity is the compass. By integrating sustainable innovations with grassroots knowledge, we are charting a course toward an empowered, equitable future.
          </p>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-40 relative flex flex-col items-center text-center px-6 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-inno-indigo to-inno-midnight -z-10"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl text-inno-white mb-8 tracking-tight font-light">The Future is <span className="font-serif italic text-inno-cyan">Human</span></h2>
          <p className="text-xl text-inno-silver/60 font-light leading-relaxed mb-16">
            Join us in engineering a tomorrow that honors our shared heritage.
          </p>
          <div className="flex items-center justify-center gap-4 opacity-50">
            <span className="font-bengali text-4xl text-inno-copper">ভবিষ্যৎ</span>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Innovation;
