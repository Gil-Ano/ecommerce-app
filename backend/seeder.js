require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  {
    name: "Nike Air Max",
    price: 120,
    category: "Shoes",
    stock: 50,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    description:
      "Premium running shoes with air cushioning for maximum comfort and performance.",
  },
  {
    name: "Adidas Ultraboost",
    price: 150,
    category: "Shoes",
    stock: 40,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400",
    description:
      "High performance running shoes with responsive Boost cushioning technology.",
  },
  {
    name: "Converse Chuck Taylor",
    price: 65,
    category: "Shoes",
    stock: 60,
    image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400",
    description:
      "Classic canvas sneakers iconic since 1917, perfect for casual everyday wear.",
  },
  {
    name: "Leather Jacket",
    price: 250,
    category: "Clothing",
    stock: 20,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    description:
      "Classic genuine leather jacket with a timeless design perfect for any occasion.",
  },
  {
    name: "Denim Jeans",
    price: 89,
    category: "Clothing",
    stock: 80,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    description:
      "Slim fit denim jeans crafted from premium stretch fabric for all day comfort.",
  },
  {
    name: "White T-Shirt",
    price: 25,
    category: "Clothing",
    stock: 100,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description:
      "Essential white cotton t-shirt with a classic fit suitable for any wardrobe.",
  },
  {
    name: "Hoodie",
    price: 75,
    category: "Clothing",
    stock: 45,
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400",
    description:
      "Comfortable pullover hoodie made from soft fleece material perfect for cooler days.",
  },
  {
    name: "Bomber Jacket",
    price: 180,
    category: "Clothing",
    stock: 25,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
    description:
      "Stylish bomber jacket with ribbed cuffs and collar for a modern urban look.",
  },
  {
    name: "Apple Watch Series 9",
    price: 399,
    category: "Electronics",
    stock: 30,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description:
      "Advanced smartwatch with health tracking, notifications and all day battery life.",
  },
  {
    name: "Wireless Headphones",
    price: 199,
    category: "Electronics",
    stock: 35,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description:
      "Premium noise cancelling wireless headphones with 30 hour battery life.",
  },
  {
    name: "Bluetooth Speaker",
    price: 89,
    category: "Electronics",
    stock: 40,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description:
      "Portable waterproof Bluetooth speaker with rich 360 degree sound and deep bass.",
  },
  {
    name: "Laptop Stand",
    price: 45,
    category: "Electronics",
    stock: 60,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    description:
      "Ergonomic aluminium laptop stand adjustable to 6 different height settings.",
  },
  {
    name: "Mechanical Keyboard",
    price: 129,
    category: "Electronics",
    stock: 25,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    description:
      "Compact mechanical keyboard with tactile switches and RGB backlighting.",
  },
  {
    name: "Ray-Ban Sunglasses",
    price: 149,
    category: "Accessories",
    stock: 50,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    description:
      "Classic UV400 polarized sunglasses with scratch resistant lenses.",
  },
  {
    name: "Leather Wallet",
    price: 55,
    category: "Accessories",
    stock: 70,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
    description:
      "Slim genuine leather bifold wallet with RFID blocking technology.",
  },
  {
    name: "Silver Watch",
    price: 220,
    category: "Accessories",
    stock: 20,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
    description:
      "Elegant silver stainless steel watch with sapphire crystal glass face.",
  },
  {
    name: "Baseball Cap",
    price: 35,
    category: "Accessories",
    stock: 90,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400",
    description:
      "Adjustable structured baseball cap in premium cotton twill fabric.",
  },
  {
    name: "Backpack",
    price: 75,
    category: "Bags",
    stock: 40,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    description:
      "Durable 30L backpack with padded laptop compartment and multiple pockets.",
  },
  {
    name: "Tote Bag",
    price: 40,
    category: "Bags",
    stock: 55,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4ef6?w=400",
    description:
      "Spacious canvas tote bag perfect for shopping, beach or everyday use.",
  },
  {
    name: "Duffle Bag",
    price: 95,
    category: "Bags",
    stock: 30,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    description:
      "Premium duffle bag with shoe compartment ideal for gym or weekend travel.",
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("20 products seeded successfully");
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
