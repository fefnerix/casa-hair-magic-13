import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageCircle, Gift, Diamond, Check } from "lucide-react";

export const BonusSection = () => {
  const bonuses = [
    {
      number: "01",
      title: "Calendario de Cuidado Capilar",
      description: "Rutina paso a paso para cada día del mes, personalizada según tu tipo de cabello",
      value: "$17,90",
      icon: Calendar,
      features: [
        "Rutina diaria personalizada",
        "Recordatorios de tratamientos",
        "Tracking de progreso",
        "Planificación mensual"
      ]
    },
    {
      number: "02", 
      title: "Canal VIP de Tips por WhatsApp",
      description: "Acceso exclusivo a tips diarios, recetas secretas y soporte directo",
      value: "$19,90",
      icon: MessageCircle,
      features: [
        "Tips diarios exclusivos",
        "Soporte directo 24/7",
        "Recetas secretas",
        "Comunidad VIP"
      ]
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              <Gift className="w-16 h-16 mx-auto mb-4" style={{color: '#d4145a'}} />
              Hoy recibes <span className="bg-gradient-primary bg-clip-text text-transparent">2 BONOS EXCLUSIVOS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estos bonos normalmente se venden por separado, pero hoy los recibes gratis
            </p>
          </div>

          {/* Bonuses Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {bonuses.map((bonus, index) => (
              <Card 
                key={index}
                className="relative p-8 bg-gradient-secondary border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-elegant group overflow-hidden"
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -translate-y-12 translate-x-12" />
                
                {/* Bonus Number Badge */}
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-bold px-3 py-1">
                  BONO #{bonus.number}
                </Badge>

                {/* FREE Badge */}
                <Badge className="absolute top-4 right-4 bg-success text-success-foreground font-bold px-3 py-1 animate-bounce-soft">
                  ¡GRATIS!
                </Badge>

                <div className="relative z-10 space-y-6 mt-8">
                  {/* Icon */}
                  <div className="group-hover:animate-bounce-soft">
                    <bonus.icon className="w-12 h-12" style={{color: '#d4145a'}} />
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">
                      {bonus.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    {bonus.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4" style={{color: '#d4145a'}} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Value */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Valor original:</div>
                      <div className="text-2xl font-bold text-destructive line-through">
                        {bonus.value}
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-sm text-muted-foreground">Hoy pagas:</div>
                      <div className="text-3xl font-bold text-success">
                        $0,00
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Total Value Summary */}
          <Card className="p-8 bg-gradient-primary text-white text-center space-y-4">
            <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
              <Diamond className="w-8 h-8" />
              Valor Total de los Bonos
            </h3>
            <div className="text-4xl font-bold">
              $37,80
            </div>
            <p className="text-lg opacity-90">
              Pero hoy los recibes completamente gratis con tu compra
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};