// src/pages/CSEDepartmentPage.jsx

import { MemoryRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "../cse/index.css";
import { setDept } from "../cse/lib/api.js";

import Navbar from "../cse/components/Navbar.jsx";
import Footer from "../cse/components/Footer.jsx";
import Home from "../cse/pages/Home.jsx";
import People from "../cse/pages/People.jsx";
import FacultyProfile from "../cse/pages/FacultyProfile.jsx";
import Programs from "../cse/pages/Programs.jsx";
import Newsletter from "../cse/pages/Newsletter.jsx";
import Achievements from "../cse/pages/Achievements.jsx";
import Events from "../cse/pages/Events.jsx";
import EventDetail from "../cse/pages/EventDetail.jsx";
import News from "../cse/pages/News.jsx";
import NewsDetail from "../cse/pages/NewsDetail.jsx";
import Directory from "../cse/pages/Directory.jsx";
import Research from "../cse/pages/Research.jsx";
import Facilities from "../cse/pages/Facilities.jsx";
import AdminLogin from "../cse/pages/Admin/Login.jsx";
import AdminLayout from "../cse/pages/Admin/Layout.jsx";
import Dashboard from "../cse/pages/Admin/Dashboard.jsx";
import SliderManagement from "../cse/pages/Admin/SliderManagement.jsx";
import PeopleManagement from "../cse/pages/Admin/PeopleManagement.jsx";
import ProgramsManagement from "../cse/pages/Admin/ProgramsManagement.jsx";
import NewsManagement from "../cse/pages/Admin/NewsManagement.jsx";
import EventsManagement from "../cse/pages/Admin/EventsManagement.jsx";
import AchievementsManagement from "../cse/pages/Admin/AchievementsManagement.jsx";
import NewsletterManagement from "../cse/pages/Admin/NewsletterManagement.jsx";
import DirectoryManagement from "../cse/pages/Admin/DirectoryManagement.jsx";
import InfoBlocksManagement from "../cse/pages/Admin/InfoBlocksManagement.jsx";
import ResearchManagement from "../cse/pages/Admin/ResearchManagement.jsx";
import FacilitiesManagement from "../cse/pages/Admin/FacilitiesManagement.jsx";

const DEPT_COLORS = {
  cse: "#8B0000",
  cce: "#1a237e",
  me: "#1b5e20",
  ece: "#e65100",
};

const L = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);
// In CSEDepartmentPage.jsx — change the outer wrapper div to include className

export default function CSEDepartmentPage({ goHome, deptKey, deptName }) {
  setDept(deptKey);
  const color = DEPT_COLORS[deptKey] || "#8B0000";

  return (
    /*
      full-bleed wrapper — escapes any max-width / padding the portal
      might apply to its children, so CSE renders exactly like a
      standalone app at 100vw.
    */
    <div
      className="cse-dept-root"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        zIndex: 1000,
        background: "white",
      }}
    >
      <HelmetProvider>
        <MemoryRouter initialEntries={["/"]} initialIndex={0}>
          {/* Breadcrumb */}
          <div
            style={{
              background: "#f3f4f6",
              borderBottom: "1px solid #e5e7eb",
              padding: "8px 16px",
              fontSize: "14px",
              color: "#4b5563",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              position: "sticky",
              top: 0,
              zIndex: 9999,
            }}
          >
            <button
              onClick={() => {
                goHome();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                color,
                fontWeight: 600,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                fontSize: "14px",
              }}
            >
              ← LNMIIT Portal
            </button>
            <span>/</span>
            <span style={{ fontWeight: 600 }}>{deptName}</span>
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <L>
                  <Home />
                </L>
              }
            />
            <Route
              path="/people"
              element={
                <L>
                  <People />
                </L>
              }
            />
            <Route
              path="/people/:slug"
              element={
                <L>
                  <FacultyProfile />
                </L>
              }
            />
            <Route
              path="/programs"
              element={
                <L>
                  <Programs />
                </L>
              }
            />
            <Route
              path="/research"
              element={
                <L>
                  <Research />
                </L>
              }
            />
            <Route
              path="/facilities"
              element={
                <L>
                  <Facilities />
                </L>
              }
            />
            <Route
              path="/newsletter"
              element={
                <L>
                  <Newsletter />
                </L>
              }
            />
            <Route
              path="/achievements"
              element={
                <L>
                  <Achievements />
                </L>
              }
            />
            <Route
              path="/achievements/students"
              element={
                <L>
                  <Achievements category="student" />
                </L>
              }
            />
            <Route
              path="/achievements/faculty"
              element={
                <L>
                  <Achievements category="faculty" />
                </L>
              }
            />
            <Route
              path="/events"
              element={
                <L>
                  <Events />
                </L>
              }
            />
            <Route
              path="/events/:id"
              element={
                <L>
                  <EventDetail />
                </L>
              }
            />
            <Route
              path="/news"
              element={
                <L>
                  <News />
                </L>
              }
            />
            <Route
              path="/news/:id"
              element={
                <L>
                  <NewsDetail />
                </L>
              }
            />
            <Route
              path="/directory"
              element={
                <L>
                  <Directory />
                </L>
              }
            />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="sliders" element={<SliderManagement />} />
              <Route path="people" element={<PeopleManagement />} />
              <Route path="programs" element={<ProgramsManagement />} />
              <Route path="research" element={<ResearchManagement />} />
              <Route path="facilities" element={<FacilitiesManagement />} />
              <Route path="news" element={<NewsManagement />} />
              <Route path="events" element={<EventsManagement />} />
              <Route path="achievements" element={<AchievementsManagement />} />
              <Route path="newsletters" element={<NewsletterManagement />} />
              <Route path="directory" element={<DirectoryManagement />} />
              <Route path="info-blocks" element={<InfoBlocksManagement />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </HelmetProvider>
    </div>
  );
}
