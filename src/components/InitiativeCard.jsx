import { Link } from 'react-router-dom';

const InitiativeCard = ({ initiative }) => {
  return (
    <div className="flex flex-col h-full bg-dusty p-6 md:p-8 ink-border paper-shadow group relative overflow-hidden transition-all duration-700 hover:bg-paper hover:scale-[1.01]">
      <div className="absolute inset-0 paper-grain opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-[1px] border-l-[1px] border-ink/30 m-2"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-[1px] border-r-[1px] border-ink/30 m-2"></div>
      
      <div className="flex-1 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[1px] w-4 bg-accent/40"></div>
          <span className="text-[10px] font-sans text-accent uppercase tracking-[0.3em] ink-stamp">
            {initiative.category}
          </span>
        </div>
        
        <h3 className="text-2xl font-serif text-primary mb-3 group-hover:text-ink transition-colors">
          {initiative.title}
        </h3>
        
        <p className="text-primary/50 font-serif italic text-sm mb-4 ink-stamp border-b border-ink/10 pb-4 inline-block w-full">
          Focus: {initiative.focus}
        </p>
        
        <p className="text-primary/70 mb-8 font-serif leading-relaxed">
          {initiative.description}
        </p>
      </div>
      
      <div className="relative z-10 pt-4 border-t border-ink/10">
        <div className="flex flex-wrap gap-2 mb-6">
          {initiative.offerings.map((offering, index) => (
            <span 
              key={index}
              className="border border-ink/20 text-ink/70 text-[10px] font-sans tracking-widest uppercase px-3 py-1 bg-paper/50 ink-stamp"
            >
              {offering}
            </span>
          ))}
        </div>
        <Link 
          to={`/initiatives/${initiative.id}`} 
          className="inline-flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.4em] text-accent/80 hover:text-accent transition-colors ink-stamp"
        >
          <span>Read Chapter</span>
          <span className="text-lg leading-none">→</span>
        </Link>
      </div>
    </div>
  );
};

export default InitiativeCard;
