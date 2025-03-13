import React from "react";
import { Search, Palette, Plane, Shield } from "lucide-react";

const services = [
  {
    img: "/src/assets/Image/extraa/services1.png",
    title: "Source from Industry Hubs",
    Icon: Search
  },
  {
    img: "/src/assets/Image/extraa/services2.png",
    title: "Customize Your Products",
    Icon: Palette
  },
  {
    img: "/src/assets/Image/extraa/services3.png",
    title: "Fast, reliable shipping by ocean or air",
    Icon: Plane
  },
  {
    img: "/src/assets/Image/extraa/services4.png",
    title: "Product monitoring and inspection",
    Icon: Shield
  }
];

const suppliers = [
  { country: "Arabic Emirates", code: "AE", domain: "shopname.ae" },
  { country: "Australia", code: "AU", domain: "shopname.ae" },
  { country: "United States", code: "US", domain: "shopname.ae" },
  { country: "Russia", code: "RU", domain: "shopname.ru" },
  { country: "Italy", code: "IT", domain: "shopname.it" },
  { country: "Denmark", code: "DK", domain: "denmark.com.dk" },
  { country: "France", code: "FR", domain: "shopname.com.fr" },
  { country: "China", code: "CN", domain: "shopname.ae" },
  { country: "Great Britain", code: "GB", domain: "shopname.co.uk" },
  { country: "Pakistan", code: "PK", domain: "shopname.pk" }
];

const Services = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our extra services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {services.map((service, index) => (
          <div key={index} className="group bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative w-full">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-opacity-50 mix-blend-multiply"></div>
              <div className="absolute -bottom-6 right-4 bg-white p-3 rounded-lg shadow-lg">
                <service.Icon className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="p-4 pt-8">
              <h3 className="text-base font-medium text-gray-900 leading-tight">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Suppliers by region</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4">
        {suppliers.map((supplier, index) => (
          <div key={index} className="flex items-center gap-3">
            <img
              src={`https://flagcdn.com/48x36/${supplier.code.toLowerCase()}.png`}
              alt={`${supplier.country} flag`}
              className="w-8 h-6 object-contain rounded-sm"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">{supplier.country}</p>
              <p className="text-xs text-gray-500">{supplier.domain}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;