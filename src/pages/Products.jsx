// import React, { useState, useEffect } from "react";
// import api from "../api/api"; // Adjust path to your Axios instance
// import ProductCard from "../components/ProductCard"; // Adjusted path assuming Products is in src/pages
// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await api.get("/product/get-all");
//         setProducts(response.data.productList || []);
//       } catch (err) {
//         setError("Failed to load products.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center py-8">Loading products...</p>;
//   if (error) return <p className="text-center py-8 text-red-500">{error}</p>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-6">All products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-30">
//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             src={`http://localhost:8080${product.imageUrl}`}
//             price={product.price}
//             name={product.name}
//             description={product.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
// // src/pages/Products.jsx
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

import { useCart } from "../context/CartContext"; // ✅ Correct

import { useAuth } from "../context/AuthContext";

const Products = () => {
  const { loading: authLoading } = useAuth(); // ✅ get auth loading
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (authLoading) return; // ⛔ wait until auth is ready

    const fetchProducts = async () => {
      try {
        const response = await api.get("/product/get-all");
        setProducts(response.data.productList || []);
      } catch (err) {
        setError("Failed to load products.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [authLoading]); // ✅ run only after auth is ready

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <Link to={`/products/${product.id}`}>
              <img
                src={`http://localhost:8080${product.imageUrl}`}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {product.description}
              </p>
            </Link>

            <div className="grid grid-cols-2 gap-2 mt-3">
              <button
                className="bg-slate-100 text-slate-600 py-2 rounded"
                onClick={() => addToCart(product)} // ✅ Add to cart
              >
                Add to Cart
              </button>
              <Link to={`/products/${product.id}`}>
                <button className="bg-slate-800 text-white py-2 rounded w-full">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
