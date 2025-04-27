
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-verde-floresta text-fossil pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="font-serif text-2xl mb-4">PURANGA</h3>
            <p className="text-sm opacity-80 mb-4 max-w-xs">
              Biojoias de luxo sustentável, nascidas da floresta amazônica.
              Arte viva que transcende o tempo.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-dourado transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-dourado transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:contato@puranga.com" 
                className="hover:text-dourado transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="uppercase text-sm tracking-wider mb-4 font-medium">Navegue</h4>
            <ul className="space-y-2">
              <li><Link to="/collections" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Coleções</Link></li>
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Sobre Nós</Link></li>
              <li><Link to="/certification" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Certificação</Link></li>
              <li><Link to="/shop" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Loja</Link></li>
              <li><Link to="/blog" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Magazine</Link></li>
              <li><Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="uppercase text-sm tracking-wider mb-4 font-medium">Informações</h4>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Envio</Link></li>
              <li><Link to="/returns" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Trocas e Devoluções</Link></li>
              <li><Link to="/terms" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Termos e Condições</Link></li>
              <li><Link to="/privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Política de Privacidade</Link></li>
              <li><Link to="/faq" className="text-sm opacity-80 hover:opacity-100 transition-opacity">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="uppercase text-sm tracking-wider mb-4 font-medium">Newsletter</h4>
            <p className="text-sm opacity-80 mb-4">
              Acompanhe as novidades da Puranga e receba atualizações sobre novas coleções.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="px-4 py-2 bg-white/10 text-sm flex-1 focus:outline-none"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-dourado text-fossil text-sm hover:bg-dourado/90 transition-colors"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Puranga Biojoias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
