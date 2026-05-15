import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Efforts from '../components/Efforts';
import Why from '../components/Why';
import Journey from '../components/Journey';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import StoryBridge from '../components/StoryBridge';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col min-h-screen bg-paper overflow-hidden"
    >
      <Hero />
      
      <StoryBridge 
        bengaliText="শুরু" 
        imageLabel="The Beginning"
        title="Our Shared Origin"
        subtitle="Every great transformation starts with a single, humble step toward understanding."
      />
      
      <About />
      
      <StoryBridge 
        bengaliText="কাজ" 
        imageLabel="The Work"
        title="Threads of Action"
        subtitle="Impact is not measured in numbers, but in the quiet resilience of a community finding its voice."
      />
      
      <Efforts />
      
      <Why />
      
      <StoryBridge 
        bengaliText="পথ" 
        imageLabel="The Path"
        title="The Journey Forward"
        subtitle="We don't just build projects; we walk alongside the people who will lead them."
      />
      
      <Journey />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default Home;
