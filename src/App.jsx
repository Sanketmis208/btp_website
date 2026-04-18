// src/App.jsx
import { useState, useCallback, useEffect } from "react";
import { DEPTS } from "./data/departments";
import Navbar from "./components/Navbar";
import LoaderBar from "./components/LoaderBar";
import HomePage from "./pages/HomePage";
import DeptPage from "./pages/DeptPage";
import AboutPage from "./pages/AboutPage";
import CSEDepartmentPage from "./pages/CSEDepartmentPage.jsx";

const DEPT_APP_KEYS = ["cse", "cce", "me", "ece"];
const VALID_PAGES = ["home", "about", ...DEPT_APP_KEYS, ...Object.keys(DEPTS)];

export default function App() {
  const [page, setPageRaw] = useState("home");
  const [loading, setLoading] = useState(false);
  const [prevPage, setPrevPage] = useState(null);

  const setPage = useCallback(
    (next) => {
      if (next === page) return;
      setLoading(true);
      setPrevPage(page);
      setTimeout(() => {
        setPageRaw(next);
        setLoading(false);
      }, 350);
    },
    [page],
  );

  useEffect(() => {
    const onHash = () => {
      const hash =
        window.location.hash.replace("#/", "").replace("#", "") || "home";
      if (VALID_PAGES.includes(hash)) setPageRaw(hash);
    };
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    window.location.hash = page === "home" ? "" : `#/${page}`;
  }, [page]);

  const activeDept =
    Object.keys(DEPTS).includes(page) && !DEPT_APP_KEYS.includes(page)
      ? page
      : null;

  // Hide portal navbar when inside a full dept app
  const isDeptApp = DEPT_APP_KEYS.includes(page);

  const goHome = () => setPage("home");

  return (
    <>
      {loading && <LoaderBar key={prevPage + page} />}

      {!isDeptApp && (
        <Navbar page={page} setPage={setPage} activeDept={activeDept} />
      )}

      {!loading && (
        <>
          {page === "home" && <HomePage setPage={setPage} />}
          {page === "about" && <AboutPage setPage={setPage} />}

          {page === "cse" && (
            <CSEDepartmentPage
              goHome={goHome}
              deptKey="cse"
              deptName="Computer Science & Engineering"
            />
          )}
          {page === "cce" && (
            <CSEDepartmentPage
              goHome={goHome}
              deptKey="cce"
              deptName="Communication & Computer Engineering"
            />
          )}
          {page === "me" && (
            <CSEDepartmentPage
              goHome={goHome}
              deptKey="me"
              deptName="Mechanical Engineering"
            />
          )}
          {page === "ece" && (
            <CSEDepartmentPage
              goHome={goHome}
              deptKey="ece"
              deptName="Electronics & Communication Engineering"
            />
          )}

          {activeDept && (
            <DeptPage key={page} deptKey={page} setPage={setPage} />
          )}
        </>
      )}
    </>
  );
}
