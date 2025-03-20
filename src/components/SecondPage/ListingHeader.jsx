import React, { useState } from 'react';
import ViewToggle from './ViewToogle';
import { Check, ChevronDown } from 'lucide-react';

const ListingHeader = ({ isGridView, onViewToggle }) => {
  // State to track if 'Verified only' is checked
  const [isVerified, setIsVerified] = useState(false);

  // Toggle function
  const handleCheckboxToggle = () => {
    setIsVerified((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center px-4 py-1 bg-white shadow-sm">
      {/* Left Section */}
      <h1 className="text-lg font-semibold">
        <span className='font-medium'>12,911</span> items in <span className='font-bold'>Mobile accessory</span>
      </h1>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Verified Checkbox */}
        <label className="flex items-center space-x-1 cursor-pointer" onClick={handleCheckboxToggle}>
          <input 
            type="checkbox" 
            checked={isVerified} 
            onChange={handleCheckboxToggle} 
            className="hidden"
          />
          <div className={`w-5 h-5 flex items-center justify-center border rounded-lg cursor-pointer mr-2 
            ${isVerified ? 'bg-black border-blue-500' : 'border-gray-400'}`}>
            {isVerified && <Check size={16} className="text-white" />}
          </div>
          <span className="text-sm">Verified only</span>
        </label>

        {/* Sort Dropdown */}
        <div className="relative">
          <select className="appearance-none border border-gray-400 rounded px-3 py-1 text-sm pr-6">
            <option>Featured</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <ChevronDown size={14} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Grid/List Toggle */}
        <ViewToggle isGridView={isGridView} onToggle={onViewToggle} />
      </div>
    </div>
  );
};

export default ListingHeader;
