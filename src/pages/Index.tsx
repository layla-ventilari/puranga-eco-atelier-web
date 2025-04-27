
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BrandManifesto from '../components/BrandManifesto';
import FeaturedProducts from '../components/FeaturedProducts';
import CollectionPreview from '../components/CollectionPreview';
import SustainabilitySection from '../components/SustainabilitySection';
import Testimonials from '../components/Testimonials';
import BlockchainTeaser from '../components/BlockchainTeaser';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  // Smooth scroll behavior
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandManifesto />
      <FeaturedProducts />
      <CollectionPreview />
      <SustainabilitySection />
      <Testimonials />
      <BlockchainTeaser />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
