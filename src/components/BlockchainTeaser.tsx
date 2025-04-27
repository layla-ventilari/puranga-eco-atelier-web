
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlockchainTeaser = () => {
  return (
    <section className="py-24 bg-carvao text-fossil">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative h-[500px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1639152201720-5e536d254d81?q=80&w=800" 
              alt="Blockchain Technology" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carvao to-transparent opacity-70"></div>
            
            <div className="absolute bottom-0 left-0 p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="inline-block px-4 py-1 bg-dourado text-fossil text-xs uppercase tracking-wider mb-4">
                  Inovação
                </span>
                <h3 className="font-serif text-2xl font-medium">
                  Transparência e autenticidade através da tecnologia
                </h3>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-dourado uppercase tracking-wider text-sm font-medium">Certificação Blockchain</span>
            <h2 className="section-title mt-2 mb-6">
              A Tecnologia Invisível por Trás da Nossa Arte
            </h2>
            
            <div className="space-y-6">
              <p>
                Na Puranga, cada biojoia vem com um certificado digital único baseado em 
                blockchain, que garante autenticidade, rastreabilidade e origem sustentável 
                dos materiais utilizados.
              </p>
              
              <p>
                Nosso sistema permite que você acompanhe toda a jornada da sua peça: desde a 
                coleta dos materiais na floresta, passando pelas mãos dos artesãos, até chegar 
                às suas. Uma história completa de transparência e responsabilidade.
              </p>
              
              <div className="space-y-2 py-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-dourado mr-3"></div>
                  <p>Certificado digital único para cada peça</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-dourado mr-3"></div>
                  <p>Rastreabilidade completa dos materiais</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-dourado mr-3"></div>
                  <p>NFTs exclusivos para peças de edição limitada</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-dourado mr-3"></div>
                  <p>Verificação de autenticidade instantânea</p>
                </div>
              </div>
              
              <div className="pt-4">
                <Link 
                  to="/certification"
                  className="inline-block px-8 py-3 bg-dourado text-fossil hover:bg-dourado/90 transition-colors"
                >
                  Descubra a Certificação
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainTeaser;
