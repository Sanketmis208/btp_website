# LNMIIT Portal — React Project Structure

```
lnmiit-portal/
├── public/
│   ├── LNMIIT-Logo-Transperant-Background.png   ← put your logo here
│   └── LNMIIT-VIEW.jpg                          ← put your campus image here
│
├── src/
│   ├── data/
│   │   └── departments.js       ← all department data (DEPTS object)
│   │
│   ├── styles/
│   │   └── index.css            ← all global CSS variables & styles
│   │
│   ├── components/
│   │   ├── Navbar.jsx            ← sticky navbar + mobile nav
│   │   ├── Footer.jsx            ← site footer
│   │   ├── DeptCard.jsx          ← single department card (used on Home)
│   │   └── LoaderBar.jsx         ← top loading progress bar
│   │
│   ├── pages/
│   │   ├── HomePage.jsx          ← hero, stats bar, dept grid, campus section
│   │   ├── DeptPage.jsx          ← individual department detail page
│   │   └── AboutPage.jsx         ← about LNMIIT page
│   │
│   ├── App.jsx                   ← root component, routing logic
│   └── main.jsx                  ← React entry point (ReactDOM.createRoot)
│
├── index.html                    ← HTML shell (Vite/CRA entry)
├── package.json
└── vite.config.js                ← if using Vite (recommended)
```
