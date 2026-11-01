# VerifyRx 🩺

VerifyRx is a full-stack medical prescription verification application that uses Gemini AI to perform OCR on prescription images and extract medication details.

## 🚀 Features

- **Prescription Upload & OCR**: Upload image prescriptions (PNG, JPG, WebP) and perform AI-powered text extraction using Google Gemini Vision.
- **Drug & Dosage Extraction**: Automatically parse and extract medication names, dosages, and administration frequencies.
- **Modern UI**: Built with React 19, Tailwind CSS v4, and Vite for a fast and responsive user experience.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4, Axios, React Router
- **Backend**: Node.js, Express 5, Multer, `@google/genai` (Gemini 3.5 Flash)

---

## 📂 Project Structure

```text
VerifyRx/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18+)
- Google Gemini API Key ([Google AI Studio](https://aistudio.google.com/))

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory by copying `.env.example`:

```bash
cp .env.example .env
```

Configure your `.env` variables:
```env
PORT=5000
GEMINI_API_KEY=your_gemini_api_key_here
```

Start the backend server:
```bash
npm run dev
# Server will run on http://localhost:5000
```

### 2. Frontend Setup

In a new terminal:

```bash
cd frontend
npm install
npm run dev
# Frontend will run on http://localhost:5173
```

---

## 📄 License

ISC
