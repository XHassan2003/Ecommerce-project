import React from "react";

const ExampleProducts = () => {
  const products = [
    {
      id: 1,
      name: "Men Blazers Sets Elegant Formal",
      image: "src/assets/Image/products/7.png",
      priceRange: "$7.00 - $99.50",
    },
    {
      id: 2,
      name: "Men Shirt Sleeve Polo Contrast",
      image: "src/assets/Image/products/1.png",
      priceRange: "$7.00 - $99.50",
    },
    {
      id: 3,
      name: "Apple Watch Series Space Gray",
      image: "src/assets/Image/products/3.png",
      priceRange: "$7.00 - $99.50",
    },
    {
      id: 4,
      name: "Basketball Crew Socks Long Stuff",
      image: "src/assets/Image/products/2.png",
      priceRange: "$7.00 - $99.50",
    },
    {
      id: 5,
      name: "New Summer Men's castrol T-Shirts",
      image: "src/assets/Image/products/4.png",
      priceRange: "$7.00 - $99.50",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-72">
      <h2 className="text-lg font-semibold mb-4 text-gray-900">You may like</h2>
      <div className="space-y-3">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition duration-200">
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.priceRange}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExampleProducts;
