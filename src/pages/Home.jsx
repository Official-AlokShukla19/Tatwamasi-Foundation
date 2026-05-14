import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Efforts from '../components/Efforts';
import Why from '../components/Why';
import Journey from '../components/Journey';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col min-h-screen bg-paper overflow-hidden"
    >
      <Hero />
      <About />
      <Efforts />
      <Why />
      <Journey />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default Home;
