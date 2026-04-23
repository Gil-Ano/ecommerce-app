import { useState } from "react";

function AdminPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const generateDescription = async () => {
    if (!name || !category) {
      alert("Enter product name and category first");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        "http://localhost:5000/api/products/generate-description",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, category }),
        },
      );
      const data = await res.json();
      setDescription(data.description);
    } catch (err) {
      alert("Failed to generate description");
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, price, category, image, description }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Product added successfully");
        setName("");
        setPrice("");
        setCategory("");
        setImage("");
        setDescription("");
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Failed to add product");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin — Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded px-4 py-2"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border rounded px-4 py-2"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded px-4 py-2"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border rounded px-4 py-2"
          required
        />
        <div className="flex flex-col gap-2">
          <textarea
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded px-4 py-2 h-28"
            required
          />
          <button
            type="button"
            onClick={generateDescription}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
          >
            {loading ? "Generating..." : "Generate Description with AI"}
          </button>
        </div>
        <button
          type="submit"
          className="bg-gray-900 text-white py-3 rounded hover:bg-gray-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AdminPage;
