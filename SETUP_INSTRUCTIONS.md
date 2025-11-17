# 🚀 Setup Instructions

Complete step-by-step guide to get your birthday website running!

---

## ✅ Prerequisites

Before starting, make sure you have:

- [ ] **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- [ ] **Code Editor** - VS Code recommended
- [ ] **Terminal/Command Prompt** access
- [ ] **Web Browser** - Chrome recommended

To check if Node.js is installed:
```bash
node --version
# Should show: v16.x.x or higher
```

---

## 📦 Step 1: Install Dependencies

Open terminal in the project folder and run:

```bash
npm install
```

This will install:
- React & React DOM
- Vite (build tool)
- GSAP (animations)
- AOS (scroll animations)
- Lottie React
- React Confetti

**Wait time:** 1-3 minutes depending on internet speed

---

## 🎯 Step 2: Start Development Server

```bash
npm run dev
```

You should see:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

---

## 🌐 Step 3: Open in Browser

1. **Open your browser**
2. **Go to:** `http://localhost:5173`
3. **You should see:** Fireworks animation! 🎆

If you see the fireworks, **congratulations!** Everything is working! 🎉

---

## 🎨 Step 4: Customize Content

Now make it personal! Follow these steps:

### A. Update the Message

1. Open `src/components/Message.jsx`
2. Find line 15 (the `fullMessage` variable)
3. Replace with your personal message
4. **Save the file**
5. Browser will auto-refresh! ✨

### B. Add Photos

1. Create folder: `public/images`
2. Add your photos (e.g., `photo1.jpg`, `photo2.jpg`)
3. Open `src/components/Memories.jsx`
4. Update the `memories` array (line 29):
   ```javascript
   {
     id: 1,
     url: '/images/photo1.jpg',
     caption: 'Your Caption',
     aos: 'fade-up',
   }
   ```
5. **Save** and check browser!

### C. Change the Name

1. Open `src/components/Award.jsx`
2. Line 40: Change `RANA FIZA` to desired name
3. Open `index.html`
4. Line 7: Update page title
5. **Save both files**

For more customization, see **CUSTOMIZATION_GUIDE.md**

---

## 🏗️ Step 5: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with optimized files.

---

## 🚀 Step 6: Deploy to Vercel

### Option A: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow prompts:**
   - Project name: (press Enter)
   - Link to existing project: N
   - Settings ok: Y

5. **Done!** You'll get a live URL like: `https://your-project.vercel.app`

### Option B: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login (free)
3. Click **"Add New Project"**
4. **Upload the project folder** or connect Git repo
5. Settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **"Deploy"**
7. Wait 30-60 seconds
8. **Done!** Click the URL to view

---

## 📋 Step 7: Final Checklist

Before deploying, verify:

- [ ] Personal message is updated
- [ ] Photos are added and showing correctly
- [ ] Name is changed in all places
- [ ] Colors match your preference (optional)
- [ ] Tested on mobile view (F12 → Toggle device)
- [ ] All animations work smoothly
- [ ] No console errors (F12 → Console tab)

---

## 🔧 Troubleshooting

### Problem: `npm install` fails

**Solution:**
```bash
# Clear cache and try again
npm cache clean --force
npm install
```

### Problem: Port 5173 already in use

**Solution:**
```bash
# Kill the process or use different port
npm run dev -- --port 3000
```

### Problem: Images not showing

**Solution:**
- Check image path: Must start with `/` like `/images/photo.jpg`
- Ensure images are in `public` folder
- Check file name spelling (case-sensitive!)
- Supported formats: JPG, PNG, WebP, GIF

### Problem: Blank page

**Solution:**
```bash
# Stop server (Ctrl+C)
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Problem: Animations not working

**Solution:**
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors (F12)
- Try different browser
- Update Node.js to latest version

### Problem: Build fails

**Solution:**
```bash
# Check for syntax errors in your customizations
# Look at terminal error message
# Common: Missing quotes, brackets, or commas
```

---

## 📱 Testing on Mobile

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Get your computer's IP address:**
   - Windows: `ipconfig` → look for IPv4
   - Mac/Linux: `ifconfig` → look for inet

3. **On mobile browser, visit:**
   ```
   http://YOUR_IP_ADDRESS:5173
   ```
   Example: `http://192.168.1.5:5173`

4. **Make sure:**
   - Mobile and computer on same WiFi
   - Firewall allows connection

---

## 🎓 Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Install a new package
npm install package-name

# Clear cache and reinstall
rm -rf node_modules package-lock.json && npm install
```

---

## 📚 Project Structure Quick Reference

```
your-project/
├── public/              ← Put images here
│   └── images/          ← Your photos
├── src/
│   ├── components/      ← React components
│   │   ├── Hero.jsx     ← Fireworks section
│   │   ├── Message.jsx  ← Your message (EDIT THIS)
│   │   ├── Memories.jsx ← Photos (EDIT THIS)
│   │   ├── Funny.jsx    ← Fun animations
│   │   └── Award.jsx    ← Award section (EDIT THIS)
│   ├── styles/          ← CSS styling
│   ├── animations/      ← GSAP animations
│   ├── App.jsx          ← Main component
│   └── main.jsx         ← Entry point
├── index.html           ← HTML template (EDIT TITLE)
├── package.json         ← Dependencies
└── README.md            ← Documentation
```

---

## 💡 Pro Tips

1. **Auto-reload:** Changes automatically refresh in browser
2. **Console:** Press F12 to see errors (useful for debugging)
3. **Mobile testing:** Use DevTools device toggle (F12 → phone icon)
4. **Image size:** Keep images under 500KB for faster loading
5. **Git:** Consider backing up to GitHub before deploying

---

## 🎉 You're Ready!

Follow these steps in order, and you'll have a beautiful birthday website live in under 30 minutes!

**Need more help?**
- See `CUSTOMIZATION_GUIDE.md` for detailed customization
- See `README.md` for general information
- Check browser console (F12) for error messages

---

## 📞 Quick Help

**Can't install?** → Check Node.js version (need v16+)

**Can't customize?** → See CUSTOMIZATION_GUIDE.md

**Can't deploy?** → Try Vercel dashboard method (easier)

**Something broke?** → Reinstall: `rm -rf node_modules && npm install`

---

## ✅ Success Checklist

After completing setup:

- [ ] Dev server runs (`npm run dev`)
- [ ] Website opens in browser
- [ ] Fireworks animation shows
- [ ] All sections scroll smoothly
- [ ] Message is personalized
- [ ] Photos are added
- [ ] Mobile view looks good
- [ ] Deployed to Vercel
- [ ] Shared URL with recipient!

---

**Happy Birthday Website Building! 🎂🎉✨**

