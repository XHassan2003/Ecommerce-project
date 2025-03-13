import React from "react";

const RecommendedProducts = ({ products }) => {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-xl font-semibold mb-4">Recommended items</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg p-4 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-3" />
            <p className="text-gray-900 font-semibold mr-auto">${product.price}</p>
            <p className="text-gray-600 text-md mr-auto font-light">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
