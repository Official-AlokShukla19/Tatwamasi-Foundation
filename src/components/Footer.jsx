import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';
import logo from '../assets/TatwamasiLogo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-dusty relative overflow-hidden pt-20 pb-10 z-30 border-t border-white/5">
      {/* Cinematic Background Texture */}
      <div className="absolute inset-0 texture-overlay mix-blend-overlay opacity-20 z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex items-center gap-4 mb-6 group">
              <img src={logo} alt="Tatwamasi Logo" className="w-14 h-14 object-contain brightness-0 invert" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif tracking-[0.2em] uppercase text-dusty leading-tight">Tatwamasi</span>
                <span className="text-xs font-sans tracking-[0.5em] text-accent uppercase">Foundation</span>
              </div>
            </Link>
            <p className="text-dusty/60 font-serif text-lg leading-relaxed italic mb-8 max-w-sm">
              "Dedicated to nurturing hope, dignity, and sustainable growth within the heart of rural Bengal."
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-dusty/40 hover:text-accent hover:border-accent transition-all duration-500 transform hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation - Middle Column */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start pt-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.4em] text-accent/80 mb-8">Chapters</h4>
            <nav className="flex flex-col gap-4 items-center md:items-start">
              {[
                { name: 'Our Story', path: '/about' },
                { name: 'Initiatives', path: '/initiatives' },
                { name: 'Education', path: '/education-growth' },
                { name: 'Community', path: '/community-roots' },
                { name: 'Innovation', path: '/innovative-horizons' }
              ].map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="text-dusty/60 hover:text-dusty transition-all font-serif italic text-base group flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-300"></span>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start pt-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.4em] text-accent/80 mb-8">Reach Out</h4>
            <div className="flex flex-col gap-6 items-center md:items-start w-full">
              <div className="flex items-start gap-4 text-dusty/70 group">
                <div className="p-2 border border-white/5 bg-white/5 rounded-none text-accent">
                  <MapPin size={16} />
                </div>
                <p className="text-sm font-serif italic leading-relaxed">
                  123 Harmony Lane, <br />
                  Kolkata, West Bengal 700001
                </p>
              </div>
              <a href="tel:+919876543210" className="flex items-center gap-4 text-dusty/70 hover:text-accent transition-colors group">
                <div className="p-2 border border-white/5 bg-white/5 rounded-none text-accent">
                  <Phone size={16} />
                </div>
                <span className="text-sm font-serif italic">+91 98765 43210</span>
              </a>
              <a href="mailto:hello@tatwamasi.org" className="flex items-center gap-4 text-dusty/70 hover:text-accent transition-colors group">
                <div className="p-2 border border-white/5 bg-white/5 rounded-none text-accent">
                  <Mail size={16} />
                </div>
                <span className="text-sm font-serif italic">hello@tatwamasi.org</span>
              </a>
            </div>
          </div>

          {/* Legal & Impact Column */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start pt-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.4em] text-accent/80 mb-8">Commitment</h4>
            <nav className="flex flex-col gap-3 items-center md:items-start mb-8">
              <Link to="/privacy" className="text-dusty/40 hover:text-accent transition-colors text-xs font-sans tracking-widest uppercase">Privacy Policy</Link>
              <Link to="/terms" className="text-dusty/40 hover:text-accent transition-colors text-xs font-sans tracking-widest uppercase">Terms & Conditions</Link>
              <Link to="/refund-policy" className="text-dusty/40 hover:text-accent transition-colors text-xs font-sans tracking-widest uppercase">Refund Policy</Link>
              <Link to="/disclaimer" className="text-dusty/40 hover:text-accent transition-colors text-xs font-sans tracking-widest uppercase">Disclaimer</Link>
              <Link to="/cookie-policy" className="text-dusty/40 hover:text-accent transition-colors text-xs font-sans tracking-widest uppercase">Cookie Policy</Link>
            </nav>
            
            <button className="flex items-center gap-3 bg-accent text-dusty px-6 py-3 text-xs font-sans uppercase tracking-[0.2em] hover:bg-edu-orange transition-all duration-500 group">
              <Heart size={14} className="group-hover:scale-125 transition-transform" />
              Support the Mission
            </button>
          </div>
        </div>

        {/* Closing Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-dusty/20 font-sans tracking-[0.3em] uppercase">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Tatwamasi Foundation</p>
            <span className="hidden md:inline opacity-20">|</span>
            <p className="italic opacity-60">Handcrafted Narrative</p>
          </div>
          <div className="flex items-center space-x-12">
            <div className="flex flex-col items-end">
              <span className="font-bengali text-2xl text-accent/30 select-none mb-1">তত্ত্বমসি</span>
              <span className="text-xs opacity-30 tracking-[0.6em]">Tat Wam Asi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Book Corner Detail */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
