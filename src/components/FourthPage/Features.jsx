import React from 'react';
import { Lock, MessageCircle, Truck } from 'lucide-react';

const features = [
  { icon: <Lock size={20} />, title: 'Secure payment', description: 'Safe and reliable transactions' },
  { icon: <MessageCircle size={20} />, title: 'Customer support', description: '24/7 assistance available' },
  { icon: <Truck size={20} />, title: 'Free delivery', description: 'Fast and free shipping' }
];

const Features = () => {
  return (
    <div className="flex justify-between mt-8 space-x-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div className="p-2 bg-gray-200 rounded-full">{feature.icon}</div>
          <div>
            <h3 className="font-medium text-gray-800">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
