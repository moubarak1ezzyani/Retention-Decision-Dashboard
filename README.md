# 💻 Retention Decision Dashboard

<div>

![Next.js](https://img.shields.io/badge/Next.js-13+-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-20232A?style=flat&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Available-2496ED?style=flat&logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-000000?style=flat&logo=vercel&logoColor=white)

</div>

> **Decision-making dashboard for turnover analysis and talent management.**

## 🔗 Intelligent API
This dashboard consumes the predictive services hosted here:
👉 **[Retention-AI-API](https://github.com/moubarak1ezzyani/Retention-AI-API.git)**

**Retention Decision Dashboard** is the user interface designed for HR managers. Developed with **Next.js**, it allows interaction with the predictive API, visualizes employee churn risks, and provides AI-generated retention plans.

---

## 📋 Key Features

This frontend was designed to offer a smooth and intuitive user experience:

1. **Secure Authentication**: Login via JWT to access the dashboard.
2. **Employee Form**: Intuitive input of HR data (Age, Department, Satisfaction, etc.).
3. **Risk Visualization**: Clear display of the churn probability (Churn Score).
4. **AI Assistant**: Dynamic display of the generated retention plan if the risk is critical (>50%).

---

## 🛠️ Architecture & Technologies

### Interface & Logic

* **Framework**: Next.js (App Router) - For server-side rendering and routing.
* **Language**: JavaScript (ES6+)
* **Style**: CSS Modules / Tailwind CSS (for Responsive Design).
* **State Management**: React Hooks (`useState`, `useEffect`).

### Integration

* **API Communication**: Fetch / Axios (located in the `services/` folder).
* **Containerization**: Docker (for an iso-prod deployment).

---

## 📂 Project Structure

Here is the directory tree based on the Next.js App Router architecture:

```text
RetentionAI-Frontend/
├── src/
│   └── my-app/
│       ├── app/
│       │   ├── dashboard/       # Protected space (HR Dashboard)
│       │   │   └── page.js      # Main view of the Dashboard
│       │   ├── layout.js        # Global structure (Nav, Footer)
│       │   └── page.js          # Home page / Login
│       │
│       ├── components/          # Reusable UI components (Forms, Cards...)
│       ├── services/            # Backend API call logic (Auth, Predict)
│       ├── utils/               # Utility functions (Formatting, Helpers)
│       └── node_modules/        # NPM Dependencies
│
├── public/                      # Images and static assets
├── .next/                       # Production build
├── Dockerfile                   # Docker image configuration
├── package.json                 # Dependency management
└── README.md                    # Documentation

```

---

## 🚀 Installation and Setup

### Prerequisites

* The **RetentionAI Backend** must be running (locally or on a server).
* Node.js (v18+) or Docker.

### Configuration

Create a `.env.local` file in the root directory to link the frontend to your Backend API:

```env
# URL of your FastAPI API (Backend)
NEXT_PUBLIC_API_URL=http://localhost:8000

```

### Option 1: Start with Docker (Recommended)

1. **Build the image**
```bash
docker build -t retention-frontend .

```

2. **Run the container**
```bash
docker run -p 3000:3000 retention-frontend

```

The application will be accessible at `http://localhost:3000`.

### Option 2: Manual Installation (Local)

1. **Install dependencies**
```bash
npm install
# or
yarn install

```

2. **Start the development server**
```bash
npm run dev

```

---

## 🌐 Vercel Deployment

The project is deployed in production and accessible via the link below:

👉 **[LINK]**

---

## 🔗 Backend Integration

This frontend communicates with the following FastAPI Backend endpoints:

* `POST /login`: Retrieval of the JWT Token (stored in `localStorage` or `Cookie`).
* `POST /predict`: Sending employee data for ML analysis.
* `POST /generate-retention-plan`: Calling Generative AI in case of high risk.

---

## 📸 User Journey Overview

1. **Login**: The HR user logs in (`hr_manager`).
2. **Input**: They fill in the characteristics of the evaluated employee.
3. **Analysis**: The system displays a risk gauge (e.g., **78%**).
4. **Action**: If the risk is "High", the retention plan is automatically displayed as a list of concrete actions.
