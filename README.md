<div align="center">
  <img src="public/images/logo/logo.png" alt="VDCC Logo" width="120" />
  <h1>Varun Dev Coaching Centre (VDCC) Portal</h1>
  <p><strong>Empowering Education Through Technology</strong></p>
  <p>A secure, full-stack digital campus built with Next.js, Firebase, and AI.</p>
</div>

---

## 🚀 Overview

The **VDCC Portal** is an enterprise-grade web application designed to digitize and centralize operations for educational coaching institutes. Moving away from disjointed WhatsApp groups and paper-based records, VDCC offers a unified ecosystem with role-based dashboards, secure authentication, centralized resource management, and an integrated autonomous AI Study Assistant.

## ✨ Key Features

- **🛡️ Secure Multi-Role Authentication**: Firebase-powered Login via Phone OTP, Email/Password, or Google. Automatically routes to Admin, Teacher, Parent, or Student dashboards.
- **🤖 Autonomous AI Study Assistant**: Powered by the Groq API (LLaMA 3.1 8B), providing ultra-fast, context-aware answers constrained strictly to institute knowledge.
- **📚 Centralized Resource Hub**: A secure repository for distributing class materials, assignments, and notes, powered by MongoDB Atlas.
- **📱 Mobile-First Design**: Engineered for speed and responsiveness on mobile networks, utilizing Tailwind CSS and Framer Motion for a premium, app-like feel.

## 🛠️ Tech Stack

* **Frontend**: [Next.js 16 (App Router)](https://nextjs.org/) • React 19 • Tailwind CSS • Framer Motion
* **Backend**: Next.js API Routes (Serverless Node.js)
* **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas) (Mongoose ODM)
* **Authentication**: [Firebase Auth](https://firebase.google.com/docs/auth) & Firestore
* **AI Engine**: [Groq API](https://groq.com/)
* **Deployment**: [Vercel](https://vercel.com/)

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router (Pages & API routes)
│   ├── api/              # Serverless backend functions
│   └── (routes)/         # Frontend UI routes (/login, /admin, etc.)
├── components/           # Reusable React components
│   ├── layout/           # Structural components (Navbar, Footers)
│   ├── ui/               # Generic UI primitives (Buttons, Containers)
│   └── [features]/       # Feature-specific modules
├── config/               # Application-wide configurations
├── lib/                  # Utilities (db.ts, firebase config)
└── models/               # Mongoose schemas (User, Resource)
```

## ⚙️ Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd vdcc
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   # Firebase Config
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # MongoDB
   MONGODB_URI=your_mongodb_connection_string

   # Groq AI
   GROQ_API_KEY=your_groq_api_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🔒 Security & Architecture

- **Auth Layer**: Client-side protected routes using Firebase Auth state observers.
- **Data Layer**: Backend validation on all Next.js API routes before MongoDB execution.
- **AI Safety**: Hardcoded system prompting (`INSTITUTE_CONTEXT`) prevents the LLM from hallucinating or answering off-topic queries.

---
*Built with ❤️ for modern education.*
