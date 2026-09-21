# Deploying Mehnoor's Portfolio to Vercel

This project is fully pre-configured for Vercel with [`vercel.json`](./vercel.json) and a clean Git repository.

---

## Method 1: Deploy via GitHub (Recommended)

This gives you automatic CI/CD builds every time you push changes to GitHub.

### Step 1: Create a Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Name the repository: `mehnoor-portfolio` (or your preferred name).
3. Leave "Initialize this repository with a README" **unchecked** (the project is already committed locally).
4. Click **Create repository**.

### Step 2: Push your local code to GitHub
Run the following commands in your terminal inside `/Users/dawoodayoobshiekh/Desktop/mehnoor'sPortfolio`:

```bash
git remote add origin https://github.com/MehnoorRafiqi18/mehnoor-portfolio.git
git branch -M main
git push -u origin main
```

*(If using SSH: `git remote add origin git@github.com:MehnoorRafiqi18/mehnoor-portfolio.git`)*

### Step 3: Import to Vercel
1. Go to [vercel.com/new](https://vercel.com/new) and sign in with your GitHub account.
2. Click **Import** next to `mehnoor-portfolio`.
3. Vercel automatically detects:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.
5. In ~30 seconds, your site will be live at `https://mehnoor-portfolio.vercel.app`!

---

## Method 2: Deploy directly via Vercel CLI

If you want to deploy directly from your machine without creating a GitHub repository first:

1. Open your terminal in this directory:
   ```bash
   cd "/Users/dawoodayoobshiekh/Desktop/mehnoor'sPortfolio"
   ```
2. Run Vercel deploy:
   ```bash
   npx vercel
   ```
3. Follow the prompt to log in to Vercel in your browser.
4. Answer the prompts (press Enter to accept defaults):
   - Set up and deploy? **Y**
   - Which scope? **Select your account**
   - Link to existing project? **N**
   - What's your project's name? **mehnoor-portfolio**
   - In which directory is your code located? **./**
5. For production deployment, run:
   ```bash
   npx vercel --prod
   ```

---

## Included Vercel Configuration ([vercel.json](./vercel.json))
```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
This guarantees that Single Page App routing and all asset paths work without 404 errors.
