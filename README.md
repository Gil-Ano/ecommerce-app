# NovaMart 🛒

> A full-stack ecommerce web application built with the MERN stack, featuring AI-powered product description generation.

![NovaMart](https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800)

## 🌐 Live Demo

- **Frontend:** [https://novamart-six.vercel.app](https://novamart-six.vercel.app)
- **Backend API:** [https://novamart-backend-9nk4.onrender.com](https://novamart-backend-9nk4.onrender.com)

> ⚠️ Note: Backend is hosted on Render free tier and may take 30-60 seconds to wake up on first request.

---

## ✨ Features

- 🔐 **JWT Authentication** — Register, login, logout with secure token-based auth
- 🛍️ **Product Catalog** — Browse 20+ products across 5 categories
- 🔍 **Product Detail Pages** — View full product info, stock levels, descriptions
- 🛒 **Shopping Cart** — Add, remove, update quantities with persistent localStorage
- 📦 **Order System** — Place orders with shipping details, view order history
- 🤖 **AI Description Generator** — Admin can generate product descriptions using Groq AI (Llama 3)
- 👑 **Admin Panel** — Add new products with AI-assisted descriptions
- 📱 **Responsive Design** — Works on desktop and mobile

---

## 🛠️ Tech Stack

### Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

### AI & Deployment

![Groq](https://img.shields.io/badge/Groq_AI-FF6B35?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

---

## 📂 Project Structure

```
ecommerce-app/
├── backend/
│   ├── middleware/
│   │   └── authMiddleware.js    # JWT protect & admin middleware
│   ├── models/
│   │   ├── User.js              # User schema
│   │   ├── Product.js           # Product schema
│   │   └── Order.js             # Order schema
│   ├── routes/
│   │   ├── authRoutes.js        # Register & login routes
│   │   ├── productRoutes.js     # Product CRUD + AI description
│   │   └── orderRoutes.js       # Order creation & history
│   ├── seeder.js                # Database seeder (20 products)
│   └── server.js                # Express app entry point
└── frontend/
    └── src/
        ├── components/
        │   └── Navbar.jsx        # Navigation with auth state
        ├── pages/
        │   ├── HomePage.jsx      # Product grid
        │   ├── ProductPage.jsx   # Product detail + add to cart
        │   ├── CartPage.jsx      # Cart management
        │   ├── CheckoutPage.jsx  # Order placement
        │   ├── OrderHistoryPage.jsx # User orders
        │   ├── LoginPage.jsx     # Login form
        │   ├── RegisterPage.jsx  # Register form
        │   └── AdminPage.jsx     # Admin + AI generator
        └── App.jsx               # Routes configuration
```

---

## 📡 API Endpoints

### Auth

| Method | Endpoint             | Description       | Auth   |
| ------ | -------------------- | ----------------- | ------ |
| POST   | `/api/auth/register` | Register new user | Public |
| POST   | `/api/auth/login`    | Login user        | Public |

### Products

| Method | Endpoint                             | Description             | Auth   |
| ------ | ------------------------------------ | ----------------------- | ------ |
| GET    | `/api/products`                      | Get all products        | Public |
| GET    | `/api/products/:id`                  | Get single product      | Public |
| POST   | `/api/products`                      | Add new product         | Admin  |
| DELETE | `/api/products/:id`                  | Delete product          | Admin  |
| POST   | `/api/products/generate-description` | AI generate description | Public |

### Orders

| Method | Endpoint               | Description        | Auth    |
| ------ | ---------------------- | ------------------ | ------- |
| POST   | `/api/orders`          | Create new order   | Private |
| GET    | `/api/orders/myorders` | Get user orders    | Private |
| PUT    | `/api/orders/:id/pay`  | Mark order as paid | Private |

---

## ⚙️ Local Setup

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- Groq API key (free at console.groq.com)

### Backend Setup

```bash
cd backend
npm install

# Create .env file
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
GROQ_API_KEY=your_groq_api_key

# Seed database with 20 products
node seeder.js

# Start server
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🤖 AI Feature

NovaMart includes an AI-powered product description generator in the admin panel. Built using the **Groq API** with **Llama 3** model:

1. Admin enters product name and category
2. Clicks "Generate Description with AI ✨"
3. Groq's Llama 3 model generates a professional product description instantly
4. Description populates the form field automatically

This reduces manual work for store owners and ensures consistent, professional product copy.

---

## 🚀 Deployment

| Service  | Platform        | URL                                        |
| -------- | --------------- | ------------------------------------------ |
| Frontend | Vercel          | https://novamart-six.vercel.app            |
| Backend  | Render          | https://novamart-backend-9nk4.onrender.com |
| Database | Railway MongoDB | Cloud hosted                               |

---

## 🔮 Future Improvements

- [ ] TypeScript migration
- [ ] Payment integration (Stripe)
- [ ] Product search and category filtering
- [ ] Product reviews and ratings
- [ ] Email order confirmation (Nodemailer)
- [ ] Jest unit tests
- [ ] Image upload (Cloudinary)

---

## 👨‍💻 Author

**Gil** — Final year IT student from Zimbabwe, building towards a remote full stack engineering role.

- GitHub: [@Gil-Ano](https://github.com/Gil-Ano)

---

> Built with ❤️ from Zimbabwe 🇿🇼
