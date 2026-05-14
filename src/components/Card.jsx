import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
  const hoverProps = hover ? {
    whileHover: { y: -5 },
    transition: { type: "spring", stiffness: 300 }
  } : {};

  return (
    <motion.div
      {...hoverProps}
      className={`bg-white rounded-2xl shadow-md p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
