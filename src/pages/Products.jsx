import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("Men");
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const [page, setPage] = useState(1);
  const perPage = 8;

  const fetchByCategory = async (cat) => {
    try {
      setLoading(true);
      let res;
      if (cat === "Men") {
        res = await api.get("/product/get-by-category-id/1");
      } else if (cat === "Women") {
        res = await api.get("/product/get-by-category-id/2");
      } else {
        res = await api.get("/product/get-all");
      }
      const list = res.data?.productList ?? res.data ?? [];
      setProducts(list);
    } catch (err) {
      console.error("Error fetching by category:", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchByCategory(category);
    setPage(1);
  }, [category]);

  const filtered = products.filter((p) => {
    const name = (p.name ?? p.title ?? "").toString().toLowerCase();
    const matchesSearch =
      search.trim() === "" || name.includes(search.toLowerCase());

    const price = Number(p.price ?? p.mrp ?? 0);

    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];

    return matchesSearch && matchesPrice;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const resetFilters = () => {
    setSearch("");
    setPriceRange([0, 5000]);
    setCategory("Men");
    setPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mb-10">
      <div className="flex gap-8">
        <aside className="hidden md:block w-72 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-5 sticky top-24">
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-3">Category</h3>
              <div className="space-y-2 text-sm">
                {["Men", "Women", "All"].map((cat) => (
                  <label key={cat} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={category === cat}
                      onChange={(e) => {
                        setCategory(e.target.value);
                        setPage(1);
                      }}
                      className="h-4 w-4"
                    />
                    <span className="capitalize">{cat}</span>
                  </label>
                ))}
              </div>
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
                onChange={(e) => {
                  const max = Number(e.target.value);
                  setPriceRange([priceRange[0], max]);
                  setPage(1);
                }}
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
        </aside>

        <main className="flex-1">
          <div className="flex items-center justify-between mb-4 mt-2">
            <h2 className="text-2xl font-bold">
              {category === "All" ? "All Products" : `${category} Products`}
            </h2>

            <div className="text-sm text-gray-600">
              {filtered.length} results
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-[300px]">
              Loading...
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex items-center justify-center h-[300px] text-gray-600">
              No products found
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginated.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="group relative block overflow-hidden rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <button
                      type="button"
                      className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Add to wishlist:", product.id);
                      }}
                    >
                      <span className="sr-only">Wishlist</span>
                      {/* svg ... */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>

                    <img
                      src={
                        product.imageUrl ??
                        product.image ??
                        product.thumbnail ??
                        ""
                      }
                      alt={product.name ?? product.title}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                    />

                    <div className="relative border border-gray-100 bg-white p-6">
                      <span className="bg-yellow-400 px-3 py-1.5 text-xs font-medium whitespace-nowrap">
                        New
                      </span>

                      <h3 className="mt-4 text-lg font-medium text-gray-900 truncate">
                        {product.name ?? product.title}
                      </h3>

                      <p className="mt-1.5 text-sm text-gray-700">
                        ${product.price ?? product.mrp ?? 0}
                      </p>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="block w-full rounded-sm bg-yellow-400 p-3 text-sm font-medium transition hover:scale-105"
                          onClick={(e) => {
                            e.preventDefault();
                            console.log("Add to cart:", product.id);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <PaginationControls
                  page={page}
                  totalPages={totalPages}
                  onChange={(p) => {
                    setPage(p);
                    window.scrollTo(0, 0);
                  }}
                />
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

function PaginationControls({ page, totalPages, onChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        className="px-3 py-1 rounded border"
        disabled={page === 1}
      >
        Prev
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`px-3 py-1 rounded ${
            p === page ? "bg-red-600 text-white" : "border"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        className="px-3 py-1 rounded border"
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}
