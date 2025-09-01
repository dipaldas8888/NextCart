import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Example pages
import Login from "./pages/Login"; // Example pages
import Register from "./pages/Register"; // Example pages
import Navigation from "./components/Navigation/Navigation";
import Products from "./pages/Products"; // Import the Products page
import "./App.css";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage"; // Import the CartPage
import ProductDetail from "./pages/ProductDetail"; // Import the ProductDetail page
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Navigation />
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
