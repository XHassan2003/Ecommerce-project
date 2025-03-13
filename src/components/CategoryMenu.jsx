import { MenuIcon, ChevronDownIcon } from "lucide-react";

export default function CategoryMenu() {
  const categories = [
    { name: "Hot offers" },
    { name: "Gift boxes" },
    { name: "Projects" },
    { name: "Menu item" },
    { name: "Help", dropdown: true },
  ];

  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4 flex items-center justify-between py-2">
        {/* Left Side */}
        <ul className="flex items-center space-x-6 text-gray-700 text-sm">
          <li className="flex items-center space-x-2 cursor-pointer font-medium">
            <MenuIcon className="h-5 w-5" />
            <span>All category</span>
          </li>
          {categories.map((category) => (
            <li key={category.name} className="flex items-center space-x-1 cursor-pointer font-medium">
              <span>{category.name}</span>
              {category.dropdown && <ChevronDownIcon className="h-4 w-4" />}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <ul className="flex items-center space-x-6 text-gray-700 text-sm">
          {/* Language Selector */}
          <li className="flex items-center space-x-1 cursor-pointer font-medium">
            <span>English, USD</span>
            <ChevronDownIcon className="h-4 w-4" />
          </li>

          {/* Shipping Selector */}
          <li className="flex items-center space-x-1 cursor-pointer font-medium">
            <span>Ship to</span>
            <img src="https://flagcdn.com/w40/de.png" alt="Germany Flag" className="h-4 w-6" />
            <ChevronDownIcon className="h-4 w-4" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
