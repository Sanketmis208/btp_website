// src/pages/AboutPage.jsx
// ─────────────────────────────────────────────
// About LNMIIT page.
// Renders: Hero → Vision/Mission cards → Dept list → Footer
// Props:
//   setPage – navigation function from App.jsx
// ─────────────────────────────────────────────

import { DEPTS } from '../data/departments';
import Footer from '../components/Footer';

const ABOUT_CARDS = [
  {
    icon: '🎯',
    title: 'Our Vision',
    text: 'To be a globally recognised institution for creating intellectual capital, knowledge, and innovation in science, engineering, and technology while contributing to sustainable development and national progress.',
  },
  {
    icon: '🚀',
    title: 'Our Mission',
    text: 'To provide an environment of academic excellence that nurtures talent, encourages innovation, and instils values of integrity and social responsibility in our graduates.',
  },
  {
    icon: '🏆',
    title: 'Accreditation',
    text: 'Ranked among the top engineering institutions in India, accredited with NAAC A+ grade and recognized by NIRF in the top 100 engineering colleges nationally.',
  },
  {
    icon: '🌍',
    title: 'Global Connect',
    text: 'Active research collaborations with 50+ universities worldwide, international exchange programs, and partnerships with leading industry organisations globally.',
  },
];

export default function AboutPage({ setPage }) {
  const navigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="about-page page-enter">

      {/* ── About Hero ── */}
      <div className="about-hero">
        <div className="about-hero-content">
          <div
            style={{
              marginBottom: 24,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(216,67,21,0.8)',
              borderRadius: 3,
              padding: '5px 16px',
              fontSize: 12,
              fontWeight: 700,
              color: 'white',
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            Our Story
          </div>

          <h1 className="about-hero-title">
            Shaping Minds,<br />
            <span style={{ color: '#ffcc02' }}>Engineering</span> the Future
          </h1>

          <p className="about-hero-desc">
            Since 2002, the LNM Institute of Information Technology has been a
            beacon of academic excellence, research innovation, and
            transformative education in India.
          </p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="about-content">

        {/* Vision / Mission / etc. cards */}
        <div className="about-grid">
          {ABOUT_CARDS.map((card, i) => (
            <div key={i} className="about-card">
              <div className="about-card-icon">{card.icon}</div>
              <div className="about-card-title">{card.title}</div>
              <div className="about-card-text">{card.text}</div>
            </div>
          ))}
        </div>

        {/* Department list */}
        <div className="about-depts-title">Academic Departments</div>
        {Object.values(DEPTS).map((dept) => (
          <div
            key={dept.key}
            className="about-dept-row"
            onClick={() => navigate(dept.key)}
          >
            <div
              className="about-dept-dot"
              style={{ background: dept.color }}
            />
            <div>
              <div className="about-dept-name">{dept.abbr}</div>
              <div className="about-dept-full">{dept.name}</div>
            </div>
            <div className="about-dept-arrow">→</div>
          </div>
        ))}
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
