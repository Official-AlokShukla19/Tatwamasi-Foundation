import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, onClick, className = '', type = 'button' }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 font-sans tracking-[0.2em] uppercase text-xs rounded-full transition-all duration-500 shadow-sm hover:shadow-xl paper-shadow";
  
  const variants = {
    primary: "bg-ink text-paper hover:bg-ink/90",
    secondary: "bg-education text-paper hover:bg-education/90",
    outline: "border border-ink/20 text-ink hover:bg-ink/5",
    ghost: "text-ink/60 hover:text-ink transition-colors",
    community: "bg-community text-paper hover:bg-community/90",
    innovation: "bg-innovation text-paper hover:bg-innovation/90",
  };

  if (to) {
    return (
      <Link to={to} className="inline-block">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type={type}
          className={`${baseStyles} ${variants[variant]} ${className}`}
        >
          {children}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
