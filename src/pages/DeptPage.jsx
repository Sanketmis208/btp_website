// src/pages/DeptPage.jsx
// ─────────────────────────────────────────────
// Individual department detail page.
// Renders: Hero → Highlights → Courses → Faculty → Footer
// Props:
//   deptKey – one of 'cse' | 'cce' | 'me' | 'ece'
//   setPage – navigation function from App.jsx
// ─────────────────────────────────────────────

import { DEPTS } from '../data/departments';
import Footer from '../components/Footer';

export default function DeptPage({ deptKey, setPage }) {
  const dept = DEPTS[deptKey];
  if (!dept) return null;

  const goHome = () => {
    setPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="dept-page page-enter">

      {/* ── Dept Hero ── */}
      <div className="dept-hero">
        <div
          className="dept-hero-bg"
          style={{
            background: `
              radial-gradient(ellipse 70% 90% at 90% 50%, rgba(${dept.colorRgb},0.07) 0%, transparent 60%),
              radial-gradient(ellipse 50% 60% at 10% 80%, rgba(${dept.colorRgb},0.04) 0%, transparent 50%)
            `,
          }}
        />

        <div className="dept-hero-content">
          <button className="dept-back" onClick={goHome}>
            ← Back to Portal
          </button>

          <div
            className="dept-hero-tag"
            style={{
              color: dept.tagColor,
              background: `rgba(${dept.colorRgb},0.1)`,
              border: `1px solid rgba(${dept.colorRgb},0.25)`,
            }}
          >
            {dept.icon} {dept.abbr} Department
          </div>

          <h1 className="dept-hero-title">{dept.name}</h1>
          <p className="dept-hero-desc">{dept.heroDesc}</p>

          <div className="dept-hero-stats">
            {dept.stats.map((s, i) => (
              <div key={i} className="dept-stat">
                <div className="dept-stat-num" style={{ color: dept.tagColor }}>
                  {s.num}
                </div>
                <div className="dept-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="dept-content">

        {/* Highlights / Lab cards */}
        <div className="content-grid">
          {dept.highlights.map((h, i) => (
            <div key={i} className="content-card">
              <div className="content-card-icon">{h.icon}</div>
              <div className="content-card-title">{h.title}</div>
              <div className="content-card-text">{h.text}</div>
            </div>
          ))}
        </div>

        {/* Courses */}
        <div className="courses-section">
          <h3>Core Curriculum</h3>
          {dept.courses.map((c, i) => (
            <div key={i} className="course-row">
              <span className="course-code">{c.code}</span>
              <span className="course-name">{c.name}</span>
              <span className="course-credits">{c.credits}</span>
            </div>
          ))}
        </div>

        {/* Faculty */}
        <div className="faculty-section">
          <h3>Faculty Members</h3>
          <div className="faculty-grid">
            {dept.faculty.map((f, i) => (
              <div key={i} className="faculty-card">
                <div
                  className="faculty-avatar"
                  style={{
                    background: `rgba(${dept.colorRgb},0.12)`,
                    border: `1.5px solid rgba(${dept.colorRgb},0.25)`,
                    color: dept.tagColor,
                  }}
                >
                  {f.initials}
                </div>
                <div className="faculty-name">{f.name}</div>
                <div className="faculty-role">{f.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
