
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type Collection = {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
};

// Sample collections
const collections: Collection[] = [
  {
    id: 1,
    name: "Terra Ancestral",
    description: "Biojoias inspiradas nas formas orgânicas e nos símbolos das culturas originárias da Amazônia.",
    image: "https://images.unsplash.com/photo-1535700601175-e2b68c6c5249?q=80&w=800",
    slug: "terra-ancestral"
  },
  {
    id: 2,
    name: "Águas Cristalinas",
    description: "Coleção inspirada nos rios da Amazônia, com cristais e pedras que refletem a pureza das águas.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800",
    slug: "aguas-cristalinas"
  },
  {
    id: 3,
    name: "Flora Viva",
    description: "Peças exclusivas que celebram a diversidade da flora amazônica, suas cores e texturas.",
    image: "https://images.unsplash.com/photo-1530968561612-341882730443?q=80&w=800",
    slug: "flora-viva"
  }
];

const CollectionPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-24 bg-verde-floresta text-fossil overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4">Nossas Coleções</h2>
          <p className="text-fossil/80 max-w-2xl mx-auto">
            Descubra as diferentes histórias que contamos através de nossas biojoias,
            cada coleção com sua própria narrativa e inspiração.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Collection Image */}
          <motion.div 
            className="relative h-[600px] overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {collections.map((collection, idx) => (
              <motion.div 
                key={collection.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeIndex === idx ? 1 : 0,
                  scale: activeIndex === idx ? 1 : 1.1
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="object-cover h-full w-full"
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Collection Info */}
          <motion.div 
            className="p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {collections.map((collection, idx) => (
                <div 
                  key={collection.id}
                  className={`p-6 cursor-pointer transition-all duration-300 border-l-2 ${
                    activeIndex === idx 
                      ? 'border-dourado bg-white/5' 
                      : 'border-transparent hover:border-dourado/30'
                  }`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <h3 className="product-title mb-2">{collection.name}</h3>
                  <p className="text-fossil/70 mb-4">{collection.description}</p>
                  
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link 
                        to={`/collections/${collection.slug}`}
                        className="inline-block px-6 py-2 border border-dourado text-dourado hover:bg-dourado/10 transition-colors text-sm uppercase tracking-wider"
                      >
                        Explorar Coleção
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollectionPreview;
