import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Example pages
import Login from "./pages/Login"; // Example pages
import Register from "./pages/Register"; // Example pages
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
