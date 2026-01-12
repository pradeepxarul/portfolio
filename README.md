# Pradeep Arul - Portfolio Website

Professional portfolio showcasing AI/ML development expertise and full-stack engineering projects.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Gmail account with App Password

### Frontend Setup
```bash
cd pradeep-portfolio
npm install
npm run dev
```
Runs at: `http://localhost:5173`

### Backend Setup
1. **Get Gmail App Password**:
   - Go to https://myaccount.google.com/security
   - Enable 2FA → Search "App passwords"
   - Generate for "Mail + Windows"

2. **Configure `.env`**:
   ```env
   EMAIL_USER=pradeeparul2005@gmail.com
   EMAIL_PASS=your_16_char_password
   PORT=5000
   ```

3. **Start Server**:
   ```bash
   cd pradeep-portfolio-backend
   npm install
   npm run dev
   ```
   Runs at: `http://localhost:5000`

## 📁 Project Structure

```
Portfolio/
├── pradeep-portfolio/          # Frontend (React + Vite + Tailwind)
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/         # Navbar, Footer
│   │   │   ├── sections/       # Hero, About, Skills, etc.
│   │   │   └── ui/             # Reusable components
│   │   ├── App.jsx
│   │   └── index.css
│   └── public/images/          # Profile & project images
│
└── pradeep-portfolio-backend/  # Backend (Node + Express)
    ├── server.js               # Email API
    └── .env                    # Credentials
```

## ✨ Features

- **Aceternity-Style Dark UI**: Premium design with glowing effects
- **9 Sections**: Hero, About, Skills (with logos), Experience, Projects, Certifications, Contact
- **Fully Responsive**: Mobile-first design
- **Working Contact Form**: Sends emails via Nodemailer
- **Smooth Animations**: Framer Motion throughout

## 🎨 Tech Stack

**Frontend**: React, Vite, Tailwind CSS, Framer Motion, React Icons  
**Backend**: Node.js, Express, Nodemailer  
**Deployment**: Vercel (Frontend) + Render (Backend)

## 📸 Replace Images

Replace these placeholder images in `public/images/`:
- `profile.jpg` - Your headshot (300x300px)
- `rag-project.jpg` - RAG project screenshot
- `linkloom-project.jpg` - LINKLOOM app screenshot
- `zen-project.jpg` - ZEN app screenshot

## 🌐 Deployment

### Vercel (Frontend)
```bash
npm i -g vercel
vercel
```
Set env: `VITE_API_URL=https://your-backend.onrender.com`

### Render (Backend)
1. Push to GitHub
2. render.com → New Web Service
3. Set env vars: `EMAIL_USER`, `EMAIL_PASS`

## 📝 License

MIT © Pradeep Arul
