import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  Heart,
  User,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);
  const isLoggedIn = !!user;

  return (
    <nav className="relative flex items-center py-4 px-6 lg:px-8 justify-between border-b bg-white shadow-sm">
      <Link
        to="/"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <ShoppingBag className="text-indigo-600" size={28} />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          NextCart
        </h2>
      </Link>
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8">
        <Link
          to="/products"
          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
        >
          Shop
        </Link>
        <Link
          to="#"
          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
        >
          Men
        </Link>
        <Link
          to="#"
          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
        >
          Women
        </Link>
        <Link
          to="#"
          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
        >
          Kids
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 border rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 w-64"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        <Link
          to="/cart"
          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 relative group"
        >
          <ShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center group-hover:bg-indigo-700 transition-colors">
            0
          </span>
        </Link>
        <Link
          to="/wishlist"
          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
        >
          <Heart size={24} />
        </Link>

        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
          >
            <User size={24} />
          </button>
          {userMenuOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg w-48 z-20 py-1 transform opacity-100 scale-100 transition-all duration-200">
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
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
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

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-600 hover:text-indigo-600 transition-colors duration-200"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-10 transform transition-transform duration-200 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col py-4 gap-4 px-6">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>

          <Link
            to="#"
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            Shop
          </Link>
          <Link
            to="#"
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
          >
            Kids
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
