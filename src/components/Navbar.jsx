import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/TatwamasiLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Pages with dark backgrounds
  const isDarkPage = location.pathname === '/innovative-horizons';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleNavClick = (e, path, hash) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== path) {
      navigate(path + (hash || ''));
    } else {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate(path + hash);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Prologue', path: '/', hash: '' },
    { name: 'About', path: '/about', hash: '' },
    { name: 'Efforts', path: '/initiatives', hash: '' },
    { name: 'Education', path: '/education-growth', hash: '' },
    { name: 'Community', path: '/community-roots', hash: '' },
    { name: 'Innovation', path: '/innovative-horizons', hash: '' },
    { name: 'Contact', path: '/contact', hash: '' },
  ];

  const textColor = isDarkPage && !isScrolled ? 'text-inno-white' : 'text-primary';
  const logoFilter = isDarkPage && !isScrolled ? 'brightness-0 invert' : '';
  const borderColor = isDarkPage && !isScrolled ? 'border-white/10' : 'border-primary/10';
  // Hamburger button — always solid background, no transparency
  const hamburgerBg = isDarkPage && !isScrolled
    ? 'bg-white text-inno-indigo hover:bg-dusty border-white/30'
    : 'bg-primary text-dusty hover:bg-ink border-primary/20';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${
      isScrolled
        ? 'bg-paper/95 backdrop-blur-md shadow-lg py-2 md:py-3 ' + borderColor
        : isDarkPage
          ? 'bg-inno-midnight/80 md:bg-transparent py-4 md:py-6 border-transparent backdrop-blur-sm md:backdrop-blur-none'
          : 'bg-paper md:bg-transparent py-4 md:py-6 border-b border-primary/5 md:border-transparent shadow-sm md:shadow-none'
    }`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex justify-between items-center gap-8">

          {/* Brand / Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={(e) => handleNavClick(e, '/', '')} className="flex items-center gap-3 sm:gap-5 lg:gap-8 group">
              <img
                src={logo}
                alt="Tatwamasi Logo"
                className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 object-contain transition-all duration-500 ${logoFilter} ${!isScrolled && !isDarkPage ? 'mix-blend-multiply opacity-90' : ''} group-hover:scale-105`}
              />
              <div className={`flex flex-col border-l-2 ${borderColor} pl-3 sm:pl-4 lg:pl-8 py-1`}>
                <span className={`text-base sm:text-xl md:text-2xl lg:text-3xl font-serif tracking-[0.1em] transition-colors duration-500 ${textColor} leading-none`}>Tatwamasi</span>
                <span className={`text-[9px] sm:text-[10px] md:text-[11px] font-sans tracking-[0.4em] sm:tracking-[0.6em] text-accent uppercase mt-1.5 leading-none`}>Foundation</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <a
                  key={link.name}
                  href={link.path + link.hash}
                  onClick={(e) => handleNavClick(e, link.path, link.hash)}
                  className={`text-[12px] lg:text-[13px] font-sans tracking-[0.3em] lg:tracking-[0.35em] uppercase transition-all hover:text-accent relative group ${isActive ? 'text-accent font-bold' : textColor + ' opacity-60 hover:opacity-100'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-[1.5px] bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center justify-center w-11 h-11 border transition-all duration-300 focus:outline-none active:scale-95 shadow-sm ink-border ${hamburgerBg}`}
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} className="flex items-center justify-center ink-stamp">
                    <X size={22} strokeWidth={1.5} />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }} className="flex items-center justify-center ink-stamp">
                    <Menu size={22} strokeWidth={1.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden absolute top-full left-0 w-full bg-paper shadow-2xl border-t border-ink/10 z-50 overflow-y-auto max-h-[calc(100svh-72px)] relative"
          >
            <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-40 z-0 pointer-events-none"></div>
            <div className="px-6 sm:px-10 pt-8 pb-14 flex flex-col relative z-10">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.a
                    key={link.name}
                    href={link.path + link.hash}
                    onClick={(e) => handleNavClick(e, link.path, link.hash)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.055, duration: 0.25 }}
                    className={`flex justify-between items-center py-5 border-b border-primary/5 group transition-colors ${isActive ? 'text-accent' : 'text-primary/70 hover:text-accent'}`}
                  >
                    <span className="text-2xl sm:text-3xl font-serif italic tracking-wide leading-tight">
                      {link.name}
                    </span>
                    <ArrowRight
                      size={20}
                      className={`flex-shrink-0 transition-all duration-300 text-accent ${isActive ? 'opacity-100' : 'opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0'}`}
                    />
                  </motion.a>
                );
              })}

              {/* Mobile Brand Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex items-center gap-4 text-[10px] font-sans tracking-[0.4em] uppercase text-primary/25"
              >
                <span>Tatwamasi Foundation</span>
                <span className="font-bengali text-base text-accent/35">তত্ত্বমসি</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
