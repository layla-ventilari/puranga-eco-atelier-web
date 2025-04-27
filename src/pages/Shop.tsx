
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from '../components/ui/input';
import { Separator } from '../components/ui/separator';
import { Search } from 'lucide-react';

// Types
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

// Sample products data
const products: Product[] = [
  {
    id: 1,
    name: "Colar Ancestral Amazônia",
    price: 1250,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600",
    category: "Colares"
  },
  {
    id: 2,
    name: "Pulseira Raízes da Terra",
    price: 890,
    image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?q=80&w=600",
    category: "Pulseiras"
  },
  {
    id: 3,
    name: "Brincos Vitória-Régia",
    price: 760,
    image: "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?q=80&w=600",
    category: "Brincos"
  },
  {
    id: 4,
    name: "Anel Cristal da Floresta",
    price: 980,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600",
    category: "Anéis"
  },
  {
    id: 5,
    name: "Colar Sementes Sagradas",
    price: 1450,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600",
    category: "Colares"
  },
  {
    id: 6,
    name: "Pulseira Cascata Dourada",
    price: 920,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600",
    category: "Pulseiras"
  }
];

const categories = ["Todos", "Colares", "Pulseiras", "Brincos", "Anéis"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-fossil">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl md:text-5xl text-verde-floresta mb-4">
            Biojoias Puranga
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada peça conta uma história ancestral da Amazônia, unindo artesanato tradicional 
            e design contemporâneo em harmonia com a natureza.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar biojoias..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Categories */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? "bg-dourado text-white"
                    : "border border-dourado text-dourado hover:bg-dourado/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <button className="w-full py-2 bg-dourado text-fossil font-medium hover:bg-dourado/90 transition-colors">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <span className="text-xs text-dourado uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="font-serif text-xl text-verde-floresta mt-1">
                  {product.name}
                </h3>
                <p className="text-lg font-medium mt-1">
                  R$ {product.price.toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
