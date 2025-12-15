import { useState } from "react";

interface CarCardProps {
  name: string;
  imageUrl: string;
}

const CarCard = ({ name, imageUrl }: CarCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-card rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-glow cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <span className="text-muted-foreground text-4xl">🏎️</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 bg-secondary text-center">
        <h3 className="text-foreground font-semibold text-lg tracking-wide">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default CarCard;
