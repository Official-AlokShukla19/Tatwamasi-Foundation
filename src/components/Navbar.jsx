import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/TatwamasiLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle smooth scrolling to sections
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
          // If element not found, just navigate to it
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-paper/90 backdrop-blur-md shadow-sm py-4 border-primary/10' : 'bg-transparent py-6 border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={(e) => handleNavClick(e, '/', '')} className="flex items-center gap-2 md:gap-3">
              <img src={logo} alt="Tatwamasi Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain mix-blend-multiply opacity-80" />
              <span className="text-sm sm:text-base md:text-xl font-serif text-primary tracking-wider uppercase truncate max-w-[200px] sm:max-w-none">Tatwamasi Foundation</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path && location.hash === link.hash;
              return (
                <a
                  key={link.name}
                  href={link.path + link.hash}
                  onClick={(e) => handleNavClick(e, link.path, link.hash)}
                  className={`text-xs font-sans tracking-[0.2em] uppercase transition-colors hover:text-accent relative group ${isActive ? 'text-accent font-medium' : 'text-primary/70'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[1px] bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary/80 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-paper/95 backdrop-blur-lg shadow-xl border-t border-primary/10 texture-overlay mix-blend-multiply">
          <div className="px-6 py-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path + link.hash}
                onClick={(e) => handleNavClick(e, link.path, link.hash)}
                className="text-2xl font-serif italic text-primary/80 hover:text-accent border-b border-primary/10 pb-4"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
