# 📸 How to Add Your Images

## ❌ Current Status
The images are not showing because the `public/images/` folder is **empty**.

---

## ✅ Quick Fix - 3 Steps

### Step 1: Locate Your Photos
Find the 6 photos you want to use:
- 1 main birthday photo (Rana Fiza)
- 5 memory photos

### Step 2: Copy to This Folder
```
D:\ORG RANA BIRTHADAY\public\images\
```

### Step 3: Rename Them Exactly
```
main-page.jpg    ← Main birthday photo (hero section)
memory1.jpg      ← Memory photo 1
memory2.jpg      ← Memory photo 2
memory3.jpg      ← Memory photo 3
memory4.jpg      ← Memory photo 4
memory5.jpg      ← Memory photo 5
```

---

## 🎯 Detailed Instructions

### For Windows Users:

1. **Open File Explorer**
   - Navigate to: `D:\ORG RANA BIRTHADAY\public\images\`

2. **Copy Your Photos**
   - Select your 6 photos
   - Copy them (Ctrl + C)
   - Paste in the images folder (Ctrl + V)

3. **Rename Each Photo**
   - Right-click → Rename
   - Use exact names: `main-page.jpg`, `memory1.jpg`, etc.
   - ⚠️ **Important:** Use hyphens, not spaces!

---

## 📝 File Naming Rules

### ✅ Correct Names:
```
main-page.jpg    (with hyphen)
memory1.jpg
memory2.jpg
```

### ❌ Wrong Names:
```
main page.jpg    (space - wrong!)
Main-Page.jpg    (capital letters - wrong!)
memory-1.jpg     (extra hyphen - wrong!)
Memory1.JPG      (capital extension - wrong!)
```

---

## 🔄 After Adding Images

1. **Update the code** - Change back to local paths:

**In `src/components/Hero.jsx` (line 177):**
```javascript
// Change from:
src="https://images.unsplash.com/..."

// To:
src="/images/main-page.jpg"
```

**In `src/components/Memories.jsx` (line 36-60):**
```javascript
// Change from:
url: 'https://images.unsplash.com/...'

// To:
url: '/images/memory1.jpg'
url: '/images/memory2.jpg'
url: '/images/memory3.jpg'
url: '/images/memory4.jpg'
url: '/images/memory5.jpg'
```

2. **Hard refresh browser:** `Ctrl + Shift + R`

---

## 🎨 Image Requirements

### Size:
- Width: 400-800px (recommended)
- Height: Any
- File size: Under 2MB each

### Format:
- ✅ JPG / JPEG
- ✅ PNG
- ✅ WebP

### Quality:
- Use clear, well-lit photos
- Avoid blurry images
- Portrait or square photos work best

---

## 🆘 Troubleshooting

### Images still not showing?

**Check 1: File location**
```bash
# These files should exist:
D:\ORG RANA BIRTHADAY\public\images\main-page.jpg
D:\ORG RANA BIRTHADAY\public\images\memory1.jpg
D:\ORG RANA BIRTHADAY\public\images\memory2.jpg
D:\ORG RANA BIRTHADAY\public\images\memory3.jpg
D:\ORG RANA BIRTHADAY\public\images\memory4.jpg
D:\ORG RANA BIRTHADAY\public\images\memory5.jpg
```

**Check 2: File names**
- Must be lowercase
- Must use hyphens (not spaces)
- Must have `.jpg` extension (lowercase)

**Check 3: Code updated**
- Make sure you changed the URLs back to `/images/...`
- Save all files
- Hard refresh browser

**Check 4: Browser**
- Press F12 → Console tab
- Look for image loading errors
- Check Network tab for 404 errors

---

## 💡 Quick Test

Run this in PowerShell to see what's in your images folder:
```powershell
Get-ChildItem "D:\ORG RANA BIRTHADAY\public\images\"
```

You should see 6 image files!

---

## 🎯 Current Temporary Solution

I've added **placeholder images from Unsplash** so you can see how it looks while you prepare your actual photos.

**To use your real photos:**
1. Add them to `public/images/`
2. Update the code (instructions above)
3. Refresh browser

---

**The website will look AMAZING with your actual photos!** 📸💜

