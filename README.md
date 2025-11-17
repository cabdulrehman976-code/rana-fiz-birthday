# 🎉 Happy Birthday Rana Fiza! 🎂

A stunning, fully animated birthday website built with React, Vite, GSAP, and AOS animations.

![Birthday Website](https://img.shields.io/badge/Made%20with-Love-ff69b4?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

- 🎆 **Fireworks Intro** - Canvas-based fireworks animation on page load
- 💌 **Personal Message** - Typewriter effect with smooth animations
- 📸 **Memories Gallery** - Floating images with AOS effects (fade-up, zoom-in, slide)
- 😄 **Funny Section** - Interactive character that follows mouse movement
- 🏆 **Miss Aura Award** - Golden award card with confetti celebration
- 📱 **Fully Responsive** - Beautiful on all devices (mobile, tablet, desktop)
- 🎨 **Pastel Theme** - Soft colors with golden accents
- ⚡ **Smooth Animations** - GSAP + ScrollTrigger + AOS integration

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js (v16+) and npm installed on your machine.

### Installation

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the URL shown in terminal)

## 🎨 Customization

### 1. Update Personal Message

Edit `src/components/Message.jsx` and replace the placeholder message (line 15):

```javascript
const fullMessage = `Your custom birthday message here...`;
```

### 2. Add Memory Photos

Edit `src/components/Memories.jsx` and replace the placeholder images (line 29):

```javascript
const memories = [
  {
    id: 1,
    url: 'path/to/your/image1.jpg', // Replace this
    caption: 'Beautiful Moment',
    aos: 'fade-up',
  },
  // Add more memories...
];
```

**Recommended Image Setup:**
- Add your images to the `public` folder
- Reference them as: `url: '/your-image.jpg'`
- Or use external URLs: `url: 'https://...'`

### 3. Customize Colors

Edit `src/styles/global.css` to change the color scheme (line 11):

```css
:root {
  --primary-pink: #FFB6C1;      /* Change these */
  --primary-lavender: #E6E6FA;  /* to your */
  --primary-peach: #FFDAB9;     /* preferred colors */
  --gold: #FFD700;
  /* ... */
}
```

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## 🌐 Deploy to Vercel

### Method 1: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Choose your project settings
   - Confirm deployment

### Method 2: Using Vercel Dashboard

1. **Go to [Vercel](https://vercel.com)**

2. **Click "Add New Project"**

3. **Import your Git repository** (or upload the project folder)

4. **Configure:**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. **Click "Deploy"**

Your website will be live in seconds! 🎉

### Method 3: Deploy from Git

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect repository to Vercel**
   - Go to vercel.com and sign in
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Vite settings

3. **Deploy automatically**
   - Any push to main branch = auto-deployment

## 🎭 Other Deployment Options

### Netlify

1. Run `npm run build`
2. Drag `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Done!

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📂 Project Structure

```
├── public/              # Static assets
├── src/
│   ├── animations/      # GSAP animation utilities
│   │   └── gsapAnimations.js
│   ├── components/      # React components
│   │   ├── Hero.jsx     # Fireworks intro
│   │   ├── Message.jsx  # Personal message
│   │   ├── Memories.jsx # Photo gallery
│   │   ├── Funny.jsx    # Fun animations
│   │   └── Award.jsx    # Award section
│   ├── styles/          # CSS files
│   │   ├── global.css
│   │   ├── Hero.css
│   │   ├── Message.css
│   │   ├── Memories.css
│   │   ├── Funny.css
│   │   └── Award.css
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool & dev server
- **GSAP** - Professional-grade animations
- **ScrollTrigger** - Scroll-based animations
- **AOS** - Animate on scroll library
- **Lottie React** - Lottie animation support
- **React Confetti** - Confetti effects

## 🎯 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Tips

1. **Performance**: Compress images before adding them to reduce load time
2. **Testing**: Test on mobile devices for best responsive experience
3. **Customization**: Feel free to modify animations, colors, and content
4. **Fonts**: Using Google Fonts (Poppins & Playfair Display)

## 🐛 Troubleshooting

### Development server not starting?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build errors?
```bash
# Make sure all dependencies are installed
npm install gsap aos lottie-react react-confetti
```

### Animations not working?
- Check browser console for errors
- Ensure all CSS files are imported
- Clear browser cache

## 📄 License

This project is created for personal use. Feel free to customize it for your own birthday celebrations! 🎊

## 💖 Made with Love

Created with ❤️ for Rana Fiza's special day!

---

## 🎉 Happy Birthday! 🎂

**Remember to customize the message, add photos, and make it personal!**

For questions or issues, check the troubleshooting section above.

Enjoy celebrating! 🎈✨

