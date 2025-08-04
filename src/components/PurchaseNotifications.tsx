import { useState, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

interface Notification {
  id: string;
  name: string;
  city: string;
  timeAgo: string;
}

const notifications: Notification[] = [
  { id: "1", name: "María José", city: "México, MX", timeAgo: "hace 2 minutos" },
  { id: "2", name: "Ana Carolina", city: "Bogotá, Colombia", timeAgo: "hace 5 minutos" },
  { id: "3", name: "Fernanda Silva", city: "Lima, Perú", timeAgo: "hace 8 minutos" },
  { id: "4", name: "Juliana Santos", city: "Buenos Aires, Argentina", timeAgo: "hace 12 minutos" },
  { id: "5", name: "Carla Oliveira", city: "Santiago, Chile", timeAgo: "hace 15 minutos" },
  { id: "6", name: "Patricia López", city: "Caracas, Venezuela", timeAgo: "hace 18 minutos" },
  { id: "7", name: "Roberta Costa", city: "Quito, Ecuador", timeAgo: "hace 22 minutos" },
  { id: "8", name: "Luciana Rocha", city: "Guatemala, Guatemala", timeAgo: "hace 25 minutos" },
  { id: "9", name: "Isabella Torres", city: "San José, Costa Rica", timeAgo: "hace 28 minutos" },
  { id: "10", name: "Camila Mendoza", city: "Montevideo, Uruguay", timeAgo: "hace 32 minutos" }
];

export const PurchaseNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      setCurrentNotification(randomNotification);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 5 seconds
    const initialTimer = setTimeout(showNotification, 5000);

    // Then show every 10 seconds
    const interval = setInterval(showNotification, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!currentNotification || !isVisible) return null;

  return (
    <div 
      className="fixed bottom-20 left-4 z-40 bg-white border-l-4 border-success shadow-lg rounded-lg p-4 max-w-sm transform transition-all duration-300 ease-in-out"
      style={{ 
        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
        opacity: isVisible ? 1 : 0
      }}
    >
      <div className="flex items-start gap-3">
        <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-gray-900">
            ¡Compra realizada!
          </div>
          <div className="text-sm text-gray-600 mt-1">
            <span className="font-medium">{currentNotification.name}</span> de{" "}
            <span className="font-medium">{currentNotification.city}</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {currentNotification.timeAgo}
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 flex-shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};