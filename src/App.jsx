import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Example pages
import Login from "./pages/Login"; // Example pages
import Register from "./pages/Register"; // Example pages
import Navigation from "./components/Navigation/Navigation";
import Products from "./pages/Products"; // Import the Products page
import "./App.css";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
