
import { Mail, User, Gift, Tag, Heart, Clock } from "lucide-react";

export default function BenefitsPanel() {
  const benefits = [
    { icon: Mail, title: "Subscribe to your favorite products" },
    { icon: User, title: "View and manage your orders and wishlist" },
    { icon: Gift, title: "Earn rewards for future purchases" },
    { icon: Tag, title: "Receive exclusive offers and discounts" },
    { icon: Heart, title: "Create multiple wishlists" },
    { icon: Clock, title: "Pay for purchases by installments" },
  ];

  return (
    <div className="relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-600 p-8"></div>

      <div className="relative p-8 lg:p-12">
        <h2 className="text-lg font-semibold text-white mb-6">Cartzilla account benefits</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-white/40 backdrop-blur-md rounded-md p-6 shadow-sm text-center"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-blue-600 border border-blue-300 shadow">
                  <Icon className="w-7 h-7" />
                </div>
                <p className="text-sm text-black font-medium mt-3">{b.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}