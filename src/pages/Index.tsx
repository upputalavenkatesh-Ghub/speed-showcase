import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import CarDetailModal from "@/components/CarDetailModal";
import { cars, Car } from "@/data/cars";

const Index = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 p-6 md:p-8">
        <section 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          aria-label="Sports car collection"
        >
          {cars.map((car) => (
            <CarCard 
              key={car.name} 
              car={car} 
              onClick={() => handleCarClick(car)} 
            />
          ))}
        </section>
      </main>

      <Footer />

      <CarDetailModal 
        car={selectedCar} 
        open={modalOpen} 
        onOpenChange={setModalOpen} 
      />
    </div>
  );
};

export default Index;
