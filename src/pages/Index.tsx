import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";

const cars = [
  { name: "Ferrari", image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=600&fit=crop" },
  { name: "Lamborghini", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop" },
  { name: "Porsche", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&h=600&fit=crop" },
  { name: "Bugatti", image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=800&h=600&fit=crop" },
  { name: "McLaren", image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop" },
  { name: "Aston Martin", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop" },
  { name: "Nissan GTR", image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=800&h=600&fit=crop" },
  { name: "Chevrolet Corvette", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop" },
  { name: "Ford Mustang", image: "https://images.unsplash.com/photo-1584345604476-8ec5f82bd3dd?w=800&h=600&fit=crop" },
  { name: "Dodge Challenger", image: "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=800&h=600&fit=crop" },
  { name: "Pagani", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" },
  { name: "Koenigsegg", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop" },
  { name: "BMW M Series", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop" },
  { name: "Audi R8", image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=600&fit=crop" },
  { name: "Mercedes AMG", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 p-6 md:p-8">
        <section 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          aria-label="Sports car collection"
        >
          {cars.map((car) => (
            <CarCard key={car.name} name={car.name} imageUrl={car.image} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
