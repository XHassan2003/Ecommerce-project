import React from "react";
import { SocialIcon } from "react-social-icons";
import { ShoppingBagIcon } from "lucide-react";

const Footer = ({ showNewsletter = true }) => {
  return (
    <footer className="text-gray-900">
      {showNewsletter && (
        <div className="bg-gray-200 w-full px-4 py-8 text-center">
          <h2 className="text-lg font-semibold">Subscribe to our newsletter</h2>
          <p className="text-gray-500 text-sm">
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Email"
              className="w-64 p-2 bg-white border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md text-sm hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="bg-gray-100 border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-6 gap-8">
          <div className="space-y-3 col-span-1">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-500 text-white p-2 rounded-md flex items-center justify-center">
                <ShoppingBagIcon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-blue-500">Brand</h2>
            </div>
            <p className="text-gray-500 text-sm">
              Best information about the company goes here.
            </p>
            <div className="flex space-x-3">
              <SocialIcon network="facebook" className="!w-6 !h-6" />
              <SocialIcon network="twitter" className="!w-6 !h-6" />
              <SocialIcon network="linkedin" className="!w-6 !h-6" />
              <SocialIcon network="instagram" className="!w-6 !h-6" />
              <SocialIcon network="youtube" className="!w-6 !h-6" />
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-gray-900 font-medium">About</h3>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>About Us</li>
              <li>Find Store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-medium">Information</h3>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>Help Center</li>
              <li>Money Refund</li>
              <li>Shipping</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-medium">For Users</h3>
            <ul className="text-gray-500 text-sm space-y-2">
              <li>Login</li>
              <li>Register</li>
              <li>Settings</li>
              <li>My Orders</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-medium">Get App</h3>
            <div className="space-y-2">
              <img
                src="/src/assets/Image/extraa/appstore.png"
                alt="App Store"
                className="w-28"
              />
              <img
                src="src/assets/Image/extraa/playstore.png"
                alt="Google Play"
                className="w-28"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200 w-full border-t border-gray-300 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-500 px-4">
          <p>© 2023 Ecommerce.</p>
          <div className="flex items-center space-x-2">
            <img
              src="https://flagcdn.com/w40/us.png"
              alt="US Flag"
              className="w-5 h-5"
            />
            <p>English</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
