import React from 'react';
import { motion } from 'framer-motion';

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
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="pt-32 pb-24 bg-paper min-h-screen relative overflow-hidden"
    >
      {/* Decorative background motif */}
      <div className="absolute top-60 left-[-10%] text-[40rem] font-bengali opacity-[0.01] select-none pointer-events-none">
        গল্প
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm font-sans uppercase tracking-[0.4em] text-community mb-6">Opening the Book</span>
            <div className="w-12 h-px bg-community/30 mb-10"></div>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif text-ink mb-8 leading-tight">Our Origin <span className="italic text-education font-normal">Story</span></h1>
        </motion.div>

        {/* Origin Story Content */}
        <section className="flex flex-col lg:flex-row gap-20 items-start mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex-1"
          >
            <div className="prose prose-xl prose-p:text-ink/70 prose-p:font-serif prose-p:leading-relaxed space-y-10">
              <p className="text-2xl text-ink leading-relaxed">
                Tatwamasi began with a simple yet profound vision: to bring holistic development to rural areas, bridging the gap between urban opportunities and rural potential.
              </p>
              <p>
                Founded on the principles of community empowerment, we recognized that true progress is achieved not by charity, but by enabling individuals to build their own futures. Our name, <span className="text-education italic font-medium">Tatwamasi</span> ("Thou art that"), reflects our belief in the inherent potential within every individual.
              </p>
              <p>
                Today, we work tirelessly across multiple sectors—education, health, arts, and sports—creating a Hub & Spoke model that reaches deep into rural communities, nurturing seeds of change.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="flex-1 w-full"
          >
            <div className="aspect-square rounded-[3rem] bg-white/40 backdrop-blur-md border border-muted/50 p-1 shadow-2xl paper-shadow relative overflow-hidden group">
              <div className="absolute inset-0 bg-education/5 mix-blend-multiply opacity-50 transition-opacity group-hover:opacity-20 duration-700"></div>
              <div className="w-full h-full border border-muted/30 rounded-[2.8rem] flex items-center justify-center relative overflow-hidden">
                 <div className="text-[20rem] font-bengali text-ink/5 select-none transition-transform duration-1000 group-hover:scale-110">
                  বি
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <p className="text-ink/30 font-serif italic text-center">
                    "A visual window into the early days of our journey."
                   </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Core Values with motif design */}
        <section className="mb-40">
          <div className="flex items-center justify-center gap-4 mb-20">
            <div className="w-12 h-px bg-muted"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-ink">Core Values</h2>
            <div className="w-12 h-px bg-muted"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                className="group p-12 rounded-[2.5rem] bg-white/40 backdrop-blur-sm border border-muted/30 hover:shadow-xl transition-all duration-700 text-center relative overflow-hidden"
              >
                <div className="absolute top-[-20%] right-[-10%] text-7xl font-bengali opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-700 select-none">
                  {value.motif}
                </div>
                <div className="w-14 h-14 mx-auto bg-education/10 text-education rounded-2xl flex items-center justify-center mb-8 text-xl font-serif transition-transform duration-700 group-hover:rotate-12">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-serif text-ink mb-6">{value.title}</h3>
                <p className="text-ink/60 font-sans leading-relaxed italic">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final Page Ornament */}
        <div className="max-w-md mx-auto mt-20 flex items-center justify-center gap-8 opacity-20">
          <div className="w-full h-px bg-ink"></div>
          <div className="font-bengali text-3xl">❈</div>
          <div className="w-full h-px bg-ink"></div>
        </div>

      </div>
    </motion.div>
  );
};

export default AboutPage;
