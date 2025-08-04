import { useState, useEffect } from "react";
import { Clock, Users } from "lucide-react";
import { useCoupons } from "@/hooks/useCoupons";

export const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 15,
    seconds: 0
  });
  
  const couponsLeft = useCoupons();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-primary text-white py-3 px-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 animate-pulse" />
          <span className="font-semibold">¡OFERTA TERMINA EN:</span>
          <div className="flex gap-1 text-lg font-bold">
            <span className="bg-white/20 px-2 py-1 rounded">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span>:</span>
            <span className="bg-white/20 px-2 py-1 rounded">{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          <span className="font-semibold">SOLO QUEDAN</span>
          <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full font-bold">
            {couponsLeft} CUPONES
          </span>
        </div>
      </div>
    </div>
  );
};