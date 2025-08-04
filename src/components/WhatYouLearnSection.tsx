import { Card } from "@/components/ui/card";
import { Sparkles, Scissors, Droplet, Calendar, TrendingUp, AlertCircle, BookOpen, Leaf } from "lucide-react";
import naturalIngredients from "@/assets/natural-ingredients.webp";

export const WhatYouLearnSection = () => {
  const learningPoints = [
    {
      icon: Sparkles,
      title: "Tratamiento casero que reemplaza al salón",
      description: "Técnicas profesionales adaptadas para hacer en casa"
    },
    {
      icon: Scissors,
      title: "Cómo cortar puntas dañadas sin errores",
      description: "Método paso a paso para sanear tu cabello"
    },
    {
      icon: Droplet,
      title: "Mascarillas con ingredientes caseros",
      description: "Recetas naturales que realmente funcionan"
    },
    {
      icon: Calendar,
      title: "Rutina paso a paso con resultados",
      description: "Cronograma personalizado para tu tipo de cabello"
    },
    {
      icon: TrendingUp,
      title: "Activa el crecimiento natural",
      description: "Estimula el folículo piloso de forma natural"
    },
    {
      icon: AlertCircle,
      title: "Errores diarios que dañan tu cabello",
      description: "Lo que debes evitar para mantener tu cabello sano"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-display">
              <BookOpen className="w-16 h-16 mx-auto mb-4" style={{color: '#d4145a'}} />
              Lo que descubrirás dentro de la 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Guía</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada técnica está explicada paso a paso, con imágenes y videos para que no tengas dudas
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Learning Points */}
            <div className="space-y-6">
              {learningPoints.map((point, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:animate-bounce-soft flex-shrink-0">
                      <point.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <img 
                  src={naturalIngredients} 
                  alt="Ingredientes naturales para el cuidado capilar"
                  className="relative w-full rounded-2xl shadow-elegant"
                />
                
                {/* Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4">
                  <div className="text-center space-y-2">
                    <h4 className="font-semibold text-foreground flex items-center justify-center gap-2">
                      <Leaf className="w-5 h-5" style={{color: '#10b981'}} />
                      Ingredientes 100% Naturales
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Todo lo que necesitas ya está en tu cocina
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};