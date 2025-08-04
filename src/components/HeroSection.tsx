import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ebookMockup from "@/assets/ebook-mockup.webp";
import { Scissors, Gift, Shield, Check } from "lucide-react";
export const HeroSection = () => {
  return <section className="relative min-h-screen bg-gradient-soft overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-accent/15 rounded-full blur-3xl animate-float" style={{
      animationDelay: "1s"
    }} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent-foreground border-accent/30">
              <Scissors className="w-5 h-5" style={{
              color: '#d4145a'
            }} />
              Guía #1 en Transformación Capilar
            </Badge>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Transforma tu cabello en casa
                </span>
                <br />
                <span className="text-foreground">
                  con técnicas de salón profesional
                </span>
                <br />
                <span className="text-primary italic">
                  sin químicos ni gastos caros
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Guía completa para lograr cabello sedoso, brillante y saludable
                <span className="font-semibold text-foreground"> usando ingredientes naturales </span> 
                que ya tienes en tu cocina.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <Button 
                size="xl" 
                variant="cta" 
                className="w-full lg:w-auto min-w-[320px] text-white shadow-cta hover:shadow-glow"
                onClick={() => {
                  const offerSection = document.querySelector('[data-section="offer-reinforcement"]');
                  offerSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                VER OFERTA ESPECIAL COMPLETA
              </Button>
              
              {/* Urgency Bar */}
              <div className="bg-accent/20 border border-accent/30 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 text-accent-foreground font-semibold">
                  <Gift className="w-5 h-5" style={{
                  color: '#d4145a'
                }} />
                  <span>Últimos accesos con los 2 bonos disponibles hoy</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{
                color: '#10b981'
              }} />
                  <span className="font-medium">+5,847 mujeres transformaron su cabello</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{
                color: '#10b981'
              }} />
                  <span className="font-medium flex items-center gap-1">
                    Garantía 7 días 
                    <Shield className="w-4 h-4" style={{
                  color: '#d4145a'
                }} />
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{
                color: '#10b981'
              }} />
                  <span className="font-medium">Descarga inmediata</span>
                </div>
              </div>
          </div>

          {/* Right Content - Product Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <img src={ebookMockup} alt="Guía Completa de Transformación Capilar en Casa" className="relative w-full max-w-md lg:max-w-lg drop-shadow-2xl animate-float" />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-soft animate-bounce-soft">
                ¡Nuevo!
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-elegant backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-secondary rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-accent rounded-full border-2 border-white" />
                  </div>
                <div className="text-sm">
                  <div className="font-semibold">+5,847 mujeres</div>
                  <div className="text-muted-foreground">ya descargaron</div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};