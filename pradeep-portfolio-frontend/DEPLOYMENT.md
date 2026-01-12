# 🚀 Deploying to Vercel

This guide will walk you through deploying your portfolio to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free)
- [Git](https://git-scm.com/) installed
- [Node.js](https://nodejs.org/) installed

## Method 1: Deploy via Vercel CLI (Recommended)

### Step 1: Install Vercel CLI

```powershell
npm install -g vercel
```

### Step 2: Login to Vercel

```powershell
vercel login
```

Follow the prompts to authenticate with your Vercel account.

### Step 3: Initialize Git Repository (if not already done)

```powershell
cd d:\pp\React_Projects\Portfolio\pradeep-portfolio
git init
git add .
git commit -m "Initial commit - Portfolio ready for deployment"
```

### Step 4: Deploy to Vercel

```powershell
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **Project name?** → Press Enter (or customize)
- **In which directory is your code located?** → Press Enter (./)
- **Want to override settings?** → No

Your site will be deployed! You'll get a preview URL like `https://pradeep-portfolio-xxx.vercel.app`

### Step 5: Deploy to Production

```powershell
vercel --prod
```

This deploys to your production domain.

## Method 2: Deploy via Vercel Dashboard

### Step 1: Push to GitHub

1. Create a new repository on [GitHub](https://github.com/new)
2. Initialize and push your code:

```powershell
cd d:\pp\React_Projects\Portfolio\pradeep-portfolio
git init
git add .
git commit -m "Initial commit - Portfolio ready for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**

## 🔧 Backend Deployment (Contact Form)

Your contact form requires a backend API. You have two options:

### Option A: Deploy Backend to Render

1. Go to [Render](https://render.com/)
2. Create a new **Web Service**
3. Connect your backend repository
4. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment Variables:** Add your email credentials
5. Copy the deployed URL (e.g., `https://your-backend.onrender.com`)

### Option B: Use Vercel Serverless Functions

Convert your Express backend to Vercel serverless functions (requires code changes).

### Update Frontend API URL

After deploying the backend, update the API URL in your frontend:

**File:** `src/components/sections/ContactSection.jsx`

```javascript
// Change line 34 from:
const response = await axios.post('http://localhost:5000/api/contact', formData);

// To:
const response = await axios.post('https://your-backend-url.onrender.com/api/contact', formData);
```

Then redeploy:
```powershell
vercel --prod
```

## 🌐 Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Add your custom domain
4. Update DNS records as instructed by Vercel

## 📝 Environment Variables

If you need environment variables:

1. Go to **Project Settings** → **Environment Variables**
2. Add variables (e.g., `VITE_API_URL`)
3. Redeploy for changes to take effect

## ✅ Post-Deployment Checklist

- [ ] Visit your deployed site
- [ ] Test all navigation links
- [ ] Verify GitHub and LinkedIn links work
- [ ] Test contact form (after backend deployment)
- [ ] Check responsive design on mobile
- [ ] Verify all images load correctly
- [ ] Test resume download button

## 🔄 Updating Your Site

After making changes:

```powershell
git add .
git commit -m "Your commit message"
git push
```

Vercel will automatically redeploy! 🎉

## 🆘 Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

### 404 Errors
- Verify `vercel.json` is present
- Check that rewrites are configured correctly

### Contact Form Not Working
- Ensure backend is deployed and running
- Check API URL in `ContactSection.jsx`
- Verify CORS is enabled in backend

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
