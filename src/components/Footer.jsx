// src/components/Footer.jsx
// ─────────────────────────────────────────────
// Site-wide footer used in all three pages.
// Props:
//   setPage – navigation function from App.jsx
// ─────────────────────────────────────────────

import { DEPTS } from '../data/departments';

const LOGO_URL = '/LNMIIT-Logo-Transperant-Background.png';

export default function Footer({ setPage }) {
  const navigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">

          {/* Brand */}
          <div>
            <div className="footer-brand" style={{ marginBottom: 12 }}>
              <img
                src={LOGO_URL}
                alt="LNMIIT"
                className="footer-logo"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div className="footer-brand-text">
              The LNM Institute of Information Technology, Jaipur — empowering
              the next generation of engineers and innovators.
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <div className="footer-col-title">Quick Links</div>
            <div className="footer-links">
              <button className="footer-link" onClick={() => navigate('home')}>Home</button>
              <button className="footer-link" onClick={() => navigate('about')}>About LNMIIT</button>
              <button className="footer-link">Admissions</button>
              <button className="footer-link">Research</button>
              <button className="footer-link">Placements</button>
            </div>
          </div>

          {/* Departments */}
          <div className="footer-links-col">
            <div className="footer-col-title">Departments</div>
            <div className="footer-links">
              {Object.keys(DEPTS).map((k) => (
                <button key={k} className="footer-link" onClick={() => navigate(k)}>
                  {DEPTS[k].name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="footer-links-col">
            <div className="footer-col-title">Contact</div>
            <div className="footer-links">
              <span className="footer-link" style={{ cursor: 'default' }}>Rupa ki Nangal, Post-Sumel</span>
              <span className="footer-link" style={{ cursor: 'default' }}>Via Jamdoli, Jaipur – 302031</span>
              <span className="footer-link" style={{ cursor: 'default' }}>Rajasthan, India</span>
            </div>
          </div>
        </div>

        <div className="footer-copy">
          © 2025 The LNM Institute of Information Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
