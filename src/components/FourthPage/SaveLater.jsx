import React from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  { id: 1, image: "src/assets/Image/tech/1.png", name: "Iphone 12", price: "$99.50" },
  { id: 2, image: "src/assets/Image/tech/3.png", name: "Samsung S24 Ultra", price: "$99.50" },
  { id: 3, image: "src/assets/Image/tech/4.png", name: "Gaming Headphones", price: "$99.50" },
  { id: 4, image: "src/assets/Image/tech/6.png", name: "Xiaomi Redmi Tablet", price: "$99.50" },
];

function SaveLater() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Saved for later</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-300 rounded-lg p-4 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 object-contain rounded-lg mb-2"
            />
            <p className="text-lg font-bold text-gray-900">{product.price}</p>
            <p className="text-sm text-gray-500 leading-tight">{product.name}</p>

            <button className="mt-3 flex items-center gap-2 text-blue-600 border border-gray-300 px-4 py-2 rounded-lg hover:bg-blue-100 transition w-fit">
              <ShoppingCart size={16} className="text-blue-600" />
              <span className="text-sm font-medium">Move to cart</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SaveLater;
