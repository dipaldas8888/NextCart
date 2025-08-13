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
import Hero from "../assets/img/hero_img.png";

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
        console.log("[PRODUCTS FETCHED]", response.data.productList);
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
      <div className="flex flex-col sm:flex-row border">
        {/* Left Text Section */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-[#414141]">
            {/* Bestseller Tag */}
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">
                OUR BESTSELLERS
              </p>
            </div>

            {/* Heading */}
            <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
              Latest Arrivals
            </h1>

            {/* Shop Now Link */}
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
              <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <img className="w-full sm:w-1/2" src={Hero} alt="Hero Banner" />
      </div>
      <h2 className="text-2xl font-bold mb-6 py-5">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link to={`/products/${product.id}`}>
              {/* Image container with fixed aspect ratio */}
              <div className="aspect-[4/5] w-full overflow-hidden bg-gray-50">
                <img
                  src={`http://localhost:8080${product.imageUrl}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold truncate">
                  {product.name}
                </h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
