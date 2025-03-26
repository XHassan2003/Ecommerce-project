import React from 'react';
import { Shield, Globe, Heart } from 'lucide-react';

const SupplierInfo = () => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 space-y-4 w-72">
      {/* Supplier Info */}
      <div className="flex items-center gap-3">
        <div className="bg-cyan-200 text-cyan-400 font-bold text-xl w-10 h-10 flex items-center justify-center rounded-md">
          R
        </div>
        <div>
          <h2 className="text-gray-700 font-semibold">Supplier</h2>
          <p className="text-gray-600">Guanjoi Trading LLC</p>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Location */}
      <div className="flex items-center gap-2 text-gray-400">
        <img 
          src="https://flagcdn.com/w20/de.png" 
          alt="German flag" 
          className="w-5 h-3"
        />
        <span>Germany, Berlin</span>
      </div>

      {/* Verified Seller */}
      <div className="flex items-center gap-2 text-gray-400">
        <Shield size={16} />
        <span>Verified Seller</span>
      </div>

      {/* Worldwide Shipping */}
      <div className="flex items-center gap-2 text-gray-400">
        <Globe size={16} />
        <span>Worldwide shipping</span>
      </div>

      {/* Buttons */}
      <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">
        Send inquiry
      </button>

      <button className="w-full border border-gray-300 text-blue-500 py-2 rounded-md font-semibold bg-white hover:bg-gray-200 transition">
        Seller’s profile
      </button>

      {/* Save for Later */}
      <div className="flex justify-center items-center text-blue-500 font-semibold gap-2 cursor-pointer">
        <Heart size={18} />
        <span>Save for later</span>
      </div>
    </div>
  );
};

export default SupplierInfo;
