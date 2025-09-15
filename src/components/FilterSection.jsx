import React from "react";

export default function FilterSection({
  search,
  setSearch,
  category,
  setCategory,
  priceRange,
  setPriceRange,
  resetFilters,
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5 sticky top-24">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
      />

      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-3">Category</h3>
        {["All", "Men", "Women"].map((cat) => (
          <label key={cat} className="flex items-center gap-2 mb-2">
            <input
              type="radio"
              value={cat}
              checked={category === cat}
              onChange={(e) => setCategory(e.target.value)}
            />
            {cat}
          </label>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-3">Price Range</h3>
        <p className="text-sm text-gray-600">
          ${priceRange[0]} - ${priceRange[1]}
        </p>
        <input
          type="range"
          min={0}
          max={5000}
          step={10}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="w-full mt-3"
        />
      </div>

      <button
        onClick={resetFilters}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md w-full"
      >
        Reset Filters
      </button>
    </div>
  );
}
