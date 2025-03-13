import React from "react";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-4 gap-6 h-[400px]">
      <div className="col-span-3 relative rounded-lg overflow-hidden h-full flex items-center p-10 bg-white">
        {/* image of hero section */}
        <img
          src="/herobanner.png"
          alt="Electronics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-black">
          <h2 className="text-xl font-medium">Latest trending</h2>
          <h3 className="text-3xl font-bold mb-4">Electronic items</h3>
          <button className="bg-white text-black px-6 py-2 rounded-md shadow hover:bg-gray-100">
            Learn more
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full space-y-4">
        {/* user sign up area */}
        <div className="bg-blue-100 rounded-lg p-4 shadow-sm flex-grow">
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/Image/icons/Avatar.png"
              alt="User"
              className="w-10 h-10 rounded-full mb-2"
            />
            <p className="text-sm">Hi, user</p>
            <p className="text-sm mb-2">Let's get started</p>
            <button className="w-full bg-blue-500 text-white rounded py-1 text-sm mb-1">
              Join now
            </button>
            <button className="bg-white w-full border border-white text-blue-500 rounded py-1 text-sm font-bold">
              Log in
            </button>
          </div>
        </div>

        {/* 2 cards below the user card */}
        <div className="text-white bg-orange-400 rounded-lg p-4">
          <p className="font-medium">Get US $10 off</p>
          <p className="text-lg">with a new supplier</p>
        </div>

        <div className="text-white bg-cyan-600 rounded-lg p-4">
          <p className="font-medium">Send quotes with</p>
          <p className="text-sm">supplier preferences</p>
        </div>
      </div>
    </div>
  );
}
