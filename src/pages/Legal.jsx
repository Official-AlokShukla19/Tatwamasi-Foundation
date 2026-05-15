import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Legal = () => {
  const location = useLocation();
  const path = location.pathname;

  const getPageContent = () => {
    switch (path) {
      case '/terms':
        return {
          title: "Terms & Conditions",
          motif: "শর্ত",
          content: "Welcome to Tatwamasi. By accessing this website, you agree to comply with and be bound by the following terms and conditions of use. Our relationship with you is governed by these terms in relation to this website. If you disagree with any part of these terms, please do not use our website."
        };
      case '/refund-policy':
        return {
          title: "Refund Policy",
          motif: "ফেরত",
          content: "As a non-profit organization, Tatwamasi relies on the generosity of our donors. Generally, donations are non-refundable. However, if you believe there has been an error in processing your donation, please contact us within 7 days of the transaction for a review."
        };
      case '/disclaimer':
        return {
          title: "Disclaimer",
          motif: "দাবিত্যাগ",
          content: "The information contained on this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, or suitability of the website's content."
        };
      case '/cookie-policy':
        return {
          title: "Cookie Policy",
          motif: "কুকি",
          content: "Our website uses cookies to improve your user experience. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics."
        };
      default:
        return {
          title: "Legal Information",
          motif: "নীতি",
          content: "Please select a specific policy from the footer to view more details."
        };
    }
  };

  const { title, motif, content } = getPageContent();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-40 pb-24 bg-paper min-h-screen relative overflow-hidden"
    >
      <div className="absolute top-20 right-[-5%] text-[30rem] font-bengali opacity-[0.01] select-none pointer-events-none">
        {motif}
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white/40 backdrop-blur-sm p-12 md:p-20 rounded-[3rem] border border-muted/50 paper-shadow">
          <div className="flex flex-col items-center mb-16">
            <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-ink/30 mb-6">Tatwamasi Foundation</span>
            <h1 className="text-4xl md:text-5xl font-serif text-ink">{title}</h1>
            <div className="mt-8 w-12 h-px bg-muted/30"></div>
          </div>
          
          <div className="prose prose-lg prose-p:text-ink/60 prose-p:font-sans prose-p:italic prose-p:leading-relaxed">
            <p className="text-sm font-sans tracking-widest uppercase text-ink/20 mb-8 not-italic">Effective Date: {new Date().toLocaleDateString()}</p>
            <p>{content}</p>
            <div className="mt-12 pt-12 border-t border-muted/20">
              <p className="not-italic font-serif text-ink/80">
                For any further clarification, please reach out to our legal team at <a href="mailto:legal@tatwamasi.org" className="underline decoration-muted hover:text-accent transition-colors">legal@tatwamasi.org</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Legal;
