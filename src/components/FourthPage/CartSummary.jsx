import React from "react";

const CouponInput = () => {
  return (
    <div className="bg-white p-7 rounded-lg shadow mb-4">
      <h3 className="text-gray-700 text-sm font-medium mb-2">Have a coupon?</h3>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full">
      <input
  type="text"
  placeholder="Add coupon"
  className="flex-grow px-3 py-2 text-gray-700 border border-gray-200 outline-none"
/>
        <button className="bg-white border border-gray-300 text-blue-500 font-medium px-4 py-2 cursor-pointer">
          Apply
        </button>
      </div>
    </div>
  );
};

const TotalPriceSummary = ({ subtotal, discount, tax, total }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow">
      {/* Pricing Details */}
      <div className="space-y-2 text-gray-700 text-sm">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Discount:</span>
          <span>- ${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Tax:</span>
          <span>+ ${tax.toFixed(2)}</span>
        </div>
      </div>

      {/* Total Price */}
      <div className="flex justify-between text-lg font-bold pt-3 border-t border-gray-300 mt-3">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-green-600 text-white font-medium py-3 rounded-lg mt-4 cursor-pointer">
        Checkout
      </button>

      {/* Payment Methods */}
      <div className="flex justify-center gap-4 mt-4">
  <img src="src/assets/Image/extraa/googlepay.png" className="h-8 w-auto" />
  <img src="src/assets/Image/extraa/mastercard.png" className="h-7 w-auto" />
  <img src="src/assets/Image/extraa/paypal.png" alt="PayPal" className="h-8 w-auto" />
  <img src="src/assets/Image/extraa/Visa.png" alt="Visa" className="h-8 w-auto" />
  <img src="src/assets/Image/extraa/applepay.png" alt="Apple Pay" className="h-8 w-auto" />
</div>

    </div>
  );
};

// Main Cart Summary Component
const CartSummary = ({ subtotal, discount, tax, total }) => {
  return (
    <div className="max-w-sm mx-auto">
      <CouponInput />
      <TotalPriceSummary subtotal={subtotal} discount={discount} tax={tax} total={total} />
    </div>
  );
};

export default CartSummary;
