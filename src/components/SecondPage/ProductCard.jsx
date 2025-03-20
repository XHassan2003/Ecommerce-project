import React from "react";
import { Heart } from "lucide-react";

const ProductCard = ({
  image,
  title,
  price,
  originalPrice,
  rating,
  reviews,
  isGridView,
}) => {
  if (isGridView) {
    return (
      <div className="bg-white border border-gray-200 p-4">
<div className="relative">
  <img
    src={image}
    alt={title}
    className="w-full h-45 object-contain rounded-md"
  />
</div>
        {/* Grey Line Separator */}
        <div className="border-t border-gray-300 w-full mt-3"></div>

        <div className="mt-4">
          {/* Price & Heart Icon in One Row */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-bold text-gray-900">
                ${price}
                {originalPrice && (
                  <span className="text-gray-500 line-through text-sm ml-2">
                    ${originalPrice}
                  </span>
                )}
              </p>
            </div>
            <button className="p-1.5 bg-white rounded-md border border-gray-300">
              <Heart className="h-5 w-5 text-blue-600" />
            </button>
          </div>

          {/* Rating Stars & Score */}
          <div className="flex items-center mt-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={i < rating ? "text-yellow-400" : "text-gray-300"}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="ml-2 text-sm text-orange-500 font-medium">
              {rating.toFixed(1)}
            </span>
          </div>

          {/* Product Title */}
          <p className="text-sm text-gray-500 mt-1">{title}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white  p-4 flex border border-gray-200 h-50">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-32 h-40 object-cover rounded-md"
      />

      {/* Product Details */}
      <div className="ml-4 flex-1">
        {/* Title & Heart Icon */}
        <div className="flex justify-between items-start">
          <h3 className="text-[15px] font-semibold text-gray-900">{title}</h3>
          <button className="p-1.5 bg-white rounded-md border border-gray-300">
            <Heart className="h-5 w-5 text-blue-600" />
          </button>
        </div>

        {/* Price & Discounted Price */}
        <p className="text-[18px] font-bold text-gray-900 mt-1">
          ${price}{" "}
          {originalPrice && (
            <span className="text-gray-500 line-through text-sm ml-2">
              ${originalPrice}
            </span>
          )}
        </p>

        {/* Rating & Reviews */}
        <div className="flex items-center mt-1">
          <div className="flex items-center space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < rating ? "text-yellow-400" : "text-gray-300"}
              >
                ★
              </span>
            ))}
          </div>
          <span className="ml-2 text-[14px] text-orange-500 font-medium">
            {rating}
          </span>
          <span className="ml-2 text-sm text-gray-500">{reviews} orders</span>
          <span className="ml-2 text-sm text-green-500 font-semibold">
            • Free Shipping
          </span>
        </div>

        {/* Product Description */}
        <p className="mt-2 text-[13px] text-gray-600 leading-tight">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>

        {/* View Details Link */}
        <a
          href="#"
          className="text-blue-500 text-sm font-medium mt-2 inline-block"
        >
          View details
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
