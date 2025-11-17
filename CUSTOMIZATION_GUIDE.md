# 🎨 Customization Guide

Quick reference for personalizing your birthday website!

## 📝 1. Change the Birthday Message

**File:** `src/components/Message.jsx`

**Line 15** - Replace the entire message:

```javascript
const fullMessage = `Dear Rana Fiza,

[YOUR PERSONAL MESSAGE HERE]

With all my love and best wishes,
Your Friend 💕`;
```

---

## 📸 2. Add Your Photos

**File:** `src/components/Memories.jsx`

**Step 1:** Add images to the `public` folder
- Create a folder: `public/images`
- Add your photos: `public/images/photo1.jpg`, `photo2.jpg`, etc.

**Step 2:** Update the memories array (Line 29):

```javascript
const memories = [
  {
    id: 1,
    url: '/images/photo1.jpg',        // Your image path
    caption: 'Amazing Day Together',   // Your caption
    aos: 'fade-up',                    // Animation style
  },
  {
    id: 2,
    url: '/images/photo2.jpg',
    caption: 'Fun Times',
    aos: 'zoom-in',
  },
  // Add as many as you want!
];
```

**Animation Options (aos property):**
- `fade-up` - Fades in from bottom
- `fade-down` - Fades in from top
- `fade-left` - Slides in from right
- `fade-right` - Slides in from left
- `zoom-in` - Zooms in
- `flip-up` - Flips up
- `flip-left` - Flips from left
- `flip-right` - Flips from right

---

## 🎨 3. Change Colors

**File:** `src/styles/global.css`

**Lines 11-21** - Update color variables:

```css
:root {
  /* Pastel Colors - Change these! */
  --primary-pink: #FFB6C1;      /* Soft pink */
  --primary-lavender: #E6E6FA;  /* Lavender */
  --primary-peach: #FFDAB9;     /* Peach */
  --primary-mint: #F0FFF0;      /* Mint green */
  --primary-sky: #E0F7FA;       /* Sky blue */
  
  /* Golden Accents */
  --gold: #FFD700;              /* Gold */
  --gold-light: #FFF8DC;        /* Light gold */
  --gold-dark: #DAA520;         /* Dark gold */
}
```

**Color Suggestions:**
- Romantic: Pinks, reds, roses
- Elegant: Gold, silver, white
- Fun: Bright colors, rainbow
- Classic: Navy, gold, cream

---

## 👤 4. Change the Name

**File:** `src/components/Award.jsx`

**Line 40** - Update the award name:

```jsx
<h1 className="award-name gradient-text glow-text">RANA FIZA</h1>
```

Replace `RANA FIZA` with any name!

**Also update:**
- `index.html` (Line 7) - Browser title
- `README.md` (Line 1) - Documentation

---

## ⏱️ 5. Adjust Animation Speed

### Fireworks Duration
**File:** `src/components/Hero.jsx`
**Line 83** - Change delay:

```javascript
setTimeout(() => {
  setShowText(true);
}, 3000); // Change 3000 to any milliseconds (3000 = 3 seconds)
```

### Typewriter Speed
**File:** `src/components/Message.jsx`
**Line 44** - Change typing speed:

```javascript
const typingSpeed = 30; // Lower = faster, Higher = slower
```

### Confetti Amount
**File:** `src/components/Award.jsx`
**Line 55** - Change particle count:

```jsx
<Confetti
  numberOfPieces={200}  // Change this number (50-500 recommended)
/>
```

---

## 🎭 6. Add More Memory Photos

You can add as many photos as you want!

**File:** `src/components/Memories.jsx`

```javascript
const memories = [
  // Existing photos...
  {
    id: 6,
    url: '/images/photo6.jpg',
    caption: 'Another Memory',
    aos: 'fade-up',
  },
  {
    id: 7,
    url: '/images/photo7.jpg',
    caption: 'More Fun',
    aos: 'zoom-in',
  },
  // Keep adding!
];
```

The grid will automatically adjust!

---

## 💬 7. Change Funny Quote

**File:** `src/components/Funny.jsx`
**Lines 101-106** - Update quote:

```jsx
<p className="quote-text">
  "Your custom funny quote here!"
</p>
<div className="quote-author">- Your Name 😊</div>
```

---

## 🎊 8. Customize Award Text

**File:** `src/components/Award.jsx`

**Award Title (Line 37):**
```jsx
<h3 className="award-title">MISS AURA</h3>
```

**Award Description (Line 53):**
```jsx
<p className="award-description">
  Your custom award description here!
</p>
```

**Footer Message (Line 72):**
```jsx
<p className="award-message">
  Your closing message here! ✨
</p>
```

---

## 🌐 9. Update Page Title & Favicon

**File:** `index.html`

**Line 4** - Change favicon:
```html
<link rel="icon" type="image/svg+xml" href="/your-icon.png" />
```

**Line 7** - Change browser title:
```html
<title>Happy Birthday [Name]! 🎉</title>
```

---

## 📱 10. Test Responsiveness

After customization:

1. **Desktop:** Open in browser normally
2. **Mobile:** Open browser DevTools (F12) → Toggle device toolbar
3. **Test different screen sizes:**
   - iPhone (375px)
   - iPad (768px)
   - Desktop (1200px+)

---

## 🚀 Quick Testing Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 💡 Pro Tips

1. **Image Optimization:**
   - Use compressed images (< 500KB each)
   - Recommended size: 400-800px wide
   - Formats: JPG, PNG, or WebP

2. **Message Length:**
   - Keep message under 500 words for best effect
   - Use line breaks for readability

3. **Colors:**
   - Use a color picker tool to get hex codes
   - Test contrast for readability
   - Stick to 3-5 main colors

4. **Photos:**
   - Use high-quality images
   - Consistent aspect ratio looks better
   - 4-6 photos work best

5. **Testing:**
   - Always preview before deploying
   - Test on actual mobile device
   - Check different browsers

---

## 🆘 Common Issues

**Images not showing?**
- Check file path is correct
- Make sure images are in `public` folder
- Use `/` at start of path: `/images/photo.jpg`

**Animations laggy?**
- Reduce number of confetti particles
- Compress images
- Test on different device

**Colors not updating?**
- Clear browser cache (Ctrl+Shift+R)
- Check CSS variable names are correct
- Restart dev server

---

## 📞 Need Help?

Check the main README.md for troubleshooting section!

Happy customizing! 🎨✨

