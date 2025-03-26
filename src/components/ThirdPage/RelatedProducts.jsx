import React from "react";

const products = [
  { id: 1, image: "src/assets/Image/tech/1.png", name: "Iphone 12 ", price: "$32.00-$40.00" },
  { id: 2, image: "src/assets/Image/tech/3.png", name: "Samsung S24 Ultra", price: "$32.00-$40.00" },
  { id: 3, image: "src/assets/Image/tech/5.png", name: "Gaming Headphones", price: "$32.00-$40.00" },
  { id: 4, image: "src/assets/Image/tech/2.png", name: "Xiaomi Redmi Tablet", price: "$32.00-$40.00" },
  { id: 5, image: "src/assets/Image/tech/8.png", name: "Apple Smartwatch", price: "$32.00-$40.00" },
  { id: 6, image: "src/assets/Image/tech/9.png", name: "Airpods Max", price: "$32.00-$40.00" },
];

const RelatedProducts = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Related products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-100 rounded-lg p-4 text-center shadow-sm">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-36 object-contain bg-white rounded-lg mb-3"
            />
            <p className="text-sm text-gray-800 font-medium">{product.name}</p>
            <p className="text-sm text-gray-500 font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
