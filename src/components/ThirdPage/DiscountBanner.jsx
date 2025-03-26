import React from "react";

const DiscountBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white rounded-lg flex justify-between items-center mt-8">
      <div>
        <h2 className="text-lg font-semibold">Super discount on more than 100 USD</h2>
        <p className="text-sm text-gray-200">Have you ever finally just write dummy info</p>
      </div>
      <button className="bg-orange-400 text-white px-4 py-2 rounded-md text-sm cursor-pointer">
        Shop now
      </button>
    </div>
  );
};

export default DiscountBanner;
