
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Define product type
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
    name: "Colar Amazônia Eterna",
    price: 980,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600",
    category: "Colares"
  },
  {
    id: 2,
    name: "Brincos Vitória-Régia",
    price: 760,
    image: "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?q=80&w=600",
    category: "Brincos"
  },
  {
    id: 3,
    name: "Pulseira Raízes",
    price: 890,
    image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?q=80&w=600",
    category: "Pulseiras"
  },
  {
    id: 4,
    name: "Anel Ágata Verde",
    price: 1250,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600",
    category: "Anéis"
  }
];

const FeaturedProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-verde-floresta mb-4">
            Biojoias em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada peça traz a essência da floresta Amazônica em design exclusivo, 
            com materiais sustentáveis e técnicas ancestrais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative overflow-hidden mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-carvao/50 to-transparent flex items-end transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="p-6 w-full">
                      <button className="w-full py-2 bg-dourado text-fossil font-medium text-sm hover:bg-dourado/90 transition-colors">
                        Ver Detalhes
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-dourado uppercase tracking-wider">{product.category}</span>
                  <h3 className="product-title text-carvao mt-1">{product.name}</h3>
                  <p className="text-sm font-medium mt-1">R$ {product.price.toLocaleString()}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            to="/shop" 
            className="inline-block px-8 py-3 border border-verde-floresta text-verde-floresta hover:bg-verde-floresta hover:text-fossil transition-colors"
          >
            Ver Todos os Produtos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
