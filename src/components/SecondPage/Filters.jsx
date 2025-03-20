import React, { useState } from "react";
import { ChevronDown, Star } from "lucide-react";

const Filters = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(999999);
  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <div className="w-full p-4 space-y-6">
      {/* Category */}
      <hr className="border-gray-300" />
      <div className="pl-3">
        <div className="flex justify-between items-center cursor-pointer ">
          <h3 className="text-sm font-bold">Category</h3>
          <ChevronDown size={16} />
        </div>
        <div className="mt-2 space-y-2 text-sm text-gray-700">
          <p>Mobile accessory</p>
          <p>Electronics</p>
          <p>Smartphones</p>
          <p>Modern tech</p>
          <p className="text-blue-500 cursor-pointer">See all</p>
        </div>
      </div>

      {/* Brands */}
      <hr className="border-gray-300" />
      <div className="pl-3">
        <div className="flex justify-between items-center cursor-pointer ">
          <h3 className="text-sm font-bold">Brands</h3>
          <ChevronDown size={16} />
        </div>
        <div className="mt-2 space-y-2 text-sm">
          {["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"].map((brand) => (
            <label key={brand} className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>{brand}</span>
            </label>
          ))}
          <p className="text-blue-500 cursor-pointer">See all</p>
        </div>
      </div>

      {/* Features */}
      <hr className="border-gray-300" />
      <div className=" pl-3">
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-sm font-bold">Features</h3>
          <ChevronDown size={16} />
        </div>
        <div className="mt-2 space-y-2 text-sm">
          {[
            "Metallic",
            "Plastic cover",
            "8GB Ram",
            "Super power",
            "Large Memory",
          ].map((feature) => (
            <label key={feature} className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>{feature}</span>
            </label>
          ))}
          <p className="text-blue-500 cursor-pointer">See all</p>
        </div>
      </div>

      {/* Price Range */}
      <hr className="border-gray-300" />
      <div className="pl-3">
        <h3 className="text-sm font-bold mb-2">Price range</h3>
        <input
          type="range"
          min="0"
          max="999999"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          className="w-52 mt-2"
        />
        <input
          type="range"
          min="0"
          max="999999"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          className="w-52 mb-3"
        />
        <div className="flex justify-between text-xs text-gray-600 mb-1 w-47">
          <span className="w-20 text-left">Min</span>
          <span className="w-20 text-left">Max</span>
        </div>
        <div className="flex items-center space-x-2 w-44">
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            placeholder="0"
            className="bg-white w-25 px-2 py-1 border rounded text-sm text-gray-300 focus:text-black"
          />
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            placeholder="999999"
            className="bg-white w-25 px-2 py-1 border rounded text-sm text-gray-300 focus:text-black"
          />
        </div>
        <button className="mt-2 w-52 bg-white text-blue-500 px-4 py-2 rounded text-sm font-bold cursor-pointer">
          Apply
        </button>
      </div>

      {/* Condition */}
      <hr className="border-gray-300" />
<div className="pl-3">
  <div className="flex justify-between items-center cursor-pointer">
    <h3 className="text-sm font-bold">Condition</h3>
    <ChevronDown size={16} />
  </div>
  <div className="mt-2 space-y-2 text-sm">
    {["Any", "Refurbished", "Brand new", "Old items"].map((condition) => (
      <label key={condition} className="flex items-center space-x-2">
        <input type="radio" name="condition" className="form-radio" />
        <span>{condition}</span>
      </label>
    ))}
  </div>
</div>

      {/* Ratings */}
      <hr className="border-gray-300" />
<div className="pl-3">
  <div className="flex justify-between items-center cursor-pointer">
    <h3 className="text-sm font-bold">Ratings</h3>
    <ChevronDown size={16} />
  </div>
  <div className="mt-2 space-y-2">
    {[5, 4, 3, 2].map((stars) => (
      <label key={stars} className="flex items-center space-x-2 cursor-pointer">
        <input 
          type="radio" 
          name="rating" 
          value={stars} 
          checked={selectedRating === stars} 
          onChange={() => setSelectedRating(stars)} 
          className="accent-orange-400" 
        />
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              fill={i < stars ? "orange" : "none"} 
              stroke={i < stars ? "orange" : "gray"} 
            />
          ))}
        </div>
      </label>
    ))}
  </div>
</div>
    </div>
  );
};

export default Filters;
