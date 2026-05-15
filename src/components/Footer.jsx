import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';
import logo from '../assets/TatwamasiLogo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-dusty relative overflow-hidden pt-16 md:pt-20 pb-8 z-30 border-t border-white/5">

      {/* Cinematic Background Texture */}
      <div className="absolute inset-0 texture-overlay mix-blend-overlay opacity-20 z-0 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 mb-14">

          {/* Brand & Mission — full width on mobile, 4 cols on lg */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/" className="flex items-center gap-4 mb-6 group">
              <img
                src={logo}
                alt="Tatwamasi Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain flex-shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase text-dusty leading-tight">Tatwamasi</span>
                <span className="text-[10px] font-sans tracking-[0.5em] text-accent uppercase">Foundation</span>
              </div>
            </Link>
            <p className="text-dusty/60 font-serif text-base md:text-lg leading-relaxed italic mb-8 max-w-xs sm:max-w-sm">
              "Dedicated to nurturing hope, dignity, and sustainable growth within the heart of rural Bengal."
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-dusty/40 hover:text-accent hover:border-accent transition-all duration-500 hover:-translate-y-1"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Chapters — stacks alongside brand on sm, 2 cols on lg */}
          <div className="lg:col-span-2 flex flex-col items-start pt-0 lg:pt-4">
            <h4 className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent/80 mb-6">Chapters</h4>
            <nav className="flex flex-col gap-4 items-start">
              {[
                { name: 'Our Story', path: '/about' },
                { name: 'Initiatives', path: '/initiatives' },
                { name: 'Education', path: '/education-growth' },
                { name: 'Community', path: '/community-roots' },
                { name: 'Innovation', path: '/innovative-horizons' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-dusty/60 hover:text-dusty transition-all font-serif italic text-base group flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-300 flex-shrink-0"></span>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col items-start pt-0 lg:pt-4">
            <h4 className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent/80 mb-6">Reach Out</h4>
            <div className="flex flex-col gap-5 items-start w-full">
              <div className="flex items-start gap-3 text-dusty/70 w-full">
                <div className="p-2 border border-white/5 bg-white/5 text-accent flex-shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <p className="text-sm font-serif italic leading-relaxed">
                  123 Harmony Lane,<br />
                  Kolkata, West Bengal 700001
                </p>
              </div>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-dusty/70 hover:text-accent transition-colors group w-full">
                <div className="p-2 border border-white/5 bg-white/5 text-accent flex-shrink-0">
                  <Phone size={14} />
                </div>
                <span className="text-sm font-serif italic">+91 98765 43210</span>
              </a>
              <a href="mailto:hello@tatwamasi.org" className="flex items-center gap-3 text-dusty/70 hover:text-accent transition-colors group w-full">
                <div className="p-2 border border-white/5 bg-white/5 text-accent flex-shrink-0">
                  <Mail size={14} />
                </div>
                <span className="text-sm font-serif italic break-all">hello@tatwamasi.org</span>
              </a>
            </div>
          </div>

          {/* Legal & CTA */}
          <div className="lg:col-span-3 flex flex-col items-start pt-0 lg:pt-4">
            <h4 className="text-[10px] font-sans uppercase tracking-[0.4em] text-accent/80 mb-6">Commitment</h4>
            <nav className="flex flex-col gap-3 items-start mb-8">
              {[
                { label: 'Privacy Policy', path: '/privacy' },
                { label: 'Terms & Conditions', path: '/terms' },
                { label: 'Refund Policy', path: '/refund-policy' },
                { label: 'Disclaimer', path: '/disclaimer' },
                { label: 'Cookie Policy', path: '/cookie-policy' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-dusty/40 hover:text-accent transition-colors text-[11px] font-sans tracking-widest uppercase"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <button className="flex items-center gap-3 bg-accent text-dusty px-5 py-3 text-[11px] font-sans uppercase tracking-[0.2em] hover:bg-edu-orange transition-all duration-500 group">
              <Heart size={13} className="group-hover:scale-125 transition-transform flex-shrink-0" />
              Support the Mission
            </button>
          </div>
        </div>

        {/* Closing Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-dusty/20 font-sans tracking-[0.25em] uppercase">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
            <p>&copy; {new Date().getFullYear()} Tatwamasi Foundation</p>
            <span className="hidden sm:inline opacity-20">|</span>
            <p className="italic opacity-60">Handcrafted Narrative</p>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-1">
            <span className="font-bengali text-xl text-accent/30 select-none">তত্ত্বমসি</span>
            <span className="text-[9px] opacity-25 tracking-[0.5em]">Tat Wam Asi</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
