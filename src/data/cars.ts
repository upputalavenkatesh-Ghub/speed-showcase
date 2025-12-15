export interface Car {
  name: string;
  image: string;
  brand: string;
  year: number;
  horsepower: number;
  topSpeed: string;
  acceleration: string;
  engine: string;
  price: string;
  description: string;
}

export const cars: Car[] = [
  { 
    name: "Ferrari 488 GTB", 
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=600&fit=crop",
    brand: "Ferrari",
    year: 2023,
    horsepower: 661,
    topSpeed: "330 km/h",
    acceleration: "3.0s (0-100)",
    engine: "3.9L Twin-Turbo V8",
    price: "$330,000",
    description: "The Ferrari 488 GTB is a mid-engine sports car that represents the pinnacle of Italian engineering and design excellence."
  },
  { 
    name: "Lamborghini Huracán", 
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
    brand: "Lamborghini",
    year: 2023,
    horsepower: 631,
    topSpeed: "325 km/h",
    acceleration: "2.9s (0-100)",
    engine: "5.2L V10",
    price: "$261,000",
    description: "The Huracán combines breathtaking design with pure performance, featuring Lamborghini's naturally aspirated V10 engine."
  },
  { 
    name: "Porsche 911 GT3", 
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&h=600&fit=crop",
    brand: "Porsche",
    year: 2023,
    horsepower: 502,
    topSpeed: "318 km/h",
    acceleration: "3.4s (0-100)",
    engine: "4.0L Flat-Six",
    price: "$180,000",
    description: "The 911 GT3 is a track-focused sports car that brings motorsport technology to the road with precision German engineering."
  },
  { 
    name: "Bugatti Chiron", 
    image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=800&h=600&fit=crop",
    brand: "Bugatti",
    year: 2023,
    horsepower: 1500,
    topSpeed: "420 km/h",
    acceleration: "2.4s (0-100)",
    engine: "8.0L Quad-Turbo W16",
    price: "$3,000,000",
    description: "The Bugatti Chiron is the ultimate hypercar, combining unmatched power with French luxury and craftsmanship."
  },
  { 
    name: "McLaren 720S", 
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop",
    brand: "McLaren",
    year: 2023,
    horsepower: 710,
    topSpeed: "341 km/h",
    acceleration: "2.9s (0-100)",
    engine: "4.0L Twin-Turbo V8",
    price: "$299,000",
    description: "The 720S showcases McLaren's Formula 1 heritage with its lightweight carbon fiber construction and aerodynamic excellence."
  },
  { 
    name: "Aston Martin DB11", 
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop",
    brand: "Aston Martin",
    year: 2023,
    horsepower: 630,
    topSpeed: "334 km/h",
    acceleration: "3.7s (0-100)",
    engine: "5.2L Twin-Turbo V12",
    price: "$245,000",
    description: "The DB11 embodies British elegance and grand touring excellence with its hand-crafted interior and powerful V12 engine."
  },
  { 
    name: "Nissan GT-R Nismo", 
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=800&h=600&fit=crop",
    brand: "Nissan",
    year: 2023,
    horsepower: 600,
    topSpeed: "315 km/h",
    acceleration: "2.5s (0-100)",
    engine: "3.8L Twin-Turbo V6",
    price: "$220,000",
    description: "Known as 'Godzilla', the GT-R Nismo combines Japanese precision with supercar-slaying performance and advanced AWD technology."
  },
  { 
    name: "Chevrolet Corvette Z06", 
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    brand: "Chevrolet",
    year: 2023,
    horsepower: 670,
    topSpeed: "312 km/h",
    acceleration: "2.6s (0-100)",
    engine: "5.5L Flat-Plane V8",
    price: "$115,000",
    description: "The Z06 delivers exotic supercar performance with American muscle heritage and an incredible value proposition."
  },
  { 
    name: "Ford Mustang Shelby GT500", 
    image: "https://images.unsplash.com/photo-1584345604476-8ec5f82bd3dd?w=800&h=600&fit=crop",
    brand: "Ford",
    year: 2023,
    horsepower: 760,
    topSpeed: "290 km/h",
    acceleration: "3.3s (0-100)",
    engine: "5.2L Supercharged V8",
    price: "$79,000",
    description: "The most powerful street-legal Ford ever, the GT500 combines raw American muscle with track-ready performance."
  },
  { 
    name: "Dodge Challenger Hellcat", 
    image: "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=800&h=600&fit=crop",
    brand: "Dodge",
    year: 2023,
    horsepower: 717,
    topSpeed: "326 km/h",
    acceleration: "3.6s (0-100)",
    engine: "6.2L Supercharged V8",
    price: "$72,000",
    description: "The Hellcat is pure American muscle, delivering supercar-level power in an iconic muscle car package."
  },
  { 
    name: "Pagani Huayra", 
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    brand: "Pagani",
    year: 2023,
    horsepower: 764,
    topSpeed: "383 km/h",
    acceleration: "2.8s (0-100)",
    engine: "6.0L Twin-Turbo V12",
    price: "$2,800,000",
    description: "The Huayra is a rolling work of art, combining Italian craftsmanship with Mercedes-AMG power and aerospace materials."
  },
  { 
    name: "Koenigsegg Jesko", 
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    brand: "Koenigsegg",
    year: 2023,
    horsepower: 1600,
    topSpeed: "480+ km/h",
    acceleration: "2.5s (0-100)",
    engine: "5.0L Twin-Turbo V8",
    price: "$3,400,000",
    description: "The Jesko pushes the boundaries of hypercar performance with Swedish engineering innovation and record-breaking speed."
  },
  { 
    name: "BMW M4 Competition", 
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
    brand: "BMW",
    year: 2023,
    horsepower: 503,
    topSpeed: "290 km/h",
    acceleration: "3.8s (0-100)",
    engine: "3.0L Twin-Turbo I6",
    price: "$84,000",
    description: "The M4 Competition delivers the ultimate driving machine experience with precision handling and turbocharged power."
  },
  { 
    name: "Audi R8 V10", 
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=600&fit=crop",
    brand: "Audi",
    year: 2023,
    horsepower: 602,
    topSpeed: "330 km/h",
    acceleration: "3.1s (0-100)",
    engine: "5.2L V10",
    price: "$196,000",
    description: "The R8 shares its heart with Lamborghini, delivering exotic performance with Audi's refined daily usability."
  },
  { 
    name: "Mercedes-AMG GT R", 
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
    brand: "Mercedes-AMG",
    year: 2023,
    horsepower: 577,
    topSpeed: "318 km/h",
    acceleration: "3.5s (0-100)",
    engine: "4.0L Twin-Turbo V8",
    price: "$162,000",
    description: "The Beast of the Green Hell, the AMG GT R combines track-bred performance with Mercedes luxury and engineering."
  },
];
