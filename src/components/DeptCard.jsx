// src/components/DeptCard.jsx
// ─────────────────────────────────────────────
// Single department card used in the grid on
// the Home page. Receives a `dept` object and
// an `onClick` handler from HomePage.
// ─────────────────────────────────────────────

export default function DeptCard({ dept, onClick }) {
  return (
    <div
      className={`dept-card ${dept.key}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="dept-card-top">
        <div className="dept-icon-wrap">{dept.icon}</div>
        <div className="dept-abbr">{dept.abbr}</div>
        <div className="dept-name">{dept.name}</div>
        <div className="dept-desc">{dept.desc}</div>
      </div>

      <div className="dept-card-bottom">
        <div className="dept-tags">
          {dept.tags.map((t) => (
            <span key={t} className="dept-tag">
              {t}
            </span>
          ))}
        </div>
        <div className="dept-arrow">→</div>
      </div>
    </div>
  );
}
