import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  return (
    <div className="text-sm flex items-center gap-2 text-gray-500 mb-3">
      <a href="#" className="hover:text-gray-700">Home</a>
      <ChevronRight size={16} />
      <a href="#" className="hover:text-gray-700">Clothings</a>
      <ChevronRight size={16} />
      <a href="#" className="hover:text-gray-700">Men's wear</a>
      <ChevronRight size={16} />
      <a href='#' className="hover:text-gray-700">Summer clothing</a>
    </div>
  );
};

export default Breadcrumb