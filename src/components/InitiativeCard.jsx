import Card from './Card';
import { Link } from 'react-router-dom';

const InitiativeCard = ({ initiative }) => {
  return (
    <Card className="flex flex-col h-full border border-gray-100">
      <div className="flex-1">
        <span className="text-sm font-semibold text-accent1 uppercase tracking-wider">
          {initiative.category}
        </span>
        <h3 className="text-xl font-bold text-primary mt-2 mb-3">
          {initiative.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm font-medium">
          Focus: {initiative.focus}
        </p>
        <p className="text-gray-700 mb-6">
          {initiative.description}
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Offerings:</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {initiative.offerings.map((offering, index) => (
            <span 
              key={index}
              className="bg-secondary/20 text-primary text-xs px-3 py-1 rounded-full font-medium"
            >
              {offering}
            </span>
          ))}
        </div>
        <Link 
          to={`/initiatives/${initiative.id}`} 
          className="text-accent1 hover:text-accent2 font-semibold text-sm transition-colors"
        >
          Learn more &rarr;
        </Link>
      </div>
    </Card>
  );
};

export default InitiativeCard;
