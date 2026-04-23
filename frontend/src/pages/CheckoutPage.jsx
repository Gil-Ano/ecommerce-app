import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleOrder = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to place an order");
      navigate("/login");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          items: cart,
          shippingAddress: { address, city, country },
          total,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.removeItem("cart");
        navigate("/orders");
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Order failed");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Order Summary</h2>
        {cart.map((item) => (
          <div key={item._id} className="flex justify-between py-2 border-b">
            <span>
              {item.name} x {item.qty}
            </span>
            <span>${item.price * item.qty}</span>
          </div>
        ))}
        <div className="flex justify-between py-3 font-bold text-lg">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
      <form onSubmit={handleOrder} className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Shipping Address</h2>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border rounded px-4 py-2"
          required
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border rounded px-4 py-2"
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border rounded px-4 py-2"
          required
        />
        <button
          type="submit"
          className="bg-gray-900 text-white py-3 rounded hover:bg-gray-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
