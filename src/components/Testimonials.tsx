
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from 'framer-motion';

// Sample testimonials
const testimonials = [
  {
    id: 1,
    quote: "As biojoias da Puranga carregam uma energia única. Cada vez que uso meu colar sinto uma conexão profunda com a Amazônia.",
    author: "Marina Silva",
    title: "Cliente Puranga",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
  },
  {
    id: 2,
    quote: "A certificação blockchain da Puranga me dá tranquilidade sobre a origem sustentável dos materiais. É luxo consciente de verdade.",
    author: "Paulo Mendes",
    title: "Cliente Puranga",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
  },
  {
    id: 3,
    quote: "Como designer, aprecio a fusão perfeita entre tradição ancestral e design contemporâneo. Puranga é uma marca visionária.",
    author: "Fernanda Lima",
    title: "Designer de Moda",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-areia/60">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-verde-floresta mb-4">
            O Que Dizem Sobre Nós
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Histórias e experiências compartilhadas pela comunidade Puranga.
          </p>
        </motion.div>
        
        <Carousel
          opts={{ loop: true }}
          className="mx-auto max-w-5xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="h-full px-6 py-12">
                  <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-20 h-20 rounded-full object-cover mb-6"
                    />
                    <p className="text-xl font-serif italic text-carvao mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 border-dourado text-dourado hover:bg-dourado hover:text-fossil" />
          <CarouselNext className="-right-4 border-dourado text-dourado hover:bg-dourado hover:text-fossil" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
