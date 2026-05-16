import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, onClick, className = '', type = 'button' }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 font-sans tracking-[0.2em] uppercase text-xs rounded-none transition-all duration-700 shadow-sm hover:shadow-xl paper-shadow cursor-pointer relative overflow-hidden group";
  
  const variants = {
    primary: "bg-ink text-paper hover:bg-ink/90",
    secondary: "bg-edu-orange text-paper hover:bg-edu-orange/90",
    outline: "border border-ink/20 text-ink hover:bg-ink/5 ink-border",
    ghost: "text-ink/60 hover:text-ink transition-colors",
    community: "bg-comm-terracotta text-paper hover:bg-comm-terracotta/90",
    innovation: "bg-inno-cyan text-paper hover:bg-inno-cyan/90",
  };

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      {/* Subtle paper grain overlay on button hover */}
      <div className="absolute inset-0 paper-grain opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} outline-none`}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      <div className="absolute inset-0 paper-grain opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>
    </motion.button>
  );
};

export default Button;
