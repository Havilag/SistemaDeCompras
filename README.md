# Aura E-Commerce

Modern e-commerce application built with React, Vite, Zustand, and React Router.

Includes authentication, shopping cart persistence, checkout system, dynamic filtering, and PDF invoice generation.

---

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

---

# Features

- Product listing with pagination
- Product filtering by category
- Product detail page
- Shopping cart system
- Cart persistence using localStorage
- Authentication system
- Dynamic checkout
- PDF purchase summary generation
- Responsive design
- Offline detection
- Custom hooks architecture

---

# Prerequisites

Before running the project, make sure you have installed:

- Node.js 18+
- npm or yarn
- Git

---

# Installation

Clone the repository:

```bash
git clone https://github.com/your-user/aura-ecommerce.git
```

Move into the project folder:

```bash
cd aura-ecommerce
```

Install dependencies:

```bash
npm install
```

---

# Run Development Server

```bash
npm run dev
```

The application will run at:

```bash
http://localhost:5173
```

---

# Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# Scripts

| Command | Description |
|---|---|
| npm run dev | Start development server |
| npm run build | Build for production |
| npm run preview | Preview production build |

---

# Project Structure

```bash
src/
├── components/        # Reusable UI components
│   ├── navbar/        # Navigation bar
│   ├── footer/        # Footer section
│   ├── floatingCart/  # Floating shopping cart
│   ├── reports/       # PDF reports and invoices
│   └── error/         # Error components and pages
│
├── context/           # React Context providers
│
├── hooks/             # Custom React hooks
│
├── pages/             # Application pages
│   ├── home/
│   ├── login/
│   ├── product/
│   └── checkout/
│
├── router/            # Routing configuration and protection
│
├── services/          # API requests and services
│
├── store/             # Zustand global stores
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Demo Credentials

```txt
Username: emilys
Password: emilyspass
```

---

# Important Notes

- The application uses demo APIs for authentication and products.
- Internet connection is required to load products correctly.
- Cart and authentication data are persisted using localStorage.
- Clearing browser storage will remove cart and login session data.
- Checkout form data is not persisted after page refresh.
- The Address and Payment sections must be expanded and completed before pressing the Buy button.
- If the Address or Payment forms are collapsed or incomplete, the purchase process will not continue.
- The project is intended for educational purposes only.

---

# Authentication

Authentication is handled using Zustand Persist.

Persistence key:

```txt
auth-storage
```

---

# Shopping Cart

Cart functionality includes:

- Add products
- Remove products
- Increase quantity
- Decrease quantity
- Persistent storage
- Automatic total calculation

Persistence key:

```txt
cart-products
```

---

# Routing

Main routes:

| Route | Description |
|---|---|
| / | Home page |
| /login | Login page |
| /product/:id | Product details |
| /checkout | Checkout page |

---

# PDF Invoice Generation

Uses:

```txt
@react-pdf/renderer
```

Generated PDF includes:

- Purchased products
- Quantities
- Total amount
- User information

---

# Responsive Design

Supports:

- Desktop
- Laptop
- Tablet
- Mobile devices

---

# APIs Used

Products API:

```txt
https://dummyjson.com/products
```

Authentication API:

```txt
https://dummyjson.com/auth/login
```

---

# Deploy

Live application:

https://sistema-de-compras-blond.vercel.app/


---


---

# Author

Developed by Hector Avila.