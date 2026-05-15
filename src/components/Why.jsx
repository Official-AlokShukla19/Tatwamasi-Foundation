import React from 'react';
import { motion } from 'framer-motion';

const statements = [
  {
    text: "Because potential is universal, but opportunity is not.",
    motif: "সম্ভাবনা"
  },
  {
    text: "Because true progress is measured by the well-being of the most vulnerable.",
    motif: "প্রগতি"
  },
  {
    text: "Because a single act of genuine care can ripple across generations.",
    motif: "সেবা"
  },
  {
    text: "Because we are bound together by our shared humanity.",
    motif: "মানবতা"
  }
];

const Why = () => {
  return (
    <section id="why" className="py-20 relative bg-primary text-dusty overflow-hidden z-20">
      <div className="absolute inset-0 texture-overlay opacity-30 mix-blend-overlay z-0"></div>
      
      {/* Decorative large motif in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-bengali opacity-[0.02] select-none pointer-events-none text-dusty">
        ক
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-xs font-sans uppercase tracking-[0.5em] text-accent mb-6">
              Core Philosophy
            </h2>
            <div className="w-16 h-[1px] bg-accent/40"></div>
          </div>

          <div className="space-y-20">
            {statements.map((statement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
                className="group flex flex-col items-center"
              >
                <span className="text-[10px] font-bengali text-dusty/20 mb-6 group-hover:text-accent transition-colors duration-700 tracking-[0.5em] uppercase">
                  {statement.motif}
                </span>
                <p className="text-3xl md:text-5xl font-serif leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity duration-700 max-w-4xl text-dusty">
                  "{statement.text}"
                </p>
                <div className="mt-12 w-12 h-[1px] bg-dusty/10 group-hover:w-24 group-hover:bg-accent transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Subtle organic gradient for the dark background */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none mix-blend-screen opacity-50"></div>
    </section>
  );
};

export default Why;
