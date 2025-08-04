import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Infinity, Shield, Calendar, MessageCircle, Handshake, Target, Check, DollarSign, Lock, Zap, Clock } from "lucide-react";
import { useCoupons } from "@/hooks/useCoupons";

export const OfferReinforcementSection = () => {
  const couponsLeft = useCoupons();
  
  const offerItems = [
    {
      icon: BookOpen,
      title: "Guía Completa PDF",
      description: "Acceso inmediato al material completo"
    },
    {
      icon: Infinity,
      title: "Acceso de por vida",
      description: "Sin vencimiento, es tuyo para siempre"
    },
    {
      icon: Shield,
      title: "Garantía de 7 días",
      description: "100% de satisfacción o tu dinero de vuelta"
    },
    {
      icon: Calendar,
      title: "Calendario capilar",
      description: "Planificación completa de tu rutina"
    },
    {
      icon: MessageCircle,
      title: "Canal VIP",
      description: "Soporte exclusivo por WhatsApp"
    },
    {
      icon: Handshake,
      title: "Soporte por WhatsApp",
      description: "Ayuda personalizada cuando la necesites"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft" data-section="offer-reinforcement">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="relative p-8 md:p-12 bg-card border-2 border-primary/20 shadow-elegant overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-primary opacity-10 rounded-full -translate-y-20 translate-x-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-secondary opacity-10 rounded-full translate-y-16 -translate-x-16" />
            
            <div className="relative z-10 text-center space-y-8">
              {/* Target Icon */}
              <div className="animate-bounce-soft">
                <Target className="w-16 h-16 mx-auto" style={{color: '#d4145a'}} />
              </div>
              
              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Hoy transformas tu 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> rutina capilar completa</span>
              </h2>

              {/* Checklist Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {offerItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="group-hover:animate-bounce-soft flex-shrink-0">
                      <item.icon className="w-6 h-6" style={{color: '#d4145a'}} />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        <Check className="w-4 h-4" style={{color: '#10b981'}} />
                        {item.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Value Comparison */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-2">
                    <div className="text-lg text-muted-foreground">Valor total normal:</div>
                    <div className="text-3xl font-bold text-muted-foreground line-through">
                      $67,70
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg text-muted-foreground">Precio hoy:</div>
                    <div className="text-5xl font-bold text-success">
                      $9,90
                    </div>
                  </div>
                </div>

                {/* Savings Badge */}
                <div className="inline-flex items-center gap-2 bg-success text-success-foreground px-6 py-3 rounded-full font-bold text-lg">
                  <DollarSign className="w-5 h-5" />
                  Ahorras $57,80 (85% descuento)
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="xl" 
                variant="cta"
                className="min-w-[350px] text-white shadow-elegant hover:shadow-glow animate-glow-pulse"
                onClick={() => window.open('https://pay.hotmart.com/V101179580R?checkoutMode=10&sck=pag_vendas', '_blank')}
              >
                ¡SÍ, QUIERO TODO POR <span className="text-success">$9,90</span>!
              </Button>

              {/* Urgency Text */}
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" style={{color: '#d4145a'}} />
                  Oferta válida solo hoy
                </p>
                <p className="text-xs text-destructive font-semibold">
                  Solo quedan {couponsLeft} accesos disponibles
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" style={{color: '#10b981'}} />
                  Pago 100% seguro
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" style={{color: '#10b981'}} />
                  Acceso inmediato
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" style={{color: '#10b981'}} />
                  Garantía 7 días
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};