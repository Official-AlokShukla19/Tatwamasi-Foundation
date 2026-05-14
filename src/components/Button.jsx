import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, onClick, className = '', type = 'button' }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 font-sans tracking-[0.2em] uppercase text-xs rounded-full transition-all duration-500 shadow-sm hover:shadow-xl paper-shadow cursor-pointer";
  
  const variants = {
    primary: "bg-ink text-paper hover:bg-ink/90",
    secondary: "bg-edu-orange text-paper hover:bg-edu-orange/90",
    outline: "border border-ink/20 text-ink hover:bg-ink/5",
    ghost: "text-ink/60 hover:text-ink transition-colors",
    community: "bg-comm-terracotta text-paper hover:bg-comm-terracotta/90",
    innovation: "bg-inno-cyan text-paper hover:bg-inno-cyan/90",
  };

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} border-none outline-none`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
