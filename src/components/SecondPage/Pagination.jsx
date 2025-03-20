import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const Pagination = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <div className="flex items-center justify-end space-x-4  p-2">
      {/* Items Per Page Dropdown */}
      <div className="relative  flex items-center border border-gray-300 rounded-md px-2 py-1.5 bg-white text-gray-700 text-sm">
        Show {itemsPerPage}
        <ChevronDown className="h-4 w-4 ml-5 text-gray-500" />
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
        <button className="px-3 py-1  text-gray-500 hover:bg-gray-100">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button className="px-3 py-1 bg-white text-gray-700 hover:bg-gray-200 border  border-gray-300">1</button>
        <button className="px-3 py-1 bg-white text-gray-700 hover:bg-gray-200 border border-gray-300">2</button>
        <button className="px-3 py-1 bg-white text-gray-700 hover:bg-gray-200 border border-gray-300">3</button>
        <button className="px-3 py-1  text-gray-500 hover:bg-gray-200">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
