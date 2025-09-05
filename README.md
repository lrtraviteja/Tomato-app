# 🍅 Tomato - Food Delivery MERN-Stack Application

A complete food delivery ecosystem built with React 19, Node.js, Express, and MongoDB. This full-stack solution includes a customer-facing frontend, admin panel, and robust backend API with payment integration.

## 🚀 Live Demo

- **Frontend:** [https://tomato-app-frontend-bg7j.onrender.com/](https://tomato-app-frontend-bg7j.onrender.com/)
- **Backend API:** [https://tomato-app-backend-rvjb.onrender.com/](https://tomato-app-backend-rvjb.onrender.com/)
- **Admin Panel:** [https://tomato-app-admin-qc45.onrender.com/](https://tomato-app-admin-qc45.onrender.com/)

## 📋 Project Overview

This is a complete food delivery platform with three main components:

- **Customer Frontend** - Browse food, add to cart, and place orders
- **Admin Panel** - Manage food items, orders, and view analytics
- **Backend API** - RESTful API handling all business logic and data management

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload handling
- **Stripe** - Payment processing
- **CORS** - Cross-origin resource sharing

### Frontend (Customer)
- **React 19** - Modern React with latest features
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Responsive styling

### Admin Panel
- **React 19** - Modern admin interface
- **React Router DOM** - Navigation between admin sections
- **Axios** - API communication
- **React Toastify** - User notifications
- **CSS3** - Professional admin styling

## 📁 Project Structure

```
Tomato-app/
├── frontend/         # Customer-facing React app
├── admin/            # Admin panel React app
├── backend/          # Node.js Express API
├── README.md         # This file
└── .gitignore
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm package manager

### 1. Clone the Repository
```bash
git clone https://github.com/lrtraviteja/Tomato-app.git
cd Tomato-app
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in backend folder:
```env
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
```

Start the backend:
```bash
cd backend
npm run server
# Server runs on http://localhost:4000
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
# Frontend runs on http://localhost:5173
```

### 4. Admin Panel Setup
```bash
cd admin
npm install
npm run dev
# Admin runs on http://localhost:5174
```

## 🌐 API Endpoints

### Base URL
```
http://localhost:4000
```

### Authentication Routes
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login

### Food Routes
- `POST /api/food/add` - Add new food item (Admin only)
- `GET /api/food/list` - Get all food items
- `POST /api/food/remove` - Remove food item (Admin only)

### Cart Routes
- `POST /api/cart/add` - Add item to cart (Protected)
- `POST /api/cart/remove` - Remove item from cart (Protected)
- `GET /api/cart/get` - Get user cart (Protected)

### Order Routes
- `POST /api/order/place` - Place new order (Protected)
- `POST /api/order/verify` - Verify payment
- `GET /api/order/myOrders` - Get user orders (Protected)
- `GET /api/order/list` - Get all orders (Admin)
- `POST /api/order/status` - Update order status (Admin)

## 📦 Dependencies

### Backend Dependencies
- express - Web framework
- mongoose - MongoDB modeling
- cors - Cross-origin requests
- dotenv - Environment variables
- bcrypt - Password hashing
- jsonwebtoken - JWT authentication
- multer - File uploads
- stripe - Payment processing
- validator - Input validation
- nodemon - Development server

### Frontend Dependencies
- react - UI library
- react-dom - React rendering
- react-router-dom - Routing
- axios - HTTP client

### Admin Dependencies
- react - UI library
- react-dom - React rendering
- react-router-dom - Routing
- axios - HTTP client
- react-toastify - Notifications

## 🎯 Features

### Customer Features
- ✅ Browse food items with images and descriptions
- ✅ Add items to cart with quantity management
- ✅ Secure checkout with Stripe payment
- ✅ View order history
- ✅ Responsive design for mobile and desktop

### Admin Features
- ✅ Add/edit/delete food items with image upload
- ✅ View and manage all orders
- ✅ Update order status (pending, processing, delivered)
- ✅ Responsive admin interface

## 🚀 Running the Applications

### Development Mode
```bash
# Terminal 1 - Backend
cd backend && npm run server

# Terminal 2 - Frontend
cd frontend && npm run dev

# Terminal 3 - Admin
cd admin && npm run dev
```

### Production Build
```bash
# Frontend
cd frontend
npm run build

# Admin
cd admin
npm run build

# Backend is production-ready with npm run server
```

## 💳 Stripe Test Cards

Use this test card number with Stripe for testing purposes in India:

- **Card Number:** `4000 0035 6000 0008`
- **Expiry:** Any future date (e.g., 12/28)
- **CVC:** Any 3-digit number (e.g., 123)
- **Name:** Any name

## 📱 Responsive Design

All applications are fully responsive:

- **Mobile** - Optimized for touch interactions
- **Tablet** - Adaptive layouts for medium screens
- **Desktop** - Full-featured desktop experience

## 🧪 Testing

```bash
# Test backend endpoints
curl http://localhost:4000/

# Test frontend
Open http://localhost:5173 in browser

# Test admin panel
Open http://localhost:5174 in browser
```

⭐️ Star this repo if you found it helpful!

Made with ❤️ by [lrtraviteja](https://github.com/lrtraviteja)
