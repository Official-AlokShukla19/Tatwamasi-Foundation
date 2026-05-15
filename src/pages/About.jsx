import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    { 
      title: "Integrity", 
      desc: "We act with honesty and transparency in all our endeavors, ensuring every step is guided by truth.",
      motif: "সততা"
    },
    { 
      title: "Humility", 
      desc: "We serve with a grounded approach, respecting the deep wisdom of the communities we walk with.",
      motif: "বিনয়"
    },
    { 
      title: "Action", 
      desc: "We believe in tangible results and proactive execution, moving from thought to transformation.",
      motif: "কর্ম"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="pt-24 pb-16 bg-paper min-h-screen relative overflow-hidden"
    >
      {/* Decorative background motif */}
      <div className="absolute top-60 left-[-10%] text-[40rem] font-bengali opacity-[0.01] select-none pointer-events-none">
        গল্প
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Page Header - Tighter spacing */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center">
            <span className="text-xs font-sans uppercase tracking-[0.4em] text-comm-terracotta mb-4">Opening the Book</span>
            <div className="w-12 h-px bg-comm-terracotta/20 mb-6"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-ink mb-6 leading-tight">Our Origin <span className="italic text-edu-orange font-normal">Story</span></h1>
        </motion.div>

        {/* Origin Story Content - IMAGE FIRST SEQUENCE */}
        <section className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center mb-24">
          {/* Image Content First */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-1 w-full"
          >
            <div className="aspect-[4/3] rounded-[1rem] bg-white border border-muted/50 p-2 shadow-xl paper-shadow relative overflow-hidden group">
              <div className="absolute inset-0 bg-edu-orange/5 mix-blend-multiply opacity-20 group-hover:opacity-10 transition-opacity duration-1000"></div>
              <div className="w-full h-full border border-muted/20 rounded-[0.8rem] flex items-center justify-center relative overflow-hidden">
                 <div className="text-[15rem] font-bengali text-ink/5 select-none transition-transform duration-1000 group-hover:scale-105">
                  বি
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                   <p className="text-ink/40 font-serif italic text-center max-w-xs text-base">
                    [Documentary Visual: The founding team in a rural village setting]
                   </p>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 bg-paper/90 px-3 py-1 border border-muted/30 text-[10px] font-serif italic text-ink/60 uppercase tracking-widest">
                Archive: 2015
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="prose prose-lg md:prose-xl prose-p:text-ink/70 prose-p:font-serif prose-p:leading-relaxed space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif text-ink mb-4">A Vision Rooted in <span className="italic text-comm-terracotta font-normal">Soil</span></h2>
              <p className="text-xl text-ink/80 leading-relaxed italic">
                Tatwamasi began with a simple yet profound vision: to bridge the gap between urban opportunity and rural potential.
              </p>
              <p className="text-lg text-ink/60">
                Founded on the principles of community empowerment, we recognized that true progress is achieved not by charity, but by enabling individuals to build their own futures. Our name, <span className="text-edu-orange italic font-medium">Tatwamasi</span> ("Thou art that"), reflects our belief in the inherent potential within every individual.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision - Purposeful Structured Content */}
        <section className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-edu-cream/30 border border-edu-mustard/10 p-10 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-6xl font-serif italic">Mission</div>
            <span className="text-xs font-sans uppercase tracking-[0.4em] text-edu-mustard mb-6 block">Our Purpose</span>
            <h3 className="text-3xl font-serif text-ink mb-6">Empowering Rural <br /><span className="italic text-edu-orange font-normal">Self-Reliance</span></h3>
            <p className="text-ink/70 font-serif leading-relaxed italic text-lg">
              To create sustainable, holistic development models in rural Bengal that prioritize education, healthcare, and economic dignity, ensuring every community can thrive on its own terms.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-comm-beige/20 border border-comm-terracotta/10 p-10 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-6xl font-serif italic">Vision</div>
            <span className="text-xs font-sans uppercase tracking-[0.4em] text-comm-terracotta mb-6 block">Our Aspiration</span>
            <h3 className="text-3xl font-serif text-ink mb-6">A Future Without <br /><span className="italic text-comm-olive font-normal">Borders</span></h3>
            <p className="text-ink/70 font-serif leading-relaxed italic text-lg">
              We envision a world where geography doesn't determine destiny—where rural landscapes are vibrant hubs of innovation, culture, and opportunity, deeply connected yet fiercely independent.
            </p>
          </motion.div>
        </section>

        {/* Community Impact Highlights */}
        <section className="mb-24 py-16 border-y border-muted/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Villages Transformed", value: "45+", motif: "গ্রাম" },
              { label: "Lives Impacted", value: "12,000+", motif: "জীবন" },
              { label: "Women Leaders", value: "850+", motif: "নারী" },
              { label: "Youth Scholars", value: "3,200+", motif: "শিক্ষা" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <span className="font-bengali text-sm text-ink/20 block mb-2">{item.motif}</span>
                <p className="text-3xl md:text-5xl font-serif text-ink mb-1">{item.value}</p>
                <p className="text-xs font-sans uppercase tracking-widest text-ink/40">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values - Refined Spacing */}
        <section className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <span className="text-xs font-sans uppercase tracking-[0.4em] text-ink/30 mb-4">Foundation</span>
            <h2 className="text-3xl md:text-5xl font-serif text-ink">Core Values</h2>
            <div className="mt-4 w-12 h-px bg-muted/30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group p-10 rounded-none bg-white/40 backdrop-blur-sm border border-muted/20 hover:border-accent/30 transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute top-[-10%] right-[-5%] text-6xl font-bengali opacity-[0.02] group-hover:opacity-[0.08] transition-opacity duration-700 select-none">
                  {value.motif}
                </div>
                <div className="w-10 h-10 bg-edu-orange/5 text-edu-orange/60 rounded-full flex items-center justify-center mb-6 text-sm font-serif border border-edu-orange/10">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-serif text-ink mb-3">{value.title}</h3>
                <p className="text-ink/60 font-sans leading-relaxed italic text-base">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA / Contact Bridge */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center py-16 bg-primary text-dusty relative overflow-hidden"
        >
          <div className="absolute inset-0 texture-overlay opacity-10"></div>
          <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight relative z-10">Connect With Our <span className="italic text-accent font-normal">Mission</span></h2>
          <p className="text-dusty/60 font-serif italic text-lg max-w-2xl mx-auto mb-10 relative z-10">
            Every story of change begins with a conversation. We'd love to share more about our work and how you can be part of the journey.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
            <Link to="/contact" className="px-10 py-5 bg-accent text-dusty font-sans uppercase tracking-[0.2em] text-xs hover:bg-edu-orange transition-all">
              Contact Us Directly
            </Link>
            <Link to="/get-involved" className="px-10 py-5 border border-white/20 text-dusty font-sans uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all">
              Become a Volunteer
            </Link>
          </div>
        </motion.section>

      </div>
    </motion.div>
  );
};

export default AboutPage;
