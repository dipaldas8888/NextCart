import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import Hero from "../assets/img/hero_img.png";
import banner from "../assets/img/banner3.jpg";

export default function HomePage() {
  const [womenProducts, setWomenProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const womenRes = await api.get("/product/get-by-category-id/2");
        setWomenProducts(womenRes.data.productList || []);

        const menRes = await api.get("/product/get-by-category-id/1");
        setMenProducts(menRes.data.productList || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row border border-gray-400 mb-10">
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">
                OUR BESTSELLERS
              </p>
            </div>

            <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
              Latest Arrivals
            </h1>

            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
              <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>
          </div>
        </div>

        <img
          className="w-full sm:w-1/2 h-auto object-cover"
          src={Hero}
          alt="Latest Arrivals Banner"
        />
      </div>

      <h2 className="text-2xl font-bold my-6">Women Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {womenProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link to={`/products/${product.id}`}>
              <div className="aspect-[4/5] w-full overflow-hidden bg-gray-50">
                <img
                  src={product.imageUrl}
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

      <section className="my-12">
        <img
          src={banner}
          alt="Promotional Banner"
          className="w-full h-auto object-contain bg-gray-100 rounded-lg shadow-md"
        />
      </section>

      <h2 className="text-2xl font-bold my-6">Men Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link to={`/products/${product.id}`}>
              <div className="aspect-[4/5] w-full overflow-hidden bg-gray-50">
                <img
                  src={product.imageUrl}
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
}
