import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    placeOrder,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <p className="text-center py-8 text-gray-600">Your cart is empty.</p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-9 bg-white p-4 rounded shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

        {cartItems.map((item) => (
          <div
            key={item.productId}
            className="flex py-4 border-b last:border-none"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-28 h-28 object-contain"
            />

            <div className="flex-1 ml-4">
              <p className="font-medium text-lg leading-snug">{item.name}</p>
              <p className="text-green-600 text-sm mt-1">In stock</p>
              <p className="text-xs text-gray-600">
                Eligible for FREE Shipping
              </p>

              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center border rounded-full px-2 py-1">
                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="mr-2 text-gray-600 hover:text-red-600"
                  >
                    🗑
                  </button>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.productId, parseInt(e.target.value))
                    }
                    className="border-none focus:ring-0 text-sm"
                  >
                    {[...Array(10).keys()].map((n) => (
                      <option key={n + 1} value={n + 1}>
                        {n + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="text-right font-semibold text-lg text-gray-900">
              ₹{(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="lg:col-span-3 bg-white p-4 rounded shadow-sm h-fit">
        <p className="text-lg font-medium">
          Subtotal ({cartItems.length} item
          {cartItems.length > 1 ? "s" : ""}):{" "}
          <span className="font-semibold text-red-600">
            ₹{getTotalPrice().toFixed(2)}
          </span>
        </p>
        <button
          onClick={placeOrder}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded shadow"
        >
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

export default CartPage;
