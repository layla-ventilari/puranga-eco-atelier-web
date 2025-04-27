
import { motion } from 'framer-motion';

const BrandManifesto = () => {
  return (
    <section className="py-24 bg-areia/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="section-title text-verde-floresta mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Manifesto Puranga
          </motion.h2>
          
          <motion.div 
            className="space-y-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              <span className="text-dourado font-serif italic">Puranga</span> significa "beleza" na língua Tupi.
              Uma beleza que transcende o visual e conecta história, natureza e propósito.
            </p>
            
            <p>
              Nossas biojoias são mais que adornos — são pontes entre a sabedoria ancestral
              amazônica e a inovação contemporânea. Cada peça conta uma história de respeito
              pela floresta e seus guardiões.
            </p>
            
            <p>
              Trabalhamos com artesãos indígenas e comunidades locais, 
              usando apenas materiais sustentáveis colhidos em harmonia com os ciclos naturais.
              Sementes, fibras vegetais e minerais são transformados em arte portátil
              que carrega a energia e a beleza da maior floresta tropical do mundo.
            </p>
            
            <p className="font-serif italic text-verde-floresta">
              "Usar uma joia Puranga é conectar-se à ancestralidade amazônica
              e contribuir para sua preservação."
            </p>
          </motion.div>
          
          <motion.hr 
            className="w-24 h-0.5 bg-dourado mx-auto my-12"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center">
              <p className="text-3xl font-serif text-dourado">100%</p>
              <p className="text-sm uppercase tracking-wider text-carvao/70">Sustentável</p>
            </div>
            
            <div className="text-center">
              <p className="text-3xl font-serif text-dourado">24</p>
              <p className="text-sm uppercase tracking-wider text-carvao/70">Comunidades</p>
            </div>
            
            <div className="text-center">
              <p className="text-3xl font-serif text-dourado">10%</p>
              <p className="text-sm uppercase tracking-wider text-carvao/70">Preservação</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandManifesto;
