import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import logo from '../assets/TatwamasiLogo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-dusty relative overflow-hidden pt-32 pb-16 z-30">
      <div className="absolute inset-0 texture-overlay mix-blend-overlay opacity-30 z-0"></div>
      
      {/* Decorative divider like a book ending */}
      <div className="max-w-4xl mx-auto px-6 mb-24 flex flex-col items-center relative z-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-dusty/20 to-transparent"></div>
        <div className="mt-8 flex items-center gap-4 opacity-40">
          <div className="w-2 h-2 rounded-full bg-dusty border border-dusty/50"></div>
          <div className="w-16 h-[1px] bg-dusty/50"></div>
          <div className="w-2 h-2 rounded-full bg-dusty border border-dusty/50"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-24">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex flex-col items-center md:items-start gap-6 mb-8 group">
              <img src={logo} alt="Tatwamasi Logo" className="w-16 h-16 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              <span className="text-xl md:text-3xl font-serif tracking-widest uppercase text-dusty">Tatwamasi Foundation</span>
            </Link>
            <p className="text-dusty/60 font-serif text-lg leading-relaxed max-w-xs italic">
              "We are not just building solutions, we are nurturing stories of hope and shared humanity."
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs font-sans uppercase tracking-[0.4em] text-accent mb-8">Chapters</h4>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <Link to="/about" className="text-dusty/70 hover:text-accent transition-colors font-serif italic text-xl">Our Story</Link>
              <Link to="/#efforts" className="text-dusty/70 hover:text-accent transition-colors font-serif italic text-xl">Our Initiatives</Link>
              <Link to="/#journey" className="text-dusty/70 hover:text-accent transition-colors font-serif italic text-xl">The Journey</Link>
              <Link to="/contact" className="text-dusty/70 hover:text-dusty transition-colors font-serif italic text-xl">Get in Touch</Link>
            </div>
          </div>

          {/* Contact and Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs font-sans uppercase tracking-[0.4em] text-accent mb-8">Reach Out</h4>
            <p className="text-dusty/70 font-serif italic text-lg mb-8">Kolkata, West Bengal, India</p>
            <div className="flex space-x-8">
              <a href="#" className="text-dusty/50 hover:text-accent transition-all duration-500 transform hover:scale-110"><Facebook size={20} /></a>
              <a href="#" className="text-dusty/50 hover:text-accent transition-all duration-500 transform hover:scale-110"><Twitter size={20} /></a>
              <a href="#" className="text-dusty/50 hover:text-accent transition-all duration-500 transform hover:scale-110"><Instagram size={20} /></a>
              <a href="mailto:contact@tatwamasi.org" className="text-dusty/50 hover:text-dusty transition-all duration-500 transform hover:scale-110"><Mail size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-dusty/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-dusty/40 font-sans tracking-[0.2em] uppercase">
          <p>&copy; {new Date().getFullYear()} Tatwamasi Foundation. Founded on Hope.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <Link to="/privacy" className="hover:text-dusty transition-colors">Privacy</Link>
            <a href="#" className="hover:text-dusty transition-colors">Terms</a>
            <span className="font-bengali opacity-50 text-accent">তত্ত্বমসি</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
