
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateParallaxTransform = () => {
    return `translateY(${scrollY * 0.2}px)`;
  };

  return (
    <section className="h-screen relative overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000)', 
          transform: calculateParallaxTransform(),
          filter: 'brightness(0.8)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-carvao/40 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-20 text-center">
        <motion.h1 
          className="hero-title text-fossil mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Raízes ancestrais. Arte viva.
          <br />
          Joias que transcendem o tempo.
        </motion.h1>
        
        <motion.p 
          className="text-fossil/90 max-w-xl mb-10 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Biojoias de luxo sustentável que conectam a ancestralidade amazônica 
          ao design contemporâneo.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            onClick={() => navigate('/collections')}
            className="px-8 py-3 bg-dourado text-fossil font-medium hover:bg-dourado/90 transition-colors"
          >
            Explorar Coleções
          </button>
          <button 
            onClick={() => navigate('/about')}
            className="px-8 py-3 border border-fossil text-fossil font-medium hover:bg-fossil/10 transition-colors"
          >
            Nossa História
          </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-fossil text-xs uppercase tracking-widest mb-2">Descobrir</span>
          <div className="w-0.5 h-8 bg-fossil/50"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
