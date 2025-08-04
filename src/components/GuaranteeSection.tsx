import { Card } from "@/components/ui/card";
import { Shield, Zap, Handshake, Lock, Mail } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="relative p-8 md:p-12 bg-gradient-secondary border-2 border-accent/20 shadow-elegant overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 -translate-x-16" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/10 rounded-full translate-y-20 translate-x-20" />
            
            <div className="relative z-10 text-center space-y-8">
              {/* Badge and Title */}
              <div className="space-y-6">
                
                <h2 className="text-3xl md:text-4xl font-bold font-display">
                  <Shield className="w-16 h-16 mx-auto mb-4" style={{color: '#d4145a'}} />
                  Garantía total de 
                  <span style={{color: '#d4145a'}}> 7 días</span>
                </h2>
              </div>

              {/* Guarantee Text */}
              <div className="space-y-6 max-w-2xl mx-auto">
                <p className="text-xl leading-relaxed text-foreground">
                  Si no ves resultados, o simplemente no es para ti, 
                  <span className="font-semibold text-primary"> solicita tu reembolso completo</span>.
                </p>
                
                <p className="text-lg text-muted-foreground">
                  Protegido por ley. Sin preguntas incómodas. 
                  Sin letra pequeña. Tu satisfacción es nuestra prioridad.
                </p>
              </div>

              {/* Guarantee Features */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <Zap className="w-12 h-12 mx-auto" style={{color: '#d4145a'}} />
                  <div className="font-semibold">Reembolso Rápido</div>
                  <div className="text-sm text-muted-foreground">
                    Procesamos tu solicitud en menos de 24 horas
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Handshake className="w-12 h-12 mx-auto" style={{color: '#d4145a'}} />
                  <div className="font-semibold">Sin Preguntas</div>
                  <div className="text-sm text-muted-foreground">
                    Solo necesitas decir "quiero mi reembolso"
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Lock className="w-12 h-12 mx-auto" style={{color: '#d4145a'}} />
                  <div className="font-semibold">100% Seguro</div>
                  <div className="text-sm text-muted-foreground">
                    Protegido por plataforma de pagos segura
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5" style={{color: '#d4145a'}} />
                  ¿Necesitas ayuda?
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Envía un email a: <span className="text-foreground font-semibold">soporte@academiadesalud.shop</span></p>
                  <p>• O escríbenos por WhatsApp: 
                    <a 
                      href="https://wa.me/5524981493204" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground font-semibold hover:text-primary ml-1"
                    >
                      +55 24 98149-3204
                    </a>
                  </p>
                  <p>• Respuesta garantizada en menos de 24 horas</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};