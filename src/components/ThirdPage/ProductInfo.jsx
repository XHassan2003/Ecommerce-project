import React, { useState } from "react";

const ProductInfo = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "reviews", label: "Reviews" },
    { id: "shipping", label: "Shipping" },
    { id: "about", label: "About seller" },
  ];

  const specifications = [
    { label: "Model", value: "#8786867" },
    { label: "Style", value: "Classic style" },
    { label: "Certificate", value: "ISO-898921212" },
    { label: "Size", value: "34mm x 450mm x 19mm" },
    { label: "Memory", value: "36GB RAM" },
  ];

  const features = [
    "Some great feature name here",
    "Lorem ipsum dolor sit amet, consectetur",
    "Duis aute irure dolor in reprehenderit",
    "Some great feature name here",
  ];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-4 text-sm font-medium border-b-2 -mb-px ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {activeTab === "description" && (
          <div className="space-y-6">
            {/* Description Text */}
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,
            </p>
            <p className="text-gray-600">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            {/* Table */}
            <div className="mt-6">
              <table className="w-150 border border-gray-300">
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr key={index} className="border border-gray-300">
                      <td className="py-2 px-4 text-sm text-gray-600 bg-gray-100 border-r border-gray-300">
                        {spec.label}
                      </td>
                      <td className="py-2 px-4 text-sm text-gray-900 bg-white">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Feature List */}
            <div className="mt-6 space-y-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <span className="text-gray-500">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
