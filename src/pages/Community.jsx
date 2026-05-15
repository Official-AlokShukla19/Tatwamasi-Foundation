import React from 'react';
import { motion } from 'framer-motion';
import StoryBridge from '../components/StoryBridge';

const Community = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-comm-beige text-ink min-h-screen font-serif selection:bg-comm-terracotta/30 relative z-10"
    >
      {/* Mud-wall/Rustic texture overlay - Reduced opacity for better contrast */}
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-20 z-0 pointer-events-none"></div>
      
      {/* Hero Section - Tightened spacing */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden px-6 py-12 md:py-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-comm-terracotta/5 rounded-full blur-[100px] z-0"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-5xl"
        >
          <span className="text-xs font-sans uppercase tracking-[0.5em] text-comm-terracotta mb-4 block">Our Roots</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-comm-red mb-6 leading-tight">
            Where Communities <span className="italic text-comm-olive block mt-1">Rise Together</span>
          </h1>
          <p className="text-lg md:text-xl text-comm-clay max-w-2xl mx-auto italic leading-relaxed font-medium">
            A tapestry woven with shared struggles, heritage, and the unyielding strength of collective belonging.
          </p>
        </motion.div>
      </section>

      {/* Narrative Bridge 1 - Reduced spacing */}
      <div className="py-8">
        <StoryBridge 
          bengaliText="মাটি" 
          imageLabel="Soil & Spirit"
          title="The Breath of the Land"
          subtitle="Before we build, we listen. To the elders, to the children, and to the silent wisdom of the soil itself."
        />
      </div>

      {/* Heritage & Identity - Image First Layout Flow */}
      <section className="py-16 md:py-24 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image First Column - Prominent and impactful */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative order-1"
            >
              <div className="aspect-[4/3] md:aspect-[4/5] bg-comm-clay/10 border border-comm-terracotta/20 paper-shadow overflow-hidden group">
                <div className="absolute inset-0 bg-comm-terracotta/5 mix-blend-multiply"></div>
                <div className="w-full h-full flex items-center justify-center italic text-comm-clay/60 p-12 text-center border-8 border-white/50 m-4">
                  [Documentary Portrait: An elder sharing stories by the banyan tree]
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 border border-comm-terracotta/10 rounded-full flex items-center justify-center text-3xl text-comm-terracotta/20 animate-spin-slow z-20 bg-comm-beige shadow-sm">
                ❈
              </div>
            </motion.div>

            {/* Narrative Content Column - Following the image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="order-2"
            >
              <h2 className="text-3xl md:text-5xl text-comm-red mb-6 leading-tight">Heritage as an Anchor</h2>
              <p className="text-xl text-comm-clay leading-relaxed mb-6 italic font-medium">
                In a world that moves too fast, our traditions are the weight that keeps us from drifting. We live our culture through every collective action.
              </p>
              <div className="w-20 h-px bg-comm-terracotta/20 mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-comm-terracotta/20 flex items-center justify-center text-comm-terracotta font-serif text-xs">01</div>
                  <div>
                    <h4 className="text-lg text-comm-red mb-1">Oral History Archive</h4>
                    <p className="text-comm-clay/80 text-sm">Recording the forgotten songs and stories of rural Bengal.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-comm-terracotta/20 flex items-center justify-center text-comm-terracotta font-serif text-xs">02</div>
                  <div>
                    <h4 className="text-lg text-comm-red mb-1">Artisan Guilds</h4>
                    <p className="text-comm-clay/80 text-sm">Reviving traditional crafts as a sustainable livelihood.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Women-Led Empowerment Section - Tightened spacing */}
      <section className="py-20 md:py-24 bg-comm-red text-comm-beige relative overflow-hidden">
        <div className="absolute inset-0 texture-overlay opacity-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12 md:mb-16">
            <span className="text-xs font-sans uppercase tracking-[0.5em] text-comm-gold/80 mb-4 block">Documentary Series</span>
            <h2 className="text-4xl md:text-6xl mb-4 leading-none tracking-tight font-serif">The Matriarchs of <span className="italic block md:inline text-comm-gold font-normal">Change</span></h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              {/* Image First in this sub-section too */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="aspect-video bg-white/5 border border-white/10 relative group overflow-hidden mb-8"
              >
                 <div className="w-full h-full flex items-center justify-center italic text-comm-beige/40 p-12 text-center">
                   [Cinematic Visual: A group of women organizing a community meeting]
                 </div>
                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-comm-red to-transparent">
                   <p className="text-xs font-sans tracking-widest uppercase text-comm-gold">Session 42: Economic Independence workshop</p>
                 </div>
              </motion.div>

              <div className="space-y-6">
                <blockquote className="text-2xl md:text-3xl italic leading-tight text-comm-gold font-serif border-l-2 border-comm-gold/40 pl-6">
                  "When a woman rises, she doesn't just lift herself; she lifts the roof over her family's head and the future of her children."
                </blockquote>
                <p className="text-lg leading-relaxed text-comm-beige/80 max-w-2xl italic">
                  In our villages, empowerment isn't a program; it's a reclamation. We provide the tools—micro-finance, skill training, and leadership coaching—but the fire is already there.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-10 lg:pt-12">
              <div className="bg-white/5 p-8 border border-white/10 rounded-none backdrop-blur-sm">
                <h4 className="text-xs font-sans uppercase tracking-[0.4em] text-comm-gold mb-8">The Ripple Effect</h4>
                <div className="space-y-8">
                  <div>
                    <span className="text-xs font-sans uppercase tracking-widest text-comm-beige/40 block mb-2">Phase I: Awakening</span>
                    <p className="text-base italic text-comm-beige/70">Self-help groups forming around shared financial goals and mutual support.</p>
                  </div>
                  <div className="w-full h-px bg-white/5"></div>
                  <div>
                    <span className="text-xs font-sans uppercase tracking-widest text-comm-beige/40 block mb-2">Phase II: Ownership</span>
                    <p className="text-base italic text-comm-beige/70">Women managing local resources, from water committees to educational boards.</p>
                  </div>
                  <div className="w-full h-px bg-white/5"></div>
                  <div>
                    <span className="text-xs font-sans uppercase tracking-widest text-comm-beige/40 block mb-2">Phase III: Legacy</span>
                    <p className="text-base italic text-comm-beige/70">Mentoring the next generation of girls to see themselves as leaders.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer border border-comm-gold/20 p-6 hover:bg-comm-gold/10 transition-all">
                <div className="w-10 h-10 rounded-full border border-comm-gold flex items-center justify-center text-comm-gold group-hover:bg-comm-gold group-hover:text-comm-red transition-all">
                  →
                </div>
                <div>
                  <p className="text-xs font-sans uppercase tracking-[0.3em] text-comm-gold">Read Next Chapter</p>
                  <p className="text-lg font-serif italic">Education & Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Bridge 2 - Tighter spacing */}
      <div className="py-8">
        <StoryBridge 
          variant="light"
          bengaliText="একতা" 
          imageLabel="The Circle"
          title="Strength in Unity"
          subtitle="Like roots intertwining beneath the soil, our shared humanity is what keeps us standing tall against the winds of time."
        />
      </div>

      {/* Closing Section with Call to Action - Purposeful Footer Transition */}
      <section className="py-20 md:py-28 relative z-10 flex flex-col items-center text-center px-6 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl relative z-10"
        >
          <h2 className="text-4xl md:text-5xl text-comm-red mb-10 leading-tight">Will You Walk With Us?</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-comm-red text-comm-beige rounded-none hover:bg-comm-clay transition-colors font-sans uppercase tracking-[0.2em] text-xs">
              Support Our Community
            </button>
            <button className="px-10 py-5 border border-comm-red text-comm-red rounded-none hover:bg-comm-red hover:text-comm-beige transition-all font-sans uppercase tracking-[0.2em] text-xs">
              Read Our Stories
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Community;
