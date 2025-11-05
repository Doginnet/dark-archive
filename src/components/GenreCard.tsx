import { Link } from "react-router-dom";

interface GenreCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export const GenreCard = ({ title, description, imageUrl, linkUrl }: GenreCardProps) => {
  return (
    <Link 
      to={linkUrl}
      className="glass-card flex flex-row items-center rounded-lg overflow-hidden transition-smooth hover:scale-[1.02] hover:shadow-2xl group w-full max-w-4xl mx-auto"
    >
      {/* Image Section */}
      <div className="w-1/3 aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-2/3 p-8 flex flex-col justify-center">
        <h2 className="font-display font-bold text-3xl text-accent neon-glow tracking-wide mb-2">
          {title}
        </h2>
        <p className="text-foreground/80 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};
