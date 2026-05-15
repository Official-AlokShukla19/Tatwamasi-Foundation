import React from 'react';
import { motion } from 'framer-motion';
import StoryBridge from '../components/StoryBridge';

const Education = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-edu-cream text-edu-brown min-h-screen font-serif selection:bg-edu-mustard/30 relative z-10"
    >
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-25 z-0 pointer-events-none"></div>
      
      {/* Hero Section - Tightened */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden px-6 py-12 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-edu-mustard/5 z-0"></div>
        <div className="absolute top-10 right-10 text-[12rem] font-bengali opacity-[0.02] rotate-12 text-edu-maroon select-none pointer-events-none">
          শি
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-4xl"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-edu-orange/30"></div>
            <span className="text-xs font-sans uppercase tracking-[0.4em] text-edu-orange">Education & Growth</span>
            <div className="h-px w-8 bg-edu-orange/30"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-edu-brown mb-6 leading-tight tracking-tight">
            Education Lights the <span className="italic text-edu-mustard block mt-1">Path Forward</span>
          </h1>
          <p className="text-lg md:text-xl text-edu-brown/70 max-w-2xl mx-auto italic leading-relaxed">
            Every child carries a future. We are providing the notebook where they can write their own story.
          </p>
        </motion.div>
      </section>

      {/* Narrative Bridge 1 - Reduced spacing */}
      <div className="py-6">
        <StoryBridge 
          bengaliText="জ্ঞান" 
          imageLabel="The Spark"
          title="More Than a Classroom"
          subtitle="It is a sanctuary of possibility where first-generation learners rewrite the history of their entire lineage."
        />
      </div>

      {/* Story Section - IMAGE FIRST SEQUENCE */}
      <section className="py-16 md:py-24 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
          {/* Image Content First Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:w-1/2 relative order-1"
          >
            <div className="aspect-[4/5] bg-edu-brown/5 border border-edu-brown/20 p-2 shadow-xl relative group overflow-hidden paper-shadow">
               <div className="absolute inset-0 bg-edu-mustard/5 mix-blend-multiply opacity-30 group-hover:opacity-10 transition-opacity duration-1000"></div>
               <div className="w-full h-full border border-edu-brown/10 border-dashed flex items-center justify-center bg-white/40 relative z-10">
                 <span className="font-sans text-xs tracking-widest uppercase text-edu-brown/50 text-center p-8 leading-loose italic">
                   [Cinematic Documentary Photo: A child reading by candlelight, illustrating the transition to digital literacy]
                 </span>
               </div>
               <div className="absolute top-0 right-0 p-4 text-4xl text-edu-mustard/10 font-bengali select-none">বই</div>
               <div className="absolute bottom-4 left-4 bg-paper/90 px-3 py-1 border border-muted/30 text-[10px] font-serif italic text-edu-brown/40 uppercase tracking-widest">
                 Ref: #EDU_01
               </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:w-1/2 order-2"
          >
            <span className="text-xs font-sans uppercase tracking-[0.5em] text-edu-orange mb-4 block">Our Philosophy</span>
            <h2 className="text-3xl md:text-5xl text-edu-maroon mb-6 leading-tight">Roots of Knowledge</h2>
            <div className="prose prose-lg prose-p:text-edu-brown/80 prose-p:leading-relaxed mb-8">
              <p className="italic text-xl">
                "We realized early on that empowerment doesn't start with a curriculum; it starts with belief."
              </p>
              <p className="text-base text-edu-brown/60">
                When a child gains access to education, they become the bridge between their family's struggle and a world of opportunity. We nurture that spark through holistic engagement.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-edu-brown/5">
              <div>
                <h4 className="text-lg text-edu-maroon mb-2 font-serif">Holistic Growth</h4>
                <p className="text-xs text-edu-brown/70 leading-relaxed italic">Beyond textbooks, we focus on emotional intelligence and creative expression.</p>
              </div>
              <div>
                <h4 className="text-lg text-edu-maroon mb-2 font-serif">Digital Literacy</h4>
                <p className="text-xs text-edu-brown/70 leading-relaxed italic">Bridging the rural-urban divide through technology and coding workshops.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Timeline - Tightened spacing */}
      <section className="py-20 md:py-24 bg-edu-brown text-edu-cream relative overflow-hidden">
        <div className="absolute inset-0 paper-grain opacity-10"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl mb-16 font-serif tracking-tight">The Unfolding Path</h2>
          
          <div className="relative space-y-16 md:space-y-24">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-edu-mustard/10 -translate-x-1/2 hidden md:block"></div>
            
            {[
              { year: "The Seed", title: "Library Foundations", desc: "Establishing safe havens for reading and curiosity in 15 remote villages." },
              { year: "The Growth", title: "Empowering Young Women", desc: "Specialized skill-building and leadership programs for girls aged 14-18." },
              { year: "The Harvest", title: "First-Gen Success", desc: "Seeing our first cohort of students transition to higher education." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 md:text-right px-6">
                  <div className={`flex flex-col ${index % 2 === 1 ? 'md:items-start' : 'md:items-end'}`}>
                    <span className="text-xs font-sans uppercase tracking-[0.4em] text-edu-mustard mb-2 block">{item.year}</span>
                    <h3 className="text-2xl md:text-3xl mb-3 font-serif italic">{item.title}</h3>
                    <p className="text-edu-cream/60 text-base italic leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-edu-mustard shadow-[0_0_10px_rgba(200,146,58,0.5)] z-10 relative"></div>
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Bridge 2 - Tighter */}
      <div className="py-6">
        <StoryBridge 
          variant="light"
          bengaliText="আলো" 
          imageLabel="The Light"
          title="A New Dawn"
          subtitle="Education is not the filling of a vessel, but the lighting of a fire."
        />
      </div>

      {/* Closing Section - Tighter spacing */}
      <section className="py-16 md:py-24 relative z-10 flex flex-col items-center text-center px-6">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-edu-brown/10 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl text-edu-maroon mb-10 leading-tight">Be Part of Their Story</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-edu-maroon text-edu-cream rounded-none hover:bg-edu-orange transition-colors font-sans uppercase tracking-[0.2em] text-xs">
              Sponsor a Student
            </button>
            <button className="px-10 py-5 border border-edu-maroon text-edu-maroon rounded-none hover:bg-edu-maroon hover:text-edu-cream transition-all font-sans uppercase tracking-[0.2em] text-xs">
              Volunteer Locally
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Education;
