
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-verde-floresta mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-serif mb-8">Página não encontrada</h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            A página que você está procurando parece não existir ou foi movida.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-dourado text-fossil hover:bg-dourado/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar à Página Inicial
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
