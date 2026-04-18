// src/main.jsx
// ─────────────────────────────────────────────
// React entry point. Mounts <App /> and imports
// the global stylesheet.
// ─────────────────────────────────────────────

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App";

const container = document.getElementById("root");
container.classList.add("portal-root");
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
