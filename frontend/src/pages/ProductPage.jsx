import { useParams, useNavigate } from "react-router-dom";

const products = [
  {
    _id: "1",
    name: "Nike Air Max",
    price: 120,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    description:
      "Premium running shoes with air cushioning for maximum comfort.",
  },
  {
    _id: "2",
    name: "Leather Jacket",
    price: 250,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    description: "Classic genuine leather jacket, perfect for any occasion.",
  },
  {
    _id: "3",
    name: "Apple Watch",
    price: 399,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Smart watch with health tracking and notifications.",
  },
  {
    _id: "4",
    name: "Sunglasses",
    price: 89,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    description: "UV400 polarized sunglasses for all weather conditions.",
  },
  {
    _id: "5",
    name: "Backpack",
    price: 75,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    description: "Durable 30L backpack with laptop compartment.",
  },
  {
    _id: "6",
    name: "Wireless Headphones",
    price: 199,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "Noise cancelling wireless headphones with 30hr battery.",
  },
];

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p._id === id);

  if (!product) return <div>Product not found</div>;

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
