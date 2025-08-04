import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { OfferSection } from "@/components/OfferSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { WhatYouLearnSection } from "@/components/WhatYouLearnSection";
import { ResultsSection } from "@/components/ResultsSection";
import { BonusSection } from "@/components/BonusSection";
import { OfferReinforcementSection } from "@/components/OfferReinforcementSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FAQSection } from "@/components/FAQSection";
import { UrgencyBanner } from "@/components/UrgencyBanner";
import { PurchaseNotifications } from "@/components/PurchaseNotifications";
import { FloatingCTA } from "@/components/FloatingCTA";


const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Urgency Banner */}
      <UrgencyBanner />
      
      {/* Purchase Notifications */}
      <PurchaseNotifications />
      
      {/* Floating CTA */}
      <FloatingCTA />
      
      {/* Hero Section - Dobra 1 */}
      <HeroSection />
      
      {/* Offer with Visual Anchoring - Bloco 2 */}
      <OfferSection />
      
      {/* Target Audience - Bloco 3 */}
      <TargetAudienceSection />
      
      {/* What You'll Learn - Bloco 4 */}
      <WhatYouLearnSection />
      
      {/* Real Results - Bloco 5 */}
      <ResultsSection />
      
      {/* Bonuses - Bloco 6 */}
      <BonusSection />
      
      {/* Offer Reinforcement - Bloco 7 */}
      <OfferReinforcementSection />
      
      {/* Guarantee - Bloco 9 */}
      <GuaranteeSection />
      
      {/* FAQ - Bloco 10 */}
      <FAQSection />
      
      {/* Support Section */}
      <section className="py-16 bg-gradient-primary text-white text-center">
        <div className="container mx-auto px-4 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            ¿Necesitas ayuda con tu pedido?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Nuestro equipo de soporte está aquí para ayudarte
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              variant="secondary" 
              className="text-primary bg-white hover:bg-white/90"
              onClick={() => window.open('https://wa.me/5524981493204', '_blank')}
            >
              Hablar con Soporte
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="text-2xl font-bold text-primary">
            Guía Completa de Transformación Capilar en Casa
          </div>
          <div className="text-sm text-muted-foreground">
            © 2024 - Todos los derechos reservados
          </div>
          <div className="text-xs text-muted-foreground">
            Política de Privacidad | Términos de Uso | Contacto
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
