import React from "react";

export default function ProductGrid({
  title1,
  title2,
  products1 = [],
  products2 = [],
}) {
  return (
    <div className="mt-8 space-y-8">
      {/* First Grid */}
      <div className="bg-white rounded-lg shadow border">
        <div className="grid grid-cols-1 md:grid-cols-9">
          {/* First Banner */}
          <div
            className="col-span-2 relative flex flex-col justify-start p-6 border-r overflow-hidden"
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
              <button className="bg-white text-black text-sm px-4 py-1.5 rounded-md shadow-sm hover:bg-gray-50 transition-colors">
                Source now
              </button>
            </div>
          </div>

          {/* First Product Grid */}
          <div className="col-span-7 grid grid-cols-2 md:grid-cols-4 border-l">
            {products1.slice(0, 8).map((product) => (
              <div
                key={product?.id}
                className="flex flex-col items-center justify-between p-4 border-r border-b hover:bg-gray-50 transition"
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

      {/* Second Grid */}
      <div className="bg-white rounded-lg shadow border">
        <div className="grid grid-cols-1 md:grid-cols-9">
          {/* Second Banner */}
          <div
            className="col-span-2 relative flex flex-col justify-start p-6 border-r overflow-hidden"
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
              <button className="bg-white text-black text-sm px-4 py-1.5 rounded-md shadow-sm hover:bg-gray-50 transition-colors">
                Source now
              </button>
            </div>
          </div>

          {/* Second Product Grid */}
          <div className="col-span-7 grid grid-cols-2 md:grid-cols-4 border-l">
            {products2.slice(0, 8).map((product) => (
              <div
                key={product?.id}
                className="flex flex-col items-center justify-between p-4 border-r border-b hover:bg-gray-50 transition"
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
