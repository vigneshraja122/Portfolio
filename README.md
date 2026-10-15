# Vignesh Raja — Portfolio

A highly attractive Next.js portfolio with hyper motion animations built using:
- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **Framer Motion** (hyper animations)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── layout.js       # Root layout + metadata
│   ├── page.js         # Main page
│   └── globals.css     # Global styles, animations
├── components/
│   ├── Navbar.jsx      # Sticky glass navbar + mobile menu
│   ├── Hero.jsx        # Animated hero with 3D profile card + typing text
│   ├── About.jsx       # About section with stats
│   ├── Skills.jsx      # Animated skill bars
│   ├── Experience.jsx  # Timeline work experience
│   ├── Projects.jsx    # Filterable project grid
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx
```

## Add Your Photo

Replace the initials avatar in `components/Hero.jsx` inside the `ProfileCard` component:

1. Place your photo in `/public/profile.jpg`
2. In `Hero.jsx`, replace the avatar `<div>` block with:

```jsx
import Image from 'next/image'
// Inside ProfileCard return, replace the inner div content:
<Image
  src="/profile.jpg"
  alt="Vignesh Raja"
  fill
  className="object-cover"
  priority
/>
```

## Add Resume Download

Place your resume PDF at `/public/Vignesh_Raja_Resume.pdf` to enable the download button.

## Contact Form

The contact form is currently in demo mode (simulates a send). To make it real, integrate one of:
- **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"` to the `<form>` and remove the custom handler
- **EmailJS**: `npm install @emailjs/browser` and use `emailjs.send(...)`
- **Next.js API route**: Create `app/api/contact/route.js` with Nodemailer or Resend

## Deploy

```bash
# Deploy to Vercel (recommended)
npx vercel

# Or build for production
npm run build
npm start
```
