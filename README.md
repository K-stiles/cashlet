## Cashlet 💸

Smart personal finance SaaS with AI-powered receipts, rich analytics, and automated reporting.

![Cashlet Dashboard](client/src/assets/images/dashboard_.png)

---

### 🔧 Tech Stack

- **Backend**: Node.js, Express, TypeScript, Passport JWT, Zod, Mongoose, Multer, Cloudinary SDK, Resend, node-cron, Google Generative AI (Gemini)
- **Frontend**: React, TypeScript, Vite, React Router, Redux Toolkit + RTK Query, Redux Persist, Tailwind CSS, Radix UI, Recharts, React Hook Form, Zod
- **Database**: MongoDB (Mongoose ODM)

---

### ✨ Key Features

- **Authentication** 🔐: Email + Password, JWT access/refresh tokens
- **Transactions** 🧾: Create, edit, duplicate, bulk delete, pagination, search/filter
- **CSV Import** 📥: Upload transactions via CSV
- **AI Receipt Scanner** 🤖🧾: Extract data from receipts using Gemini
- **Analytics Dashboard** 📈: MongoDB aggregate-driven KPIs, line and pie charts
- **Date Ranges** 📅: Quick filters (e.g., last 7/30 days, custom)
- **Recurring Transactions** ♻️: Automated with cron jobs
- **Monthly Reports** 📧: Auto-generated and emailed to users
- **Profile Photos** 🖼️: Cloudinary upload and storage

---

### 🗂️ Monorepo Structure

```
./
├─ backend/   # Express API, cron jobs, mailers, MongoDB models
└─ client/    # React app (Vite), Redux Toolkit, Tailwind
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+
- MongoDB instance (local or hosted)

### 1) Clone and install

```bash
git clone <your-repo-url> cashlet && cd cashlet

# Install backend deps
cd backend && npm install

# Install frontend deps
cd ../client && npm install
```

### 2) Configure environment variables

Create a `.env` file inside both `backend/` and `client/`.

Backend (`backend/.env`):

```bash
# Server
NODE_ENV=development
PORT=8000
BASE_PATH=/api

# Database
MONGO_URI=mongodb://localhost:27017/cashlet

# Auth
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=your_refresh_secret
JWT_REFRESH_EXPIRES_IN=7d

# AI (Gemini)
GEMINI_API_KEY=your_gemini_api_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
RESEND_MAILER_SENDER="Cashlet <no-reply@yourdomain.com>"

# CORS
FRONTEND_ORIGIN=http://localhost:5173
```

Frontend (`client/.env`):

```bash
VITE_API_URL=http://localhost:8000/api
```

Notes:

- `BASE_PATH` defaults to `/api`. If changed, update `VITE_API_URL` accordingly.
- `FRONTEND_ORIGIN` must match your Vite dev server origin (default `http://localhost:5173`).

### 3) Run the app (development)

Run API and client in separate terminals.

Backend (from `backend/`):

```bash
npm run dev
```

Frontend (from `client/`):

```bash
npm run dev
```

The app will be available at `http://localhost:5173` and will proxy API requests to `http://localhost:8000/api` via `VITE_API_URL`.

### 4) Seed sample data (optional)

From `backend/`:

```bash
npm run seed
```

This populates the database with sample users/transactions for quick testing.

---

## 🧰 Available Scripts

### Backend (in `backend/`)

- `npm run dev`: Start the API with live reload (ts-node-dev)
- `npm run build`: Type-check and build to `dist/`
- `npm start`: Run the compiled server from `dist/`
- `npm run seed`: Seed MongoDB with demo data

### Frontend (in `client/`)

- `npm run dev`: Start Vite dev server
- `npm run build`: Type-check and build for production
- `npm run preview`: Preview the production build

---

## 🌐 API Base URL

- Local development: `http://localhost:8000/api`
- Health check: `GET /` responds with a simple JSON payload

---

## 🔎 Notes on Services

- **AI Receipt Scanner** uses the Gemini API. Provide `GEMINI_API_KEY`.
- **Cloudinary** is required for profile photo uploads. Provide Cloudinary credentials.
- **Email delivery** for monthly reports uses Resend. Provide `RESEND_API_KEY` and a verified sender.
- **Cron jobs** run in development mode by default when the server boots.

---

## 📄 License

This project is licensed under the MIT License. See `LICENSE.md` for details.
