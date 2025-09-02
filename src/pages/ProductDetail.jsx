import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import api from "../api/api";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/product/get-by-product-id/${id}`);
        const data = res.data;
        setProduct(data.product);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="p-4 text-center">Loading product...</div>;
  if (error) return <div className="p-4 text-red-500 text-center">{error}</div>;
  if (!product) return <div className="p-4 text-center">No product found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4 flex flex-col items-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-[400px] object-cover rounded-lg border"
        />
        <div className="flex gap-3 mt-4">
          {[1, 2, 3].map((i) => (
            <img
              key={i}
              src={product.imageUrl}
              alt="thumb"
              className="w-16 h-16 object-cover rounded-lg border hover:border-blue-500 cursor-pointer"
            />
          ))}
        </div>
      </div>

      <div className="lg:col-span-5">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <div className="flex items-center gap-2 mt-2 text-yellow-500">
          ⭐⭐⭐⭐☆
          <span className="text-sm text-gray-600">(837 ratings)</span>
        </div>
        <div className="mt-4 text-3xl font-bold text-red-600">
          ₹{product.price}
        </div>
        <p className="mt-4 text-gray-700">{product.description}</p>

        <div className="mt-6 space-y-2">
          <div className="p-3 border rounded-lg">
            <strong>Bank Offer:</strong> Up to ₹1,000 off on select cards
          </div>
          <div className="p-3 border rounded-lg">
            <strong>EMI:</strong> Starts at ₹118/month
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 p-4 border rounded-lg shadow-sm">
        <div className="text-2xl font-semibold text-red-600">
          ₹{product.price}
        </div>
        <p className="text-green-600 mt-1">Available to ship in 1-2 days</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
