import React from "react";

export default function ProductGrid({
  title1,
  title2,
  products1 = [],
  products2 = [],
}) {
  return (
    <div className="mt-8 space-y-8">
      {/* Home and Outdoor Grid */}
      <div className="bg-white shadow border border-gray-200 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-9">
          <div
            className="col-span-2 relative flex flex-col justify-start p-6 border-r border-gray-200 overflow-hidden"
            style={{
              backgroundImage: `url('/src/assets/Image/tech/homebanner.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "right center",
              height: "400px",
              width: "100%",
            }}
          >
            <div className="relative z-10">
              <h2 className="text-xl font-medium text-black mb-2">
                {title1 || "Home and Outdoor"}
              </h2>
              <button className="bg-white text-black text-sm px-4 py-1.5 rounded-md shadow-sm hover:bg-gray-100 transition">
                Source now
              </button>
            </div>
          </div>
          <div className="col-span-7 grid grid-cols-2 md:grid-cols-4 border-l border-gray-200">
            {products1.slice(0, 8).map((product) => (
              <div
                key={product?.id}
                className="flex flex-col items-center justify-between p-4 border-r border-b border-gray-200 hover:bg-gray-100 transition"
              >
                <img
                  src={product?.image || "placeholder.jpg"}
                  alt={product?.name || "No name"}
                  className="w-24 h-24 object-cover mb-2"
                />
                <h3 className="text-gray-800 text-sm font-medium">
                  {product?.name || "Unnamed Product"}
                </h3>
                <p className="text-gray-500 text-xs">From</p>
                <p className="text-blue-600 font-semibold text-sm">
                  USD {product?.price || "N/A"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gadgets Grid */}
      <div className="bg-white shadow border border-gray-200 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-9">
          <div
            className="col-span-2 relative flex flex-col justify-start p-6 border-r border-gray-200 overflow-hidden"
            style={{
              backgroundImage: `url('/src/assets/Image/tech/gadgetbanner.png')`,
              backgroundSize: "cover",
              backgroundPosition: "right center",
              height: "400px",
              width: "100%",
            }}
          >
            <div className="relative z-10">
              <h2 className="text-xl font-medium text-black mb-2">
                {title2 || "Consumer Electronics & Gadgets"}
              </h2>
              <button className="bg-white text-black text-sm px-4 py-1.5 rounded-md shadow-sm hover:bg-gray-100 transition">
                Source now
              </button>
            </div>
          </div>
          <div className="col-span-7 grid grid-cols-2 md:grid-cols-4 border-l border-gray-200">
            {products2.slice(0, 8).map((product) => (
              <div
                key={product?.id}
                className="flex flex-col items-center justify-between p-4 border-r border-b border-gray-200 hover:bg-gray-100 transition"
              >
                <img
                  src={product?.image || "placeholder.jpg"}
                  alt={product?.name || "No name"}
                  className="w-24 h-24 object-cover mb-2"
                />
                <h3 className="text-gray-800 text-sm font-medium">
                  {product?.name || "Unnamed Product"}
                </h3>
                <p className="text-gray-500 text-xs">From</p>
                <p className="text-blue-600 font-semibold text-sm">
                  USD {product?.price || "N/A"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
