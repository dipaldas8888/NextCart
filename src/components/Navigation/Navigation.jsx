import React, { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Menu, X, ShoppingCart, User, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useCart();
  const isLoggedIn = !!user;

  const userMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/products" },
    { label: "About Us", to: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <ShoppingBag className="text-indigo-600" size={28} />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            NextCart
          </h2>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link
            to="/cart"
            className="relative text-gray-600 hover:text-indigo-600 transition"
          >
            <ShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setUserMenuOpen((prev) => !prev)}
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              <User size={24} />
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg w-40 z-20 py-2">
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      logout();
                      setUserMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-gray-600 hover:text-indigo-600 transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col py-4 gap-4 px-6">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-gray-600 hover:text-indigo-600 font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
