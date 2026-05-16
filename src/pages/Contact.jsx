import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="pt-32 pb-20 bg-paper min-h-screen relative overflow-hidden"
    >
      {/* Decorative background motif */}
      <div className="absolute top-40 right-[-10%] text-[30rem] font-bengali opacity-[0.01] select-none pointer-events-none">
        যোগ
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm font-sans uppercase tracking-[0.4em] text-comm-terracotta mb-6">Connect with us</span>
            <div className="w-12 h-px bg-comm-terracotta/30 mb-10"></div>
          </div>
          <h1 className="text-4xl md:text-7xl font-serif text-ink mb-8 leading-tight">Reach Out to Our <br /><span className="italic text-edu-orange font-normal">Circle of Care</span></h1>
          <p className="text-lg md:text-xl text-ink/60 max-w-2xl mx-auto font-sans font-light italic">
            "Whether you have a question, a suggestion, or simply want to share a piece of your journey, our doors are always open."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <motion.div 
            className="lg:col-span-2 bg-white/40 backdrop-blur-md rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 border border-muted/50 paper-shadow"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl font-serif text-ink mb-12">Contact Information</h2>
            
            <div className="space-y-12">
              <div className="flex items-start group">
                <div className="w-14 h-14 bg-edu-orange/10 rounded-2xl flex items-center justify-center text-edu-orange mr-6 shrink-0 transition-transform duration-500 group-hover:rotate-12">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-ink">Our Sanctuary</h4>
                  <p className="text-ink/60 mt-2 font-sans leading-relaxed italic">Tatwamasi Foundation<br />Kolkata, West Bengal<br />India - 700001</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-14 h-14 bg-inno-cyan/10 rounded-2xl flex items-center justify-center text-inno-cyan mr-6 shrink-0 transition-transform duration-500 group-hover:-rotate-12">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-ink">Send a Note</h4>
                  <a href="mailto:hello@tatwamasi.org" className="text-ink/60 hover:text-inno-cyan transition-colors mt-2 block font-sans italic">hello@tatwamasi.org</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 bg-comm-terracotta/10 rounded-2xl flex items-center justify-center text-comm-terracotta mr-6 shrink-0 transition-transform duration-500 group-hover:rotate-12">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-ink">Voice Call</h4>
                  <p className="text-ink/60 mt-2 font-sans italic">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-muted/30">
              <h4 className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent/80 mb-6 ink-stamp">Follow Our Social Journey</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/p/Tatwamasi-Foundation-100087963862743/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 border border-ink/20 flex items-center justify-center text-ink/40 hover:text-[#1877F2] hover:border-[#1877F2] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(24,119,242,0.15)] ink-border"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/tatwamasi-foundation-ngo?trk=public_profile_topcard-current-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 border border-ink/20 flex items-center justify-center text-ink/40 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(10,102,194,0.15)] ink-border"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://www.instagram.com/tatwamasi.foundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 border border-ink/20 flex items-center justify-center text-ink/40 hover:text-[#E1306C] hover:border-[#E1306C] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(225,48,108,0.15)] ink-border"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-3 bg-white/60 backdrop-blur-md rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 border border-muted/30 paper-shadow relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute top-0 right-10 -translate-y-1/2 w-20 h-20 bg-paper border border-muted rounded-full flex items-center justify-center text-2xl font-serif text-ink/20 paper-shadow">
              ✎
            </div>
            <h2 className="text-3xl font-serif text-ink mb-10">Send us a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
