
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      // Here you would typically send this to your newsletter service
      console.log('Email submitted:', email);
      
      toast({
        title: "Assinatura confirmada!",
        description: "Obrigado por se juntar à nossa newsletter.",
      });
      
      setEmail('');
    }
  };
  
  return (
    <section className="py-24 bg-verde-floresta text-fossil">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="section-title mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Fique por dentro das novidades
          </motion.h2>
          
          <motion.p
            className="text-fossil/80 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Inscreva-se em nossa newsletter para receber atualizações sobre novas coleções,
            histórias da Amazônia e novidades sobre sustentabilidade.
          </motion.p>
          
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Seu endereço de e-mail"
              className="flex-1 px-4 py-3 bg-white/10 text-fossil placeholder:text-fossil/50 focus:outline-none focus:bg-white/20 transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-dourado text-fossil font-medium hover:bg-dourado/90 transition-colors whitespace-nowrap"
            >
              Assinar
            </button>
          </motion.form>
          
          <motion.p 
            className="text-xs mt-4 text-fossil/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Ao assinar, você concorda com nossa política de privacidade.
            Prometemos não compartilhar seus dados.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
