import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
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

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
  const borderColor = isDarkPage && !isScrolled ? 'border-white/10' : 'border-primary/5';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-paper/95 backdrop-blur-md shadow-lg py-3 ' + borderColor : 'bg-transparent py-6 border-transparent'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={(e) => handleNavClick(e, '/', '')} className="flex items-center gap-5 lg:gap-8 group">
              <img 
                src={logo} 
                alt="Tatwamasi Logo" 
                className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transition-all duration-500 ${logoFilter} ${!isScrolled && !isDarkPage ? 'mix-blend-multiply opacity-90' : ''} group-hover:scale-105`} 
              />
              <div className={`flex flex-col border-l-2 ${borderColor} pl-5 lg:pl-8 py-2`}>
                <span className={`text-2xl md:text-3xl font-serif tracking-[0.1em] transition-colors duration-500 ${textColor} leading-none`}>Tatwamasi</span>
                <span className={`text-[11px] md:text-[12px] font-sans tracking-[0.7em] text-accent uppercase mt-2 leading-none`}>Foundation</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-10 lg:gap-14">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <a
                  key={link.name}
                  href={link.path + link.hash}
                  onClick={(e) => handleNavClick(e, link.path, link.hash)}
                  className={`text-[13px] font-sans tracking-[0.35em] uppercase transition-all hover:text-accent relative group ${isActive ? 'text-accent font-bold' : textColor + ' opacity-60 hover:opacity-100'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-[1.5px] bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced design */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-paper backdrop-blur-xl shadow-2xl border-t border-primary/5 texture-overlay z-50"
        >
          <div className="px-8 py-16 flex flex-col space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path + link.hash}
                onClick={(e) => handleNavClick(e, link.path, link.hash)}
                className="text-4xl font-serif italic text-primary/80 hover:text-accent transition-colors flex justify-between items-center group tracking-wide"
              >
                {link.name}
                <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-accent" />
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>

  );
};

export default Navbar;
