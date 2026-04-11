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
Retention-Decision-Dashboard/
├── Dockerfile                   # Docker image configuration
├── README.md                    # Root documentation
├── src/
│   └── my-app/                  # Main Next.js application
│       ├── app/                 # Next.js App Router
│       │   ├── auth/            # Authentication pages (Login/Register)
│       │   ├── dashboard/       # Protected space (HR Dashboard)
│       │   │   └── page.tsx     # Main view of the Dashboard
│       │   ├── layout.tsx       # Global structure (Nav, Footer, Providers)
│       │   ├── page.tsx         # Landing page / Home
│       │   └── globals.css      # Global Styles
│       │
│       ├── components/          # Reusable UI components (Forms, Gauges, Cards)
│       ├── services/            # API call logic (Predict, Auth, LLM)
│       ├── utils/               # Utility functions & Helpers
│       ├── public/              # Images and static assets
│       ├── package.json         # Dependency management
│       └── tsconfig.json        # TypeScript configuration
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

---

## 🧪 Testing Guide (Dashboard UI)

To test the predictive model and the AI integration directly from the user interface, launch the dashboard and manually enter the following test profiles into the form. 

### 🚨 Test 1: The "Flight Risk" (Triggers AI)
This employee is overworked, underpaid, and unhappy.
* **Age:** 24
* **Monthly Income ($):** 2500
* **Department:** Sales
* **Job Role:** Sales Representative
* **Business Travel:** Travel_Frequently
* **Overtime:** Yes *(Critical trigger)*
* **Job Satisfaction (1-4):** 1
* **Work Life Balance (1-4):** 1

> **👉 Expected Result:** The Risk Gauge should shoot up well above 50%. The UI will display a custom-generated AI plan focusing on reducing hours, increasing compensation, or offering support.

### 🛡️ Test 2: The "Happy Lifer" (Standard Response)
This is a senior manager with great pay, high satisfaction, and no overtime.
* **Age:** 45
* **Monthly Income ($):** 15000
* **Department:** Research & Development
* **Job Role:** Manager
* **Business Travel:** Non-Travel
* **Overtime:** No
* **Job Satisfaction (1-4):** 4
* **Work Life Balance (1-4):** 4

> **👉 Expected Result:** The Risk Gauge should drop very low (typically < 15%). The UI will display the default message: *"Churn probability is below 50% — no urgent retention action required."*

### ⚠️ Test 3: The "Burnout" Profile (AI Context Test)
This is a technical worker who generally likes their job but is suffering from severe burnout due to overtime.
* **Age:** 32
* **Monthly Income ($):** 7000
* **Department:** Research & Development
* **Job Role:** Laboratory Technician
* **Business Travel:** Travel_Rarely
* **Overtime:** Yes
* **Job Satisfaction (1-4):** 3
* **Work Life Balance (1-4):** 1

> **👉 Expected Result:** The risk will be elevated. The AI should successfully recognize the discrepancy (high involvement vs. poor balance) and generate a plan that specifically addresses work-life balance and mandatory time off.
