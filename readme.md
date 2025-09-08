# Sales Dashboard - Full-Stack Application 📊

A complete, full-stack sales dashboard built with Next.js, NestJS, and PostgreSQL. This project replicates a Figma design, featuring real-time data visualization and secure user authentication provided by Clerk.



## ✨ Live Demo
* **Frontend (Vercel):** [https://sales-dashboard-ten-nu.vercel.app/](https://sales-dashboard-ten-nu.vercel.app/)
* **Backend API Docs (Render):** [https://sales-dashboard-backend-42g7.onrender.com/api-docs#/](https://sales-dashboard-backend-42g7.onrender.com/api-docs#/)

<img src="https://github.com/ankit705yadav/sales-dashboard/blob/main/frontend/screen-shots/dashboard.png?raw=true" alt="sales dashboard" />

---
## 🚀 Features
* **Responsive UI:** Pixel-perfect implementation of the Figma design, fully responsive for various screen sizes.
* **Data Visualization:** Dynamic charts (bar, line, area) to visualize sales metrics, revenue, and customer data.
* **Secure Authentication:** Complete user login, signup, and session management powered by Clerk.
* **RESTful API:** A robust backend API built with NestJS to serve all dashboard data.
* **Database Integration:** Data is served from a PostgreSQL database, populated with a realistic seeding script for development.
* **Protected Routes:** Both frontend pages and backend API endpoints are protected, accessible only to authenticated users.

---
## 🛠️ Tech Stack & Architectural Choices
This project uses a modern, type-safe stack chosen for scalability, developer experience, and performance.

### Frontend
| Technology | Reason for Choice |
| :--- | :--- |
| **Next.js 14+ (App Router)** | Chosen for its powerful features like Server Components for performance, Client Components for interactivity, and a streamlined development workflow. |
| **Material-UI (MUI)** | A comprehensive component library that drastically speeds up UI development and ensures a consistent, professional look and feel. |
| **Recharts** | A simple and declarative charting library for React that makes it easy to create beautiful, dynamic data visualizations. |
| **Zustand** | Selected as a lightweight and minimal state management solution. It avoids the boilerplate of Redux while providing powerful state management for this project's scale. |
| **Clerk** | A complete user management platform that handles the complexities of authentication, session management, and user profiles, allowing for rapid and secure implementation. |

### Backend
| Technology | Reason for Choice |
| :--- | :--- |
| **NestJS** | A progressive Node.js framework built with TypeScript. Its modular and opinionated architecture (modules, controllers, services) enforces best practices, making the API highly scalable and maintainable. |
| **PostgreSQL** | A powerful and reliable open-source relational database, perfect for handling structured sales data. |
| **TypeORM** | A mature Object-Relational Mapper (ORM) that simplifies database interactions by allowing us to work with TypeScript classes and objects, ensuring type safety from the API down to the database. |

---
## ⚙️ Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites
* Node.js (v18 or later)
* npm or yarn
* Git
* A running PostgreSQL instance (local or cloud-hosted)
* A Clerk account for API keys

### 1. Clone the Repository
```bash
git clone https://github.com/ankit705yadav/sales-dashboard
cd sales-dashboard
```

### 2. Backend Setup
1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create an environment file by copying the example:
    ```bash
    cp .env.example .env
    ```
4.  Fill in your `.env` file
5.  Populate the database with sample data:
    ```bash
    npm run seed #comment-out "ssl" from backend/src/app.module.ts when using local-DB
    ```
6.  Start the backend server:
    ```bash
    npm run start:dev
    ```
    The backend will be running at `http://localhost:3001`.
    API docs will be available at `http://localhost:3001/api-docs`.

### 3. Frontend Setup
1.  Open a **new terminal** and navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a local environment file by copying the example:
    ```bash
    cp .env.example .env
    ```
4.  Fill in your `.env` file.
5.  Start the frontend server:
    ```bash
    npm run dev
    ```
    The frontend will be running at `http://localhost:3000`.

---
## 🏗️ Project Structure
The project is organized as a monorepo with two main packages:
```
/
├── backend/     # NestJS API (Controllers, Services, Modules, Entities)
├── frontend/    # Next.js UI (App Router, Components, Store, Hooks)
└── README.md
```
---
## 🌐 API Endpoints
All API endpoints are protected and require a valid Bearer Token.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/dashboard/metrics` | Fetches today's key sales metrics. |
| `GET` | `/api/dashboard/revenue` | Gets revenue data for the past 7 days. |
| `GET` | `/api/dashboard/top-products`| Retrieves the top 4 selling products. |
| `GET` | `/api/dashboard/visitor-insights`| Gets visitor data for the year. |
| `GET` | `/api/dashboard/customer-satisfaction`| Gets customer satisfaction data. |

---
## 🚀 Deployment
* **Frontend:** Deployed on **Vercel**, configured to the `frontend` root directory.
* **Backend:** Deployed on **Render** as a Web Service, configured to the `backend` root directory.
* **Database:** Hosted on **Render PostgreSQL**.
