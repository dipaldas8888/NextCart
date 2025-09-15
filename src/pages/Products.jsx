// Products.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";

export default function Products() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("Men");
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 2500]);

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
    setPriceRange([0, 2500]);
    setCategory("Men");
    setPage(1);
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast.success("Added to cart");
  };

  const handleWishlist = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Add to wishlist:", product.id);
    toast.success("Added to wishlist");
  };

  return (
    <div className="max-w-8xl mx-auto px-4 mb-10">
      <div className="flex gap-6">
        <aside className="hidden md:block w-56 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-5 sticky top-24">
            <div className="relative">
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search..."
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none"
              />
            </div>

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

            {/* Price */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-3">Price Range</h3>
              <p className="text-sm text-gray-600">
                ${priceRange[0]} - ${priceRange[1]}
              </p>

              <input
                type="range"
                min={0}
                max={2500}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="animate-pulse bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="h-64 bg-gray-200"></div>
                  <div className="p-4 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-8 bg-gray-200 rounded mt-4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex items-center justify-center h-[300px] text-gray-600">
              No products found
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {paginated.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="group relative block overflow-hidden rounded-lg shadow-sm hover:shadow-md transition bg-white"
                  >
                    <button
                      type="button"
                      className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                      onClick={(e) => handleWishlist(e, product)}
                    >
                      <span className="sr-only">Wishlist</span>
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

                    {/* Image */}
                    <div className="h-64 w-full overflow-hidden bg-gray-50 flex items-center justify-center">
                      <img
                        src={
                          product.imageUrl ??
                          product.image ??
                          product.thumbnail ??
                          ""
                        }
                        alt={product.name ?? product.title}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6 border-t border-gray-100">
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
                          onClick={(e) =>
                            handleAddToCart(e, {
                              id: product.id,
                              name: product.name ?? product.title,
                              price: Number(product.price ?? product.mrp ?? 0),
                              imageUrl:
                                product.imageUrl ??
                                product.image ??
                                product.thumbnail ??
                                "",
                            })
                          }
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
