import React from 'react';
import { motion } from 'framer-motion';
import Form from '../components/Form';

const GetInvolved = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="pt-32 pb-24 bg-paper min-h-screen relative overflow-hidden"
    >
      {/* Decorative background motif */}
      <div className="absolute top-40 left-[-5%] text-[35rem] font-bengali opacity-[0.01] select-none pointer-events-none">
        অংশ
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-start mb-10">
              <span className="text-sm font-sans uppercase tracking-[0.4em] text-community mb-6">Write your chapter</span>
              <div className="w-12 h-px bg-community/30 mb-10"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-ink mb-10 leading-tight">Join the <br /><span className="italic text-community font-normal">Mission</span></h1>
            
            <p className="text-xl text-ink/70 mb-12 leading-relaxed font-serif italic">
              "Real change happens when we come together. Whether you have time to volunteer, skills to share, or resources to contribute, your support empowers communities to build their own future."
            </p>
            
            <div className="bg-white/40 backdrop-blur-sm rounded-[2.5rem] p-12 border border-muted/50 paper-shadow mb-12 relative overflow-hidden group">
              {/* Subtle motif */}
              <div className="absolute bottom-0 right-0 p-6 text-5xl font-bengali opacity-[0.05] select-none">সা</div>
              
              <h3 className="text-2xl font-serif text-ink mb-8">Why Walk With Us?</h3>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-education mt-2 mr-4 shrink-0"></div>
                  <span className="text-ink/60 font-sans italic">Make a direct, measurable impact on rural lives.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-community mt-2 mr-4 shrink-0"></div>
                  <span className="text-ink/60 font-sans italic">Gain hands-on experience in community development.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-innovation mt-2 mr-4 shrink-0"></div>
                  <span className="text-ink/60 font-sans italic">Join a network of passionate changemakers.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-[550px] bg-white/60 backdrop-blur-md rounded-[3rem] p-10 md:p-14 shadow-2xl border border-muted/30 paper-shadow relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute top-0 right-10 -translate-y-1/2 w-20 h-20 bg-paper border border-muted rounded-full flex items-center justify-center text-2xl font-serif text-ink/20 paper-shadow">
              ✎
            </div>
            <h2 className="text-3xl font-serif text-ink mb-10 text-center">Application Form</h2>
            <Form />
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default GetInvolved;
