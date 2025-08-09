import React, { useState, useEffect } from "react";
import api from "../api/api"; // Adjust path to your Axios instance
import ProductCard from "../components/ProductCard"; // Adjusted path assuming Products is in src/pages
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, []);

  if (loading) return <p className="text-center py-8">Loading products...</p>;
  if (error) return <p className="text-center py-8 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">All products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-20">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            src={`http://localhost:8080${product.imageUrl}`} // Full image URL
            price={product.price}
            name={product.name}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
