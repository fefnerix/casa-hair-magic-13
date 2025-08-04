import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="cta"
        size="lg"
        className="rounded-full shadow-elegant animate-bounce-soft text-white"
        onClick={() => window.open('https://wa.me/5524981493204', '_blank')}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};