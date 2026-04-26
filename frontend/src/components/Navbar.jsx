import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    toast.success("Logged out");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-white">
        ShopMERN
      </Link>
      <div className="flex gap-6 items-center">
        <Link to="/cart" className="hover:text-yellow-400">
          Cart{" "}
          {cartCount > 0 && (
            <span className="bg-yellow-400 text-black rounded-full px-2 py-0.5 text-xs ml-1">
              {cartCount}
            </span>
          )}
        </Link>
        {user ? (
          <>
            <span className="text-gray-300">Hi, {user.name}</span>
            {user.isAdmin && (
              <Link to="/admin" className="hover:text-yellow-400">
                Admin
              </Link>
            )}
            <Link to="/orders" className="hover:text-yellow-400">
              Orders
            </Link>
            <button onClick={logout} className="hover:text-yellow-400">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-yellow-400">
              Login
            </Link>
            <Link to="/register" className="hover:text-yellow-400">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
