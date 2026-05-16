import { motion } from 'framer-motion';
import Button from './Button';

const CTA = () => {
  return (
    <section className="py-16 md:py-32 relative flex items-center justify-center overflow-hidden bg-paper">
      {/* Texture background accents */}
      <div className="absolute inset-0 texture-overlay mix-blend-multiply opacity-60 z-0"></div>
      
      <div className="absolute inset-0 bg-primary/5 -z-10 opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50rem] font-bengali opacity-[0.03] select-none pointer-events-none text-primary">
        ম
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-dusty p-10 md:p-20 ink-border paper-shadow relative overflow-hidden"
        >
          {/* Internal texture and corners */}
          <div className="absolute inset-0 paper-grain opacity-10 pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-8 h-8 border-t-[1px] border-l-[1px] border-ink/30 m-4"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-[1px] border-r-[1px] border-ink/30 m-4"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[1px] border-l-[1px] border-ink/30 m-4"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[1px] border-r-[1px] border-ink/30 m-4"></div>
          
          <div className="flex flex-col items-center mb-10 relative z-10 text-center">
            <span className="text-xs font-sans uppercase tracking-[0.5em] text-accent mb-6 ink-stamp">Epilogue</span>
            <div className="w-16 h-[1px] bg-accent/40"></div>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-primary mb-8 leading-tight tracking-tight text-center relative z-10">
            Be a Part of the <br />
            <span className="italic text-accent font-normal border-b border-accent/30 pb-2">Shared Change</span>
          </h2>
          
          <p className="text-lg md:text-2xl font-serif text-primary/70 mb-14 font-light max-w-2xl mx-auto leading-relaxed text-center relative z-10">
            Whether through your time, your voice, or your resources, every contribution adds a line to our collective story. The pen is in your hands.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Button to="/get-involved" className="w-full sm:w-auto min-w-[200px]">
              JOIN THE STORY
            </Button>
            
            <Button to="/contact" variant="outline" className="w-full sm:w-auto min-w-[200px]">
              REACH OUT
            </Button>
          </div>

          <div className="mt-16 flex flex-col items-center gap-6 opacity-40 relative z-10">
            <div className="h-24 w-[1px] bg-primary"></div>
            <span className="font-bengali text-5xl text-primary ink-stamp">সমাপ্তি নয়, শুরু</span>
            <p className="text-[10px] uppercase tracking-[0.5em] font-sans text-primary">Not an end, but a beginning</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
