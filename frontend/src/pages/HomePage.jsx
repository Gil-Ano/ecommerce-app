import { Link } from "react-router-dom";

const products = [
  {
    _id: "1",
    name: "Nike Air Max",
    price: 120,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  },
  {
    _id: "2",
    name: "Leather Jacket",
    price: 250,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
  },
  {
    _id: "3",
    name: "Apple Watch",
    price: 399,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  },
  {
    _id: "4",
    name: "Sunglasses",
    price: 89,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
  },
  {
    _id: "5",
    name: "Backpack",
    price: 75,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
  },
  {
    _id: "6",
    name: "Wireless Headphones",
    price: 199,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  },
];

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link to={`/product/${product._id}`} key={product._id}>
            <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-xl font-bold mt-2">${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
