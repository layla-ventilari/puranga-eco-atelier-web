
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="z-10">
          <h1 className="font-serif font-bold text-2xl text-verde-floresta">PURANGA</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          <Link to="/collections" className="nav-link">Coleções</Link>
          <Link to="/about" className="nav-link">Sobre</Link>
          <Link to="/certification" className="nav-link">Certificação</Link>
          <Link to="/shop" className="nav-link">Loja</Link>
          <Link to="/blog" className="nav-link">Magazine</Link>
          <Link to="/contact" className="nav-link">Contato</Link>
        </div>

        {/* Cart & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 z-10">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-carvao" />
            <span className="absolute -top-1 -right-1 bg-dourado text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-carvao" />
            ) : (
              <Menu className="h-6 w-6 text-carvao" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-background z-0 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-center justify-center`}
        >
          <div className="flex flex-col space-y-8 items-center">
            <Link to="/collections" className="nav-link text-xl" onClick={() => setIsOpen(false)}>Coleções</Link>
            <Link to="/about" className="nav-link text-xl" onClick={() => setIsOpen(false)}>Sobre</Link>
            <Link to="/certification" className="nav-link text-xl" onClick={() => setIsOpen(false)}>Certificação</Link>
            <Link to="/shop" className="nav-link text-xl" onClick={() => setIsOpen(false)}>Loja</Link>
            <Link to="/blog" className="nav-link text-xl" onClick={() => setIsOpen(false)}>Magazine</Link>
            <Link to="/contact" className="nav-link text-xl" onClick={() => setIsOpen(false)}>Contato</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
