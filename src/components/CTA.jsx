import { motion } from 'framer-motion';
import Button from './Button';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 relative flex items-center justify-center overflow-hidden bg-paper">
      {/* Texture background accents */}
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-60 z-0"></div>
      
      <div className="absolute inset-0 bg-primary/5 -z-10 opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50rem] font-bengali opacity-[0.03] select-none pointer-events-none text-primary">
        ম
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center mb-8">
            <span className="text-xs font-sans uppercase tracking-[0.4em] text-accent mb-4">Epilogue</span>
            <div className="w-12 h-[1px] bg-accent/40"></div>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-primary mb-6 md:mb-8 leading-tight tracking-tight">
            Be a Part of the <br />
            <span className="italic text-accent font-normal border-b border-accent/30 pb-2">Shared Change</span>
          </h2>
          
          <p className="text-lg md:text-xl font-serif text-primary/70 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Whether through your time, your voice, or your resources, every contribution adds a line to our collective story. The pen is in your hands.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button to="/get-involved" className="w-full sm:w-auto min-w-[180px]">
              JOIN THE STORY
            </Button>
            
            <Button to="/contact" variant="outline" className="w-full sm:w-auto min-w-[180px]">
              REACH OUT
            </Button>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6 opacity-30">
            <div className="h-20 w-[1px] bg-primary"></div>
            <span className="font-bengali text-4xl text-primary">সমাপ্তি নয়, শুরু</span>
            <p className="text-xs uppercase tracking-[0.4em] font-sans text-primary">Not an end, but a beginning</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
