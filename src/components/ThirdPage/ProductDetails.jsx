import React from "react";
import { Star, MessageSquare, ShoppingBasket } from "lucide-react";

function ProductDetails() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="inline-block px-2 py-1 text-green-600 text-sm bg-green-50 rounded-full mb-2">
            ✓ In stock
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={
                i < 4 ? "fill-orange-400 text-orange-400" : "text-orange-300"
              }
            />
          ))}
        </div>
        <span className="text-orange-400">9.3</span>
        <span className="text-gray-300">•</span>
        <span className="flex items-center gap-1 text-gray-500">
          <MessageSquare className="w-4 h-4 text-gray-400" />
          32 reviews
        </span>
        <span className="text-gray-300">•</span>
        <span className="flex items-center gap-1 text-gray-500">
          <ShoppingBasket className="w-4 h-4 text-gray-400" />
          154 sold
        </span>
      </div>

      <div className="flex bg-orange-100 p-4 rounded-lg text-sm mr-2">
        <div className="flex-1 border-r border-gray-300 px-4">
          <div className="text-red-600 font-bold text-lg">$98.00</div>
          <div className="text-gray-500">50-100 pcs</div>
        </div>
        <div className="flex-1 border-r border-gray-300 px-4 text-center">
          <div className="text-black font-bold text-lg">$90.00</div>
          <div className="text-gray-500">100-700 pcs</div>
        </div>
        <div className="flex-1 px-4 text-center">
          <div className="text-black font-bold text-lg">$78.00</div>
          <div className="text-gray-500">700+ pcs</div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex border-b border-gray-300 pb-2">
          <span className="w-32 text-gray-500">Price:</span>
          <span>Negotiable</span>
        </div>
        <div className="flex">
          <span className="w-32 text-gray-500">Type:</span>
          <span>Classic shoes</span>
        </div>
        <div className="flex">
          <span className="w-32 text-gray-500">Material:</span>
          <span>Plastic material</span>
        </div>
        <div className="flex border-b border-gray-300 pb-2">
          <span className="w-32 text-gray-500 ">Design:</span>
          <span>Modern nice</span>
        </div>
        <div className="flex">
          <span className="w-42  text-gray-500">Customization:</span>
          <span>Customized logo and design custom packages</span>
        </div>
        <div className="flex">
          <span className="w-32 text-gray-500">Protection:</span>
          <span>Refund Policy</span>
        </div>
        <div className="flex">
          <span className="w-32 text-gray-500">Warranty:</span>
          <span>2 years full warranty</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
