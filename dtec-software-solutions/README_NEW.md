# DTEC Software Solutions — Frontend (React + Vite)

This repository contains the frontend single-page application for DTEC Software Solutions built with React (JSX) and Vite. It includes the public marketing pages (Home, About, Services, Products, Contact) and the shared UI components and styles.

This README documents how to run the project locally, where key files live, and how to make the most common edits (hero, products, about section, contact form).

## Quick start

Requirements:
- Node.js (16+ recommended)
- npm or yarn

Install dependencies and run the dev server from the `dtec-software-solutions` folder:

```powershell
cd dtec-software-solutions
npm install
npm run dev
```

This starts Vite at http://localhost:5173 (default); open the About and Products pages to preview changes.

To build the production bundle:

```powershell
npm run build
```

To preview the built app locally:

```powershell
npm run preview
```

## Project structure (annotated)

Top-level (this folder)
- `package.json` — scripts and dependencies for the frontend app
- `vite.config.js` — Vite config
- `index.html` — base HTML template

Public
- `public/` — static assets served as-is
  - `images/` — hero videos and images (A.mp4, pro.mp4, C.mp4, about.jpeg)
  - `fonts.css` — font imports
  - `debug-products.html` — small static preview used for layout debugging

Source
- `src/`
  - `main.jsx` — app entry point (mounts `<App />`)
  - `App.jsx` — top-level app wrapper and routes
  - `router.jsx` — React Router routes
  - `index.css`, `App.css`, `custom.scss` — global styles; `custom.scss` contains hero, page bands, product card, and about/objectives styling
  - `assets/` — extra static assets used by components
  - `components/` — React components (page and shared components)
    - `Navbar.jsx` — top navigation and floating navbar behavior
    - `Home.jsx` — landing page sections
    - `About.jsx` — About page (Who We Are, Mission, Vision, Objectives)
    - `Services.jsx`, `ServiceRequestModal.jsx` — Services section and modal
    - `Products.jsx` — product listing (zig-zag layout) and product card markup
    - `ProductDetail.jsx` — product detail page
    - `Contact.jsx` — contact form, offices, and map
    - `Footer.jsx` — site footer
  - `data/`
    - `products.js` — central product catalog (objects with `slug`, `name`, `img`, `desc`, `demoUrl`)

## Where to edit common things
- Hero video + overlay: `src/components/*` (hero markup) and `src/custom.scss` (styles .hero-video, .hero-overlay, .hero-content)
- Navbar behavior + active underline: `src/components/Navbar.jsx` and `src/custom.scss` under `.floating-navbar` rules
- About (mission/vision/objectives): `src/components/About.jsx` and `src/custom.scss` (selectors `.about-mission-vision`, `.about-objectives`, `.about-desc`, `.objective-sub`)
- Products text/data: `src/data/products.js` and `src/components/Products.jsx` (renders `product.desc`)
- Contact form: `src/components/Contact.jsx` and `.contact-form-card` styles in `src/custom.scss`

## Notes & best practices
- Product descriptions are plain strings in `src/data/products.js` and rendered as text in `Products.jsx`. If you need HTML in descriptions, update the renderer to use `dangerouslySetInnerHTML` cautiously.
- Styling is centralized in `src/custom.scss`. Prefer adding small, scoped classes rather than modifying the entire file for minimal impact.
- When changing hero videos or large images, optimize them (compress) and add the `preload` or `importance` attributes if needed for performance.

## Troubleshooting
- If a change doesn't appear, make sure the dev server is running and clear the browser cache or restart Vite (HMR sometimes needs a restart after structural changes).
- Run `npm run lint` to see JS linting errors. SCSS syntax errors will typically show in Vite terminal output.

## Want help implementing an Accenture-like element?
Tell me which component you want (sticky navbar, hero with overlay video, mega-nav, or insights card grid) and I will implement it and show the exact file edits.

---
Last updated: October 23, 2025
