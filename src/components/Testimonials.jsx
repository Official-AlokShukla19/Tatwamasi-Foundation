import React from 'react';
import { motion } from 'framer-motion';

const stories = [
  {
    id: 1,
    name: "Aarti D.",
    role: "Community Member",
    quote: "Finding this space was like finding a quiet room in a loud world. It's not just about the resources; it's about feeling seen as a human being.",
    initial: "আ"
  },
  {
    id: 2,
    name: "Dr. Vikram S.",
    role: "Volunteer Educator",
    quote: "The approach here is different. We aren't 'fixing' people. We are simply watering the soil so they can grow on their own terms.",
    initial: "বি"
  }
];

const Testimonials = () => {
  return (
    <section id="voices" className="py-32 md:py-48 relative bg-paper overflow-hidden z-20">
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-30 z-0"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-primary/20"></div>
            <h2 className="text-xs font-sans uppercase tracking-[0.4em] text-primary/50">Voices & Stories</h2>
            <div className="w-12 h-[1px] bg-primary/20"></div>
          </div>
          <h3 className="text-5xl md:text-7xl font-serif text-primary mb-8 tracking-tight">Echoes of Change</h3>
          <p className="font-serif text-primary/70 max-w-xl text-xl font-light italic leading-relaxed">
            "The true measure of our work lives in the stories of those we walk alongside."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: index * 0.3 }}
              className="group relative p-12 md:p-16 bg-dusty border border-primary/20 paper-shadow transition-all duration-700 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Photo corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary/30 m-3"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary/30 m-3"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary/30 m-3"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary/30 m-3"></div>
              
              <div className="text-8xl text-accent/10 font-serif absolute top-4 left-6 leading-none select-none group-hover:text-accent/20 transition-colors duration-700">"</div>
              
              <p className="relative z-10 text-xl md:text-2xl font-serif text-primary/80 leading-loose italic mb-12 pt-8">
                {story.quote}
              </p>
              
              <div className="flex items-center gap-6 border-t border-primary/10 pt-8">
                <div className="w-14 h-14 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                  <span className="font-bengali text-2xl text-primary/60">{story.initial}</span>
                </div>
                <div>
                  <h4 className="font-serif text-primary text-xl">{story.name}</h4>
                  <p className="font-sans text-xs text-primary/50 tracking-[0.2em] uppercase mt-2">{story.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
