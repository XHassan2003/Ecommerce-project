import { MenuIcon, ChevronDownIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function CategoryMenu() {
  const categories = [
    { name: "Hot offers", path: "/products" }, // Add path for navigation
    { name: "Gift boxes" },
    { name: "Projects" },
    { name: "Menu item" },
    { name: "Help", dropdown: true },
  ];

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 flex items-center justify-between py-2">
        <ul className="flex items-center space-x-6 text-black text-sm">
          <li className="flex items-center space-x-2 cursor-pointer font-medium">
            <MenuIcon className="h-5 w-5" />
            <span>All category</span>
          </li>
          {categories.map((category) => (
            <li key={category.name} className="flex items-center space-x-1 font-medium">
              {category.path ? (
                <Link to={category.path} className="cursor-pointer">
                  {category.name}
                </Link>
              ) : (
                <span className="cursor-pointer">{category.name}</span>
              )}
              {category.dropdown && <ChevronDownIcon className="h-4 w-4" />}
            </li>
          ))}
        </ul>
        <ul className="flex items-center space-x-6 text-gray-700 text-sm">
          <li className="flex items-center space-x-1 cursor-pointer font-medium">
            <span>English, USD</span>
            <ChevronDownIcon className="h-4 w-4" />
          </li>
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
