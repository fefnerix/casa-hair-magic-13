import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import beforeAfter1 from "@/assets/before-after-1.webp";
import beforeAfter2 from "@/assets/before-after-2.webp";
import whatsappTestimonials from "@/assets/whatsapp-testimonials.webp";
import { Sparkles, Star, MessageCircle, Clock } from "lucide-react";

export const ResultsSection = () => {
  const testimonials = [
    {
      name: "María Elena",
      result: "Sin salón. Sin químicos. Resultados reales.",
      image: beforeAfter1
    },
    {
      name: "Carmen López",
      result: "Lo hice yo sola, en casa.",
      image: beforeAfter2
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              <Sparkles className="w-16 h-16 mx-auto mb-4" style={{color: '#d4145a'}} />
              Resultados Reales de 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Mujeres Reales</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Más de 2,847 mujeres ya han transformado su cabello con esta guía
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Before/After Results */}
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elegant group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={`Resultado de ${testimonial.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-muted-foreground italic">"{testimonial.result}"</p>
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{color: '#d4145a'}} />
                    ))}
                  </div>
                </div>
              </Card>
            ))}

            {/* WhatsApp Testimonials */}
            <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elegant group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={whatsappTestimonials} 
                  alt="Testimonios de WhatsApp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-semibold text-foreground">Andrea Ruiz</h3>
                <p className="text-muted-foreground italic">"Mi cabello cambió desde la primera semana."</p>
                <div className="flex items-center gap-2 text-sm text-success">
                  <MessageCircle className="w-4 h-4" style={{color: '#10b981'}} />
                  <span>Verificado por WhatsApp</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Social Proof Numbers */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">2,847+</div>
              <div className="text-muted-foreground">Mujeres transformadas</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent">98%</div>
              <div className="text-muted-foreground">Satisfacción garantizada</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-success">4.9/5</div>
              <div className="text-muted-foreground">Calificación promedio</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <Button 
              size="xl" 
              variant="cta"
              className="min-w-[350px] text-white shadow-elegant hover:shadow-glow"
              onClick={() => window.open('https://pay.hotmart.com/V101179580R?checkoutMode=10&sck=pag_vendas', '_blank')}
            >
              YO TAMBIÉN QUIERO RESULTADOS ASÍ
            </Button>
            
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" style={{color: '#d4145a'}} />
              La oferta expira en <span className="font-bold text-destructive">6 horas</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};