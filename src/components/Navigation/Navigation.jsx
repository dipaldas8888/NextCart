import React from "react";

function Navigation() {
  return (
    <nav className="relative flex items-center py-6 px-8 justify-between">
      {/* Left: Logo */}
      <div>
        <h2 className="text-2xl font-bold">NextCart</h2>
      </div>

      {/* Center: Links */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-8">
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

      {/* Right: Optional */}
      <div>{/* You can put a cart icon or user avatar here */}</div>
    </nav>
  );
}

export default Navigation;
