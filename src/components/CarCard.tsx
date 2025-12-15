import { useState } from "react";
import { Car } from "@/data/cars";

interface CarCardProps {
  car: Car;
  onClick: () => void;
}

const CarCard = ({ car, onClick }: CarCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className="group bg-card rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-glow cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <span className="text-muted-foreground text-4xl">🏎️</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 right-2 bg-primary/90 text-primary-foreground text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {car.horsepower} HP
        </div>
      </div>
      <div className="p-4 bg-secondary text-center">
        <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
          {car.brand}
        </p>
        <h3 className="text-foreground font-semibold text-lg tracking-wide">
          {car.name}
        </h3>
      </div>
    </div>
  );
};

export default CarCard;
