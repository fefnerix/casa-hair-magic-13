import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from "lucide-react";

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "¿Es digital o físico?",
      answer: "Es completamente digital. Recibes la guía en PDF para descargar inmediatamente después de la compra. Puedes leerla en tu celular, tablet o computadora."
    },
    {
      question: "¿Funciona si no sé nada de cuidado capilar?",
      answer: "¡Absolutamente! La guía está diseñada para principiantes. Todo está explicado paso a paso, con imágenes y instrucciones muy claras. Empezamos desde cero."
    },
    {
      question: "¿Los ingredientes son caros?",
      answer: "No, para nada. Usamos ingredientes que ya tienes en casa: aceite de coco, miel, huevos, aguacate, etc. Si necesitas comprar algo, son productos económicos de cualquier supermercado."
    },
    {
      question: "¿Realmente se nota el cambio?",
      answer: "Sí, la mayoría de nuestras clientas reportan cambios visibles en la primera semana. Los resultados más dramáticos se ven después de 30 días de seguir la rutina completa."
    },
    {
      question: "¿El pago es seguro?",
      answer: "100% seguro. Usamos plataformas de pago certificadas con encriptación bancaria. Además, tienes garantía de 7 días para solicitar reembolso completo."
    },
    {
      question: "¿Cuándo recibo acceso?",
      answer: "Inmediatamente. En cuanto se procesa tu pago (1-2 minutos), recibes todo por email y también te agregamos al canal VIP de WhatsApp."
    },
    {
      question: "¿Funciona para todo tipo de cabello?",
      answer: "Sí, la guía incluye rutinas específicas para cabello graso, seco, rizado, liso, teñido y con químicos. Hay una sección personalizada para cada tipo."
    },
    {
      question: "¿Puedo compartir la guía?",
      answer: "La guía es para uso personal. Cada acceso está personalizado y tiene marca de agua. Compartirla viola los términos de uso."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              <HelpCircle className="w-16 h-16 mx-auto mb-4" style={{color: '#d4145a'}} />
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Las dudas más comunes de nuestras clientas
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors duration-200"
                >
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">
                ¿Aún tienes dudas?
              </h3>
              <p className="text-muted-foreground">
                Recuerda que tienes 7 días de garantía total. No hay riesgo para ti.
              </p>
            </div>
            
            <Button 
              size="xl" 
              variant="cta"
              className="min-w-[300px] text-white shadow-elegant hover:shadow-glow"
            >
              LIBERA TU ACCESO CON GARANTÍA
            </Button>
            
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" style={{color: '#d4145a'}} />
              ¿Necesitas ayuda? Escríbenos por WhatsApp: 
              <span className="text-primary font-semibold"> +1 (555) 123-4567</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};