import React from "react";
import CartItem from "./CartItem";
import { cartItems } from "../data.products";
import { ArrowLeft } from "lucide-react";

const Cart = () => {
  return (
    <div className="col-span-2 bg-white rounded-lg shadow">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onRemove={() => console.log("Remove")}
          onSaveLater={() => console.log("Save for later")}
        />
      ))}
      <div className="p-4 flex justify-between items-center">
        {/* Back to Shop Button */}
        <button className="flex items-center space-x-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-blue-600 transition">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Shop</span>
        </button>

        {/* Remove All Button */}
        <button className="border border-gray-400 text-blue-500 font-semibold px-4 py-2 rounded-md text-sm cursor-pointer bg-white hover:bg-gray-100 transition">
          Remove all
        </button>
      </div>
    </div>
  );
};

export default Cart;
