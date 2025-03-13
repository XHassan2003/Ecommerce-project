export default function Sidebar() {
  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipment",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
  ];

  return (
    // Sidebar (will provide functionality later)
    <div className="bg-white rounded-lg shadow p-4 ">
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category}
            className="flex items-center space-x-2 py-2 px-3 cursor-pointer hover:bg-gray-50"
          >
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
