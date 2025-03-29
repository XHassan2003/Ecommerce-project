import React from "react";
import { ChevronDownIcon } from "lucide-react"; // Importing the chevron icon

const CartItem = ({ 
  image, title, price, size, color, material, seller, 
  quantity = 1, onQuantityChange, onRemove, onSaveLater 
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
      {/* Left Side - Image and Product Details */}
      <div className="flex items-center space-x-4">
        <img src={image} alt={title} className="w-22 h-23 object-cover border border-gray-300 p-2 rounded-md " />
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">
            Size: {size}, Color: {color}, Material: {material}
          </p>
          <p className="text-sm text-gray-500">Seller: {seller}</p>
          <div className="flex space-x-4 mt-2">
            <button 
              onClick={onRemove} 
              className="text-red-500 font-semibold text-sm border border-gray-300 px-3 py-1 rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              Remove
            </button>
            <button 
              onClick={onSaveLater} 
              className="text-blue-500 font-semibold text-sm border border-gray-300 px-3 py-1 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              Save for later
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Price on Top, Quantity Below with Chevron */}
      <div className="flex flex-col items-center space-y-1">
        {/* Price (Above) */}
        <span className="font-medium text-gray-900 ml-auto">
          ${parseFloat(price).toFixed(2)}
        </span>

        {/* Quantity Dropdown with Chevron */}
        <div className="relative w-28">
          <select 
            value={quantity} 
            onChange={(e) => onQuantityChange(Number(e.target.value))} // Ensure value is number
            className="appearance-none bg-white border border-gray-300 text-gray-700 py-1 pl-3 pr-8 rounded-md leading-tight focus:outline-none focus:border-gray-400 w-full"
          >
            {[...Array(10)].map((_, index) => (
              <option key={index} value={index + 1}>Qty: {index + 1}</option>
            ))}
          </select>
          {/* Chevron Icon */}
          <ChevronDownIcon className="absolute right-3 top-2.5 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
