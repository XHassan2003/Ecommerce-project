import React from "react";
import {
  UserIcon,
  MessageSquareIcon,
  HeartIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
} from "lucide-react";

const categories = ["Electronics", "Fashion", "Home", "Books", "Toys"];

export default function Navbar() {
  return (
    //  Navbar
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-500 text-white p-2 rounded-md flex items-center justify-center">
            <ShoppingBagIcon className="h-5 w-5" />
          </div>
          <h1 className="text-2xl font-bold text-blue-500">Brand</h1>
        </div>
        {/* search bar */}
        <div className="flex border border-blue-500 rounded-md overflow-hidden w-[600px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 outline-none"
          />
          <select className="border-l px-3 text-gray-600 bg-white">
            <option>All category</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <button className="w-36  py-1 text-white font-medium bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all rounded">
            Search
          </button>
        </div>

        {/* all the icons on navbar */}
        <div className="flex items-center space-x-8 text-gray-500">
          <div className="flex flex-col items-center cursor-pointer">
            <UserIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Profile</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <MessageSquareIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Message</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <HeartIcon className="h-6 w-6" />
            <span className="text-xs mt-1">Orders</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="text-xs mt-1">My cart</span>
          </div>
        </div>
      </div>
    </header>
  );
}
