import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Frown, Home, Zap, CreditCard, Leaf, Star, CheckCircle } from "lucide-react";

export const TargetAudienceSection = () => {
  const targetPoints = [
    {
      icon: Sparkles,
      text: "Quieres un cabello increíble sin depender del salón ni gastar una fortuna"
    },
    {
      icon: Frown,
      text: "Luchas con caída, frizz o resequedad y ya no sabes qué probar"
    },
    {
      icon: Home,
      text: "Deseas aprender a cuidarte sola, desde casa"
    },
    {
      icon: Zap,
      text: "Te importa tu imagen y quieres sentirte más segura"
    },
    {
      icon: CreditCard,
      text: "Estás cansada de productos caros que no funcionan"
    },
    {
      icon: Leaf,
      text: "Te apasiona la belleza natural"
    },
    {
      icon: Star,
      text: "Sientes que tu cabello necesita un cambio real"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Section Header */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{color: '#d4145a'}} />
              Esta guía es para ti si...
            </h2>
          </div>

          {/* Target Points Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {targetPoints.map((point, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft group"
              >
                <div className="flex items-start gap-4 text-left">
                  <div className="group-hover:animate-bounce-soft flex-shrink-0">
                    <point.icon className="w-6 h-6" style={{color: '#d4145a'}} />
                  </div>
                  <p className="text-lg leading-relaxed text-foreground">
                    {point.text}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <Button 
              size="xl" 
              variant="success"
              className="min-w-[300px] shadow-elegant hover:shadow-glow"
            >
              ¡EMPIEZA HOY MISMO!
            </Button>
            
            <p className="text-sm text-muted-foreground">
              ⏰ Solo quedan <span className="font-bold text-destructive">23 accesos</span> con bonos incluidos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};