// src/pages/HomePage.jsx
// ─────────────────────────────────────────────
// Renders: Hero → Stats Bar → Dept Grid → Campus Section → Footer
// Props:
//   setPage – navigation function from App.jsx
// ─────────────────────────────────────────────

import { useCallback } from 'react';
import { DEPTS } from '../data/departments';
import DeptCard from '../components/DeptCard';
import Footer from '../components/Footer';

const LOGO_URL   = '/LNMIIT-Logo-Transperant-Background.png';
const CAMPUS_URL = '/LNMIIT-VIEW.jpg';

const HOME_STATS = [
  { num: '25+',    label: 'Years of Excellence' },
  { num: '4',      label: 'Departments' },
  { num: '4,000+', label: 'Students' },
  { num: '147+',   label: 'Faculty Members' },
  { num: 'NAAC A+',label: 'Accreditation' },
];

const CAMPUS_STATS = [
  { num: '250 Acres', label: 'Campus Area' },
  { num: '80+',       label: 'Research Labs' },
  { num: '40+',       label: 'Clubs & Societies' },
  { num: '100%',      label: 'Wi-Fi Connected' },
];

export default function HomePage({ setPage }) {
  const handleDeptClick = useCallback(
    (key) => {
      setPage(key);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [setPage]
  );

  return (
    <div className="page-enter">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-image-wrap">
          <img src={CAMPUS_URL} alt="LNMIIT Campus" />
        </div>

        <div className="hero-top-bar" />

        <div className="hero-content">
          <div className="hero-text">
            <h1
              className="hero-title"
              style={{ animation: 'fadeSlideDown 0.7s 0.15s ease both' }}
            >
              Igniting Minds,<br />
              <span className="accent">Empowering Future</span>
            </h1>

            <p
              className="hero-sub"
              style={{ animation: 'fadeSlideDown 0.7s 0.3s ease both' }}
            >
              The LNM Institute of Information Technology — a premier technical
              institution in Jaipur, shaping tomorrow's innovators through
              research, excellence, and holistic education.
            </p>

            <div
              className="hero-cta"
              style={{ animation: 'fadeSlideDown 0.7s 0.45s ease both' }}
            >
              <button
                className="btn-primary"
                onClick={() =>
                  document
                    .getElementById('departments')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Explore Departments ↓
              </button>

              <button
                className="btn-secondary"
                onClick={() => setPage('about')}
              >
                About the Institute
              </button>
            </div>
          </div>
        </div>

        {/* Floating institute badge */}
        <div className="hero-institute-badge">
          <img
            src={LOGO_URL}
            alt="LNMIIT"
            className="institute-badge-logo"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="institute-badge-text">
            The LNM Institute<br />of Information Technology
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="stats-bar">
        {HOME_STATS.map((s, i) => (
          <div key={i} className="stat-item">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Departments Grid ── */}
      <div id="departments" className="section">
        <div className="section-header">
          <div className="section-label">Our Academics</div>
          <div className="section-title-wrap">
            <h2 className="section-title">
              Choose Your <span className="dim">Department</span>
            </h2>
          </div>
          <p className="section-desc">
            Four specialized departments united on one portal. Explore courses,
            faculty, and research opportunities.
          </p>
        </div>

        <div className="dept-grid">
          {Object.values(DEPTS).map((dept) => (
            <DeptCard
              key={dept.key}
              dept={dept}
              onClick={() => handleDeptClick(dept.key)}
            />
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* ── Campus Section ── */}
      <div className="campus-section">
        <div className="campus-inner">
          <div className="campus-img-wrap">
            <img src={CAMPUS_URL} alt="LNMIIT Campus Aerial View" />
          </div>

          <div className="campus-text">
            <div className="campus-label">Our Campus</div>
            <h2 className="campus-title">
              Leading by Focus<br />on Research
            </h2>
            <p className="campus-desc">
              Explore the Ph.D. programs in Engineering, Sciences, Humanities,
              and Social Sciences at LNMIIT, Jaipur. Discover additional
              information about the research endeavors within the institute and
              its state-of-the-art facilities.
            </p>

            <div className="campus-stats">
              {CAMPUS_STATS.map((s, i) => (
                <div key={i} className="campus-stat">
                  <div className="campus-stat-num">{s.num}</div>
                  <div className="campus-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
