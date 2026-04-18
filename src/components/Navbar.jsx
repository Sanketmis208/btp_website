// src/components/Navbar.jsx
// ─────────────────────────────────────────────
// Sticky top navigation bar.
// Props:
//   page       – current active page key (string)
//   setPage    – function to navigate to a page
//   activeDept – dept key if a dept page is active, else null
// ─────────────────────────────────────────────

import { useState } from 'react';
import { DEPTS } from '../data/departments';

const LOGO_URL = '/LNMIIT-Logo-Transperant-Background.png';

export default function Navbar({ page, setPage, activeDept }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const dept = activeDept ? DEPTS[activeDept] : null;

  const navigate = (target) => {
    setPage(target);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <nav className="navbar">
        <div className="navbar-inner">

          {/* Logo */}
          <div className="nav-logo" onClick={() => navigate('home')}>
            <img
              src={LOGO_URL}
              alt="LNMIIT Logo"
              className="logo-img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Desktop links */}
          <div className="nav-links">
            <button
              className={`nav-btn${page === 'home' ? ' active' : ''}`}
              onClick={() => navigate('home')}
            >
              Home
            </button>

            <button
              className={`nav-btn${page === 'about' ? ' active' : ''}`}
              onClick={() => navigate('about')}
            >
              About LNMIIT
            </button>

            {/* Show current dept pill when on a dept page */}
            {dept && (
              <div
                className="nav-dept-pill"
                style={{
                  color: dept.tagColor,
                  borderColor: `rgba(${dept.colorRgb},0.5)`,
                  background: `rgba(${dept.colorRgb},0.08)`,
                }}
              >
                <span>{dept.icon}</span>
                <span>{dept.abbr}</span>
              </div>
            )}
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile slide-in nav ── */}
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        <button className="nav-btn" onClick={() => navigate('home')}>
          Home
        </button>
        <button className="nav-btn" onClick={() => navigate('about')}>
          About LNMIIT
        </button>
        {Object.values(DEPTS).map((d) => (
          <button
            key={d.key}
            className="nav-btn"
            style={{ color: '#ffcc02' }}
            onClick={() => navigate(d.key)}
          >
            {d.icon} {d.abbr} Department
          </button>
        ))}
      </div>
    </>
  );
}
