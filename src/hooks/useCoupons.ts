import { useState, useEffect } from 'react';

// Hook compartilhado para gerenciar cupons globalmente
export const useCoupons = () => {
  const [couponsLeft, setCouponsLeft] = useState(17);

  useEffect(() => {
    // Diminui cupons a cada notificação de compra (a cada 10 segundos)
    const couponTimer = setInterval(() => {
      if (Math.random() < 0.5 && couponsLeft > 3) { // 50% chance de diminuir
        setCouponsLeft(prev => Math.max(3, prev - 1));
      }
    }, 10000); // A cada 10 segundos

    return () => clearInterval(couponTimer);
  }, [couponsLeft]);

  return couponsLeft;
};