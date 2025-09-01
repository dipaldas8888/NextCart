import React, { createContext, useState, useContext, useEffect } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    console.log("Adding to cart:", product, "Quantity:", quantity);
    const existingItem = cartItems.find(
      (item) => item.productId === product.id
    );
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity,
          imageUrl: product.imageUrl,
        },
      ]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.productId !== productId));
  };
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return; // prevent 0 or negative quantities
    setCartItems(
      cartItems.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const placeOrder = async () => {
    if (cartItems.length === 0) return;

    const orderRequest = {
      items: cartItems.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
      totalPrice: getTotalPrice(),
    };

    try {
      const res = await api.post("/order/create", orderRequest);
      console.log("Order response:", res.data);
      toast.success("Order placed successfully!");
      setCartItems([]);
      navigate("/");
    } catch (err) {
      console.error("Order failed:", err);
      toast.error("Failed to place order.");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        placeOrder,
        getTotalPrice,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
