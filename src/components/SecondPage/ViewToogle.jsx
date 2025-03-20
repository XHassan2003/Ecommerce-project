import React from 'react';
import { LayoutGrid, Menu } from 'lucide-react';

const ViewToggle = ({ isGridView, onToggle }) => {
  return (
    <div className="flex space-x-2">
      <button
        className={`p-2 rounded ${isGridView ? 'bg-black text-white' : 'bg-gray-200'}`}
        onClick={() => onToggle(true)}
      >
        <LayoutGrid className="h-5 w-5" />
      </button>
      <button
        className={`p-2 rounded ${!isGridView ? 'bg-black text-white' : 'bg-gray-200'}`}
        onClick={() => onToggle(false)}
      >
        <Menu className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ViewToggle;