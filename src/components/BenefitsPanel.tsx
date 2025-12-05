
import { Mail, User, Gift, Tag, Heart, Clock } from "lucide-react";

export default function BenefitsPanel() {
  const benefits = [
    { icon: <Mail className="w-6 h-6 text-blue-600" />, title: "Subscribe to your favorite products" },
    { icon: <User className="w-6 h-6 text-blue-600" />, title: "View and manage your orders and wishlist" },
    { icon: <Gift className="w-6 h-6 text-blue-600" />, title: "Earn rewards for future purchases" },
    { icon: <Tag className="w-6 h-6 text-blue-600" />, title: "Receive exclusive offers and discounts" },
    { icon: <Heart className="w-6 h-6 text-blue-600" />, title: "Create multiple wishlists" },
    { icon: <Clock className="w-6 h-6 text-blue-600" />, title: "Pay for purchases by installments" },
  ];

  return (
    <div className="relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-600 p-8"></div>

      <div className="relative p-8 lg:p-12">
        <h2 className="text-lg font-semibold text-white mb-6">Cartzilla account benefits</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white/30 backdrop-blur-md rounded-md p-4 shadow-sm"
            >
              <div className="p-2 rounded-full bg-white text-blue-600 border border-blue-200">
                {b.icon}
              </div>

              <p className="text-sm text-white font-medium">{b.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}