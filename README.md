# StrengthHub Online — Website

Marketing website for StrengthHub Online, an Australian fitness and wellbeing
platform for students and young adults. Built with Vite, React, TypeScript and
Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:5173.

## Environment variables

The contact form submits to Supabase. Copy `.env.example` to `.env` and fill in:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

The site builds and runs without these; the contact form just reports that it is
not configured until they are provided.

## Project structure

```
index.html              App entry HTML
src/
  main.tsx              React entry point
  App.tsx               Router (path-based, no client-side routing library)
  index.css             Tailwind layers + animations
  components/           UI sections (Navbar, Hero, ContactForm, ...)
  hooks/                useScrollAnimation (scroll reveal)
  lib/supabase.ts       Supabase client
public/                 Static assets served from the site root
```

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## Deploy to Firebase Hosting

1. Install the CLI and sign in: `npm i -g firebase-tools && firebase login`
2. Set your project ID in `.firebaserc` (replace the placeholder), or run
   `firebase use --add`.
3. Build and deploy:

```bash
npm run build
firebase deploy --only hosting
```

`firebase.json` serves `dist/` and rewrites all routes to `index.html` so the
path-based pages (`/platform`, `/universities`, `/about`, `/privacy`) work.
