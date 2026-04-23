import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-white">
        ShopMERN
      </Link>
      <div className="flex gap-6">
        <Link to="/cart" className="hover:text-yellow-400">
          Cart
        </Link>
        <Link to="/login" className="hover:text-yellow-400">
          Login
        </Link>
        <Link to="/register" className="hover:text-yellow-400">
          Register
        </Link>
        <Link to="/admin" className="hover:text-yellow-400">
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
