import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Flame, BookOpen, Calendar, MessageCircle, Shield } from "lucide-react";

export const OfferSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Offer Card */}
          <Card className="relative p-8 md:p-12 bg-gradient-secondary border-2 border-accent/20 shadow-elegant overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full translate-y-20 -translate-x-20" />
            
            <div className="relative z-10 text-center space-y-8">
              {/* Fire Icon */}
              <div className="animate-bounce-soft">
                <Flame className="w-16 h-16 mx-auto" style={{color: '#d4145a'}} />
              </div>
              
              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Llévate la Guía Completa + 
                <span className="text-success"> 2 Regalos</span>
                <br />
                por el Precio de Uno
              </h2>

              {/* Price Section */}
              <div className="space-y-4">
                {/* Before Price */}
                <div className="flex items-center justify-center gap-4">
                  <span className="text-2xl text-muted-foreground line-through">Antes: $29,90</span>
                  <div className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-bold">
                    -67% DESC
                  </div>
                </div>
                
                {/* Current Price */}
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-bold text-success">
                    $9,90
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Pago único • Sin mensualidades
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="xl" 
                variant="cta"
                className="min-w-[320px] text-white shadow-cta hover:shadow-glow"
                onClick={() => window.open('https://pay.hotmart.com/V101179580R?checkoutMode=10&sck=pag_vendas', '_blank')}
              >
                OBTENER GUÍA COMPLETA AHORA
              </Button>

              {/* Bonus Items Quick Preview */}
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 space-y-2">
                  <BookOpen className="w-8 h-8 mx-auto" style={{color: '#d4145a'}} />
                  <div className="font-semibold">Guía Completa</div>
                  <div className="text-sm text-muted-foreground">PDF descargable</div>
                </div>
                
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 space-y-2">
                  <Calendar className="w-8 h-8 mx-auto" style={{color: '#d4145a'}} />
                  <div className="font-semibold">Calendario Capilar</div>
                  <div className="text-sm text-muted-foreground">Valor $17,90</div>
                </div>
                
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 space-y-2">
                  <MessageCircle className="w-8 h-8 mx-auto" style={{color: '#d4145a'}} />
                  <div className="font-semibold">Canal VIP WhatsApp</div>
                  <div className="text-sm text-muted-foreground">Valor $19,90</div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5" style={{color: '#d4145a'}} />
                Garantía de satisfacción 100% • 7 días
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};