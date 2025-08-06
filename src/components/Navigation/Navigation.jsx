import React, { useState } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  Heart,
  User,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for proper SPA routing

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Dummy authentication flag (replace with actual auth state)
  const isLoggedIn = false;

  return (
    <nav className="relative flex items-center py-4 px-6 justify-between border-b">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <ShoppingBag className="text-gray-800" size={28} />
        <h2 className="text-2xl font-bold">NextCart</h2>
      </div>

      {/* Center Links */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8">
        <Link to="#" className="text-gray-600 hover:text-gray-800">
          Shop
        </Link>
        <Link to="#" className="text-gray-600 hover:text-gray-800">
          Men
        </Link>
        <Link to="#" className="text-gray-600 hover:text-gray-800">
          Women
        </Link>
        <Link to="#" className="text-gray-600 hover:text-gray-800">
          Kids
        </Link>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {/* Icons */}
        <Link to="/cart" className="text-gray-600 hover:text-gray-800">
          <ShoppingCart size={24} />
        </Link>
        <Link to="/wishlist" className="text-gray-600 hover:text-gray-800">
          <Heart size={24} />
        </Link>

        {/* User Menu */}
        <div className="relative">
          <button onClick={() => setUserMenuOpen(!userMenuOpen)}>
            <User className="text-gray-600 hover:text-gray-800" size={24} />
          </button>
          {userMenuOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg w-40 z-20">
              {isLoggedIn ? (
                <>
                  <Link
                    to="/account"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    My Account
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    My Orders
                  </Link>
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-10">
          <div className="flex flex-col items-center py-4 gap-4">
            <Link to="#" className="text-gray-600 hover:text-gray-800">
              Shop
            </Link>
            <Link to="#" className="text-gray-600 hover:text-gray-800">
              Men
            </Link>
            <Link to="#" className="text-gray-600 hover:text-gray-800">
              Women
            </Link>
            <Link to="#" className="text-gray-600 hover:text-gray-800">
              Kids
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
