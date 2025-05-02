# CV Library Search UI

A responsive job search page built using **Next.js** with tabbed navigation for job listings by **Location** and **Industry**. Styled with SCSS and designed to match CV Library’s branding.

---

## Features

-  Search form with labeled fields (keywords, location, distance)
-  Location auto-suggestions (via API)
-  Tab switching between “Jobs by Location” and “Jobs by Industry”
-  2-column, 6-row responsive layouts for both lists
-  SCSS-based modular styling
-  Clean, accessible layout built for scalability

---

##  Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [SCSS](https://sass-lang.com/)
- [CV-Library Location API](https://api.cv-library.co.uk/v1/locations?q=su)

---
##  Internationalization

Language files are stored in `public/locales/{lang}/common.json`.

Switch languages by navigating to `/en` or `/de` or using the `i18n.changeLanguage()` method.

---

##  Project Structure

```
components/
  ├── Header.js
  ├── LocationList.js
  ├── IndustryList.js
  ├── LocationAutocomplete.js
  └── TabSwitcher.js

pages/
  ├── index.js
  └── jobs.js

public/assets/
  ├── Logo white.svg
  └── search.svg

public/locales/
  ├── en/common.json
  └── de/common.json
## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/cv-library-search-ui.git
cd cv-library-search-ui
