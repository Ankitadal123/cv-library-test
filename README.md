# CV Library Search UI

A modern, responsive job search interface built with **Next.js**, featuring **location autocomplete**, **tabbed filtering**, and **internationalization (i18n)** using `next-i18next`. Styled with **SCSS**, the UI mimics the look and feel of the official CV-Library design.

---

##  Features

-  Keyword + location search with distance filtering
-  Location autocomplete (2+ character input via CV-Library API)
-  Tabbed navigation: Jobs by **Location** and **Industry**
-  Language support (English and German) via `next-i18next`
-  Fully responsive layout, clean SCSS-based styling
- Modularized components into /components directory
- Centralized all SCSS files under /styles with clear naming
- Applied responsive layout and pixel-perfect styling per XD design
- Enhanced LocationAutocomplete with lodash.debounce and API integration
- Structured job tabs using accessible and scalable grid

---

##  Tech Stack

- [Next.js](https://nextjs.org/) 15
- [React](https://reactjs.org/)
- [SCSS](https://sass-lang.com/)
- [next-i18next](https://github.com/i18next/next-i18next)
- [CV-Library Location API](https://api.cv-library.co.uk/v1/locations)

---

##  Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/cv-library-search-ui.git
cd cv-library-search-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

---

##  Internationalization

- Language files are in `public/locales/{lang}/common.json`
- Default locale is `en`, with support for `de`
- Visit `/de` in the browser or use `i18n.changeLanguage('de')` to switch

---

##  Project Structure

```
.
├── components/                  # Reusable UI components
│   ├── ErrorBoundary.js
│   ├── Header.js
│   ├── IndustryList.js
│   ├── LocationAutocomplete.js
│   ├── LocationList.js
│   └── TabSwitcher.js
├── pages/                       # Next.js routing (page views)
│   ├── _app.js
│   └── index.js
├── public/                      # Static files (images, favicon, etc.)
├── styles/                      # Modular SCSS styling by component
│   ├── Header.scss
│   ├── IndustryList.scss
│   ├── LocationAutocomplete.scss
│   ├── LocationList.scss
│   └── TabSwitcher.scss
├── utils/                       # Utility helpers
│   └── errorHandler.js
├── .gitignore                   # Files/folders to ignore in Git
├── eslint.config.mjs           # ESLint config for consistent linting
├── jsconfig.json               # Absolute path aliases for import convenience
├── next-i18next.config.js      # i18n configuration for translations
├── next.config.js              # Next.js configuration
├── package-lock.json           # Auto-generated lock file
├── package.json                # Project metadata and dependencies
└── README.md                   # Project overview and setup instructions


next-i18next.config.js
next.config.js
```

