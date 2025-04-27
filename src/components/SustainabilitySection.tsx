
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SustainabilitySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-dourado uppercase tracking-wider text-sm font-medium">Sustentabilidade</span>
            <h2 className="section-title text-verde-floresta mt-2 mb-6">
              Compromisso com a Natureza e as Comunidades
            </h2>
            
            <div className="space-y-6">
              <p>
                Na Puranga, trabalhamos em harmonia com a natureza e as comunidades amazônicas. 
                Nosso processo criativo começa com práticas de baixo impacto ambiental e termina
                com uma experiência de luxo consciente.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border-l-2 border-dourado pl-4">
                  <h3 className="font-serif font-medium text-lg mb-2">Materiais Sustentáveis</h3>
                  <p className="text-sm text-muted-foreground">
                    Utilizamos apenas sementes, fibras e minerais coletados de maneira sustentável e em parcerias com comunidades locais.
                  </p>
                </div>
                
                <div className="border-l-2 border-dourado pl-4">
                  <h3 className="font-serif font-medium text-lg mb-2">Técnicas Ancestrais</h3>
                  <p className="text-sm text-muted-foreground">
                    Combinamos técnicas transmitidas por gerações com inovações em design que respeitam as tradições.
                  </p>
                </div>
                
                <div className="border-l-2 border-dourado pl-4">
                  <h3 className="font-serif font-medium text-lg mb-2">Comércio Justo</h3>
                  <p className="text-sm text-muted-foreground">
                    Garantimos remuneração justa para todos os envolvidos no processo criativo, da floresta ao ateliê.
                  </p>
                </div>
                
                <div className="border-l-2 border-dourado pl-4">
                  <h3 className="font-serif font-medium text-lg mb-2">10% para Preservação</h3>
                  <p className="text-sm text-muted-foreground">
                    Destinamos 10% de nosso lucro para projetos de preservação ambiental e cultural na Amazônia.
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <Link 
                  to="/about#sustainability"
                  className="inline-block px-8 py-3 bg-verde-floresta text-fossil hover:bg-verde-floresta/90 transition-colors"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=500" 
                alt="Comunidade Amazônica" 
                className="w-full aspect-square object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=500" 
                alt="Materiais Sustentáveis" 
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="space-y-6 mt-12">
              <img 
                src="https://images.unsplash.com/photo-1493552152571-cffe61b0f511?q=80&w=500" 
                alt="Artesã Trabalhando" 
                className="w-full aspect-[4/3] object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1505764761634-1d77b57e1966?q=80&w=500" 
                alt="Floresta Amazônica" 
                className="w-full aspect-square object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
