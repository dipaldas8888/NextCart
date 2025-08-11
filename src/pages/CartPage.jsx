import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CartPage = () => {
  const { cartItems, removeFromCart, placeOrder, getTotalPrice } = useCart();

  useEffect(() => {
    console.log("Cart items updated:", cartItems);
  }, [cartItems]);

  if (cartItems.length === 0)
    return <p className="text-center py-8">Cart is empty.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map((item) => (
          <div key={item.productId} className="flex items-center border p-4">
            <img
              src={`http://localhost:8080${item.imageUrl}`}
              alt={item.name}
              className="w-24 h-24 object-contain"
            />
            <div className="ml-4 flex-1">
              <p className="font-medium">{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.productId)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <p className="text-xl">Total: ${getTotalPrice().toFixed(2)}</p>
        <button
          onClick={placeOrder}
          className="bg-green-500 text-white px-6 py-2 mt-4"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartPage;
