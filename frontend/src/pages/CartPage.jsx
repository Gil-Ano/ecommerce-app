import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function CartPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);

  const updateQty = (id, qty) => {
    const updated = cart.map((item) =>
      item._id === id ? { ...item, qty: Number(qty) } : item,
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item._id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0)
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link to="/" className="text-blue-600">
          Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.map((item) => (
        <div key={item._id} className="flex items-center gap-4 border-b py-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded"
          />
          <div className="flex-1">
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-gray-500">${item.price}</p>
          </div>
          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) => updateQty(item._id, e.target.value)}
            className="border rounded w-16 px-2 py-1 text-center"
          />
          <p className="font-bold w-20 text-right">${item.price * item.qty}</p>
          <button
            onClick={() => removeItem(item._id)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="flex justify-between items-center mt-6">
        <p className="text-xl font-bold">Total: ${total}</p>
        <button
          onClick={() => navigate("/checkout")}
          className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
