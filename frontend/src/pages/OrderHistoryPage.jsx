import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetch("https://novamart-backend-9nk4.onrender.com/api/orders/myorders", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, []);

  if (orders.length === 0)
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold mb-4">No orders yet</h1>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      {orders.map((order) => (
        <div key={order._id} className="border rounded-lg p-4 mb-4">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Order #{order._id.slice(-6)}</span>
            <span
              className={`px-2 py-1 rounded text-sm ${order.isPaid ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
            >
              {order.isPaid ? "Paid" : "Pending"}
            </span>
          </div>
          {order.items.map((item) => (
            <div
              key={item._id}
              className="flex justify-between text-sm text-gray-600 py-1"
            >
              <span>
                {item.name} x {item.qty}
              </span>
              <span>${item.price * item.qty}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold mt-2 pt-2 border-t">
            <span>Total</span>
            <span>${order.total}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderHistoryPage;
