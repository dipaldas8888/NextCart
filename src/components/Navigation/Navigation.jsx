import React, { useState } from "react";
import { Menu, X, Search, ShoppingCart, Heart, User } from "lucide-react";

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center py-4 px-6 justify-between border-b">
      <div>
        <h2 className="text-2xl font-bold">NextCart</h2>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8">
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Shop
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Men
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Women
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Kids
        </a>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        <a href="/cart" className="text-gray-600 hover:text-gray-800">
          <ShoppingCart size={24} />
        </a>
        <a href="/wishlist" className="text-gray-600 hover:text-gray-800">
          <Heart size={24} />
        </a>
        <a href="/account" className="text-gray-600 hover:text-gray-800">
          <User size={24} />
        </a>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-10">
          <div className="flex flex-col items-center py-4 gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Shop
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Men
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Women
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Kids
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
