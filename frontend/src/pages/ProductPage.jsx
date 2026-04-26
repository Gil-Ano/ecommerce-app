import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  if (!product)
    return <div className="text-center mt-20">Product not found</div>;

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((item) => item._id === product._id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-4">{product.category}</p>
          <p className="text-2xl font-bold mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-sm text-gray-500 mb-6">
            Stock: {product.stock} units
          </p>
          <button
            onClick={addToCart}
            className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700 w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
