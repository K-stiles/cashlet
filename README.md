# 💸 Cashlet

**AI-Powered Personal Finance Management Platform**


*Cashlet is your intelligent financial companion that simplifies money management through AI-powered insights, automated reporting, and comprehensive expense tracking. Take control of your finances with confidence.*

![Cashlet Landing page](/cashlet.png)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Tech Stack](https://img.shields.io/badge/stack-TypeScript%20%7C%20React%20%7C%20Node.js-blue)]()
[![AI](https://img.shields.io/badge/AI-Google%20Gemini-orange)](https://ai.google.com/)

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Tech Stack

### **Frontend**
- **React 19** - Modern UI library with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management with RTK Query
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Performant forms with validation
- **Recharts** - Composable charting library
- **Lucide React** - Beautiful SVG icons

### **Backend**
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **TypeScript** - Type-safe server-side development
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Token authentication
- **Google Gemini AI** - AI-powered receipt scanning
- **Node Cron** - Scheduled task automation
- **Cloudinary** - Image upload and management

### **Other Tools**
- **Passport.js** - Authentication middleware
- **Zod** - Schema validation
- **Bcrypt** - Password hashing
- **Resend** - Email service integration
- **Papa Parse** - CSV parsing library
- **Date-fns** - Date utility library

---

## ✨ Key Features

- 🔐 **Secure Authentication** - Email/password login with JWT tokens and refresh token rotation
- 💰 **Transaction Management** - Create, edit, duplicate, and bulk delete transactions with advanced filtering
- 📥 **CSV Import** - Bulk import transactions via CSV files with intelligent column mapping
- 🤖 **AI Receipt Scanner** - Extract transaction data from receipts using Google Gemini AI
- 📊 **Analytics Dashboard** - Rich visualizations with line charts, pie charts, and KPI summaries
- 📅 **Date Range Filtering** - Quick filters (7 days, 30 days, custom ranges) across all features
- ♻️ **Recurring Transactions** - Automated processing with cron job scheduling
- 📧 **Monthly Reports** - AI-generated financial insights delivered via email
- 🖼️ **Profile Management** - Cloudinary-powered profile photo uploads
- 🌙 **Dark Mode** - Complete theme switching with system preference detection
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices

---

### 🗂️ Monorepo Structure

```
./
├─ backend/   # Express API, cron jobs, mailers, MongoDB models
└─ client/    # React app (Vite), Redux Toolkit, Tailwind

```


## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.0 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas)
- **Git** version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/K-stiles/cashlet.git
   cd cashlet
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Configuration

Create environment files for both backend and frontend:

**Backend Environment (`backend/.env`)**
```bash
# Database Configuration
DATABASE_URL=mongodb://localhost:27017/cashlet
# OR for MongoDB Atlas:
# DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/cashlet

# JWT Configuration
JWT_SECRET=your_super_secure_jwt_secret_key
JWT_REFRESH_SECRET=your_super_secure_refresh_secret

# Google AI Configuration
GOOGLE_AI_API_KEY=your_google_gemini_api_key

# Cloudinary Configuration (for file uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

# Email Configuration (Resend)
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=noreply@yourdomain.com

# Application Configuration
NODE_ENV=development
PORT=8000
BASE_PATH=/api/v1
FRONTEND_ORIGIN=http://localhost:5173
```

**Frontend Environment (`client/.env`)**
```bash
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

### Running the Application

**Development Mode:**

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on `http://localhost:8000`

2. **Start the frontend development server**
   ```bash
   cd client
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

**Production Mode:**

1. **Build and start backend**
   ```bash
   cd backend
   npm run build
   npm start
   ```

2. **Build and preview frontend**
   ```bash
   cd client
   npm run build
   npm run preview
   ```

### Database Setup

**Option 1: Local MongoDB**
```bash
# Install MongoDB locally and start the service
mongod --dbpath /path/to/your/db
```

**Option 2: MongoDB Atlas**
1. Create a free account at [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a new cluster
3. Get your connection string
4. Update `DATABASE_URL` in your `.env` file

### Seeding Sample Data

To populate your database with sample transactions and users:

```bash
cd backend
npm run seed
```

This creates demo data including:
- Sample user accounts
- Various transaction types
- Analytics data for testing
- Report history

---

## 📁 Project Structure

```
./
├── backend/                    # Express.js API Server
│   ├── src/
│   │   ├── @types/            # TypeScript type definitions
│   │   ├── config/            # Database, auth, and service configs
│   │   ├── controllers/       # Request handlers and business logic
│   │   ├── cron/              # Scheduled job definitions
│   │   │   └── jobs/          # Individual cron job implementations
│   │   ├── enums/             # Application constants and enums
│   │   ├── mailers/           # Email templates and sending logic
│   │   │   └── templates/     # HTML email templates
│   │   ├── middlewares/       # Express middleware functions
│   │   ├── models/            # MongoDB/Mongoose data models
│   │   ├── routes/            # API route definitions
│   │   ├── seeds/             # Database seeding scripts
│   │   ├── services/          # Business logic and data operations
│   │   ├── utils/             # Helper functions and utilities
│   │   └── validators/        # Zod schema validation
│   ├── package.json
│   └── tsconfig.json
│
├── client/                     # React Frontend Application
│   ├── src/
│   │   ├── @types/            # Frontend type definitions
│   │   ├── app/               # Redux store configuration
│   │   ├── assets/            # Static assets (images, fonts)
│   │   ├── components/        # Reusable UI components
│   │   │   ├── ui/            # Base UI components (shadcn/ui)
│   │   │   ├── navbar/        # Navigation components
│   │   │   └── transaction/   # Transaction-specific components
│   │   ├── constant/          # Application constants
│   │   ├── context/           # React context providers
│   │   ├── data/              # Sample data and mock files
│   │   ├── features/          # Feature-based modules (RTK Query)
│   │   │   ├── analytics/     # Analytics API and types
│   │   │   ├── auth/          # Authentication logic
│   │   │   ├── report/        # Report management
│   │   │   ├── transaction/   # Transaction management
│   │   │   └── user/          # User management
│   │   ├── hooks/             # Custom React hooks
│   │   ├── layouts/           # Page layout components
│   │   ├── lib/               # Utility libraries and helpers
│   │   ├── pages/             # Page components and routing
│   │   └── routes/            # Route definitions and guards
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── README.md                   # Project documentation
└── .gitignore                 # Git ignore rules
```

---

## 📸 Screenshots

### Dashboard Overview
![Cashlet Dashboard Overview](client/src/assets/images/dashboard_.png)
*Real-time financial overview with interactive charts and KPI summaries*

### Transaction Management
![Transaction Management](./screenshots/transactions.png)
*Advanced transaction tracking with search, filters, and bulk operations*

### AI Receipt Scanner
![AI Receipt Scanner](./screenshots/receipt-scanner.png)
*Upload receipts and extract transaction data automatically using AI*

### Analytics & Reports
![Analytics Dashboard](./screenshots/analytics.png)
*Comprehensive analytics with expense breakdowns and trend analysis*

---

---

## 🔌 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/register` | Create new user account | ❌ |
| POST | `/auth/login` | Authenticate user | ❌ |

### Transaction Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/transaction/all` | Get all user transactions | ✅ |
| POST | `/transaction/create` | Create new transaction | ✅ |
| PUT | `/transaction/update/:id` | Update existing transaction | ✅ |
| DELETE | `/transaction/delete/:id` | Delete transaction | ✅ |
| POST | `/transaction/bulk-transaction` | Bulk import transactions | ✅ |
| POST | `/transaction/scan-receipt` | AI-powered receipt scanning | ✅ |

### Analytics Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/analytics/summary` | Get financial summary | ✅ |
| GET | `/analytics/chart` | Get chart data | ✅ |
| GET | `/analytics/expense-breakdown` | Get expense breakdown | ✅ |

### Reports Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/report/all` | Get user's reports | ✅ |
| PUT | `/report/setting` | Update report settings | ✅ |
| POST | `/report/generate` | Generate manual report | ✅ |

**Query Parameters for Analytics & Transactions:**
- `preset`: Date range preset (`7d`, `30d`, `3m`, etc.)
- `from`: Custom start date (ISO string)
- `to`: Custom end date (ISO string)
- `page`: Page number for pagination
- `limit`: Items per page

---
### Reporting Issues

Found a bug or have a feature request? Please [open an issue](https://github.com/K-stiles/cashlet/issues) with:
- Clear description of the problem/feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots (if applicable)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**K-stiles** - *Full-Stack Developer*
- GitHub: [@K-stiles](https://github.com/K-stiles)
- Project Repository: [cashlet](https://github.com/K-stiles/cashlet)

---

## 🙏 Acknowledgments

- **Google Gemini AI** for intelligent receipt processing
- **Cloudinary** for reliable image management
- **MongoDB** for flexible data storage
- **shadcn/ui** for beautiful, accessible components
- **Recharts** for data visualization capabilities

---

*Made with ❤️ and ☕ by K-stiles*
