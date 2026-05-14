import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="pt-40 pb-24 bg-paper min-h-screen relative overflow-hidden"
    >
      {/* Decorative background motif */}
      <div className="absolute top-20 right-[-5%] text-[30rem] font-bengali opacity-[0.01] select-none pointer-events-none">
        নীতি
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white/40 backdrop-blur-sm p-12 md:p-20 rounded-[3rem] border border-muted/50 paper-shadow">
          <div className="flex flex-col items-center mb-16">
            <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-ink/30 mb-6">Our Commitment</span>
            <h1 className="text-4xl md:text-5xl font-serif text-ink">Privacy Policy</h1>
            <div className="mt-8 w-12 h-px bg-muted"></div>
          </div>
          
          <div className="prose prose-lg prose-p:text-ink/60 prose-p:font-sans prose-p:italic prose-p:leading-relaxed space-y-12">
            <div>
              <p className="text-sm font-sans tracking-widest uppercase text-ink/20 mb-4 not-italic">Last updated: {new Date().toLocaleDateString()}</p>
              <h2 className="text-2xl font-serif text-ink mt-12 mb-6 not-italic">1. Introduction</h2>
              <p>
                Tatwamasi ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website or apply to volunteer with us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mt-12 mb-6 not-italic">2. Information We Collect</h2>
              <p>
                When you use our "Get Involved" path, we collect the following personal information:
              </p>
              <ul className="list-none space-y-4 mt-6">
                <li className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-edu-orange"></div>
                  <span>Your full name</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-comm-terracotta"></div>
                  <span>Contact information (email address or phone number)</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-inno-cyan"></div>
                  <span>Your areas of interest for volunteering</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mt-12 mb-6 not-italic">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-none space-y-4 mt-6">
                <li className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
                  <span>Process your volunteer application</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
                  <span>Communicate regarding our initiatives</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-ink mt-12 mb-6 not-italic">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We do not sell or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            <div className="pt-12 border-t border-muted/30">
              <h2 className="text-2xl font-serif text-ink mb-6 not-italic">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:privacy@tatwamasi.org" className="text-ink/80 hover:text-ink underline decoration-muted">privacy@tatwamasi.org</a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Ornament */}
        <div className="mt-20 flex flex-col items-center gap-4 opacity-10">
          <div className="h-10 w-px bg-ink"></div>
          <span className="font-bengali text-2xl tracking-[0.5em]">তত্ত্বমসি</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy;
