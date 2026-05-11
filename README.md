# Aura E-Commerce
Modern e-commerce application built with React, Vite, Zustand, and React Router. Includes authentication, shopping
cart persistence, checkout system, dynamic filtering, and PDF invoice generation.

# Tech Stack
| Category | Technology |
|---|---|
| Framework | React + Vite |
| Language | JavaScript (ES6+) |
| Routing | React Router DOM |
| State Management | Zustand + Context API |
| Persistence | Zustand Persist |
| Styling | CSS Modules |
| Icons | Lucide React |
| PDF Generation | React PDF Renderer |
| Hooks | Custom React Hooks |


# Features
• Product listing with pagination
• Product filtering by category
• Product detail page
• Shopping cart system
• Cart persistence using localStorage
• Authentication system
• Dynamic checkout
• PDF purchase summary generation
• Responsive design
• Offline detection
• Custom hooks architecture

# Prerequisites
Before running the project, make sure you have installed:
• Node.js 18+
• npm or yarn
• Git

# Installation
Clone the repository:
git clone https://github.com/your-user/aura-ecommerce.git
Move into the project folder:
cd aura-ecommerce
Install dependencies:
npm install

# Run Development Server
npm run dev
The application will run at:
http://localhost:5173


# Build for Production
npm run build
Preview Production Build
npm run preview


# Scripts
• npm run dev ® Start development server
• npm run build ® Build for production


# Project Structure

```bash
src/
├── components/
│   ├── navbar/
│   ├── floatingCart/
│   ├── reports/
│   └── error/
│
├── context/
│   └── cartContext.jsx
│
├── hooks/
│   ├── useCount.js
│   ├── useFilterProducts.js
│   ├── useProducts.js
│   └── useRedirect.js
│
├── pages/
│   ├── home/
│   ├── login/
│   ├── product/
│   └── checkout/
│
├── router/
│   ├── router.jsx
│   └── router-protection.jsx
│
├── services/
│   ├── api-products.js
│   └── api-login.js
│
├── store/
│   ├── useAuthStore.js
│   └── useCartStore.js
│
├── App.jsx
├── main.jsx
└── index.css

```
# Demo Credentials
Username: emilys
Password: emilyspass

# Important Notes
• The application uses demo APIs for authentication and products.
• Internet connection is required to load products correctly.
• Cart and authentication data are persisted using localStorage.
• Clearing browser storage will remove cart and login session data.
• Checkout form data is not persisted after page refresh.
• The Address and Payment sections must be expanded and completed before pressing the Buy button.
• If the Address or Payment forms are collapsed or incomplete, the purchase process will not continue.
• The project is intended for educational purposes only.

# Authentication
Authentication is handled using Zustand Persist.
Persistence key:
auth-storage

# Shopping Cart
Cart functionality includes:
• Add products
• Remove products
• Increase quantity
• Decrease quantity
• Persistent storage
• Automatic total calculation
Persistence key: cart-products

# Routing
Main routes:
• / ® Home page
• /login ® Login page
• /product/:id ® Product details
• /checkout ® Checkout page

# PDF Invoice Generation
Uses:
@react-pdf/renderer
Generated PDF includes:
• Purchased products
• Quantities
• Total amount
• User information

# Responsive Design
Supports:
• Desktop
• Laptop
• Tablet
• Mobile devices

# APIs Used
Products API:  https://dummyjson.com/products
Authentication API:  https://dummyjson.com/auth/login



# Author
Developed by Hector Avila.