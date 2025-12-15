import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Car } from "@/data/cars";
import { Gauge, Zap, Timer, Settings, DollarSign, Calendar } from "lucide-react";

interface CarDetailModalProps {
  car: Car | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CarDetailModal = ({ car, open, onOpenChange }: CarDetailModalProps) => {
  if (!car) return null;

  const specs = [
    { icon: Zap, label: "Horsepower", value: `${car.horsepower} HP` },
    { icon: Gauge, label: "Top Speed", value: car.topSpeed },
    { icon: Timer, label: "0-100 km/h", value: car.acceleration },
    { icon: Settings, label: "Engine", value: car.engine },
    { icon: Calendar, label: "Year", value: car.year.toString() },
    { icon: DollarSign, label: "Price", value: car.price },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card border-border p-0 overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          <DialogHeader className="absolute bottom-4 left-6 right-6">
            <p className="text-primary font-medium text-sm tracking-wider uppercase">
              {car.brand}
            </p>
            <DialogTitle className="text-3xl font-bold text-foreground">
              {car.name}
            </DialogTitle>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            {car.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="bg-secondary rounded-lg p-4 transition-all duration-300 hover:bg-muted group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <spec.icon className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground text-xs uppercase tracking-wider">
                    {spec.label}
                  </span>
                </div>
                <p className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarDetailModal;
