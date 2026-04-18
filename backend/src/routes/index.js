// backend/src/routes/index.js
import express from "express";
import authRoutes from "./auth/auth.routes.js";
import publicRoutes from "./public/public.routes.js";
import adminRoutes from "./admin/admin.routes.js";

const router = express.Router();

// ── Auth (never dept-scoped) ──────────────────────────────
router.use("/auth", authRoutes);

// ── Dept-scoped routes ────────────────────────────────────
// Matches: /api/cse/public/...  /api/cce/admin/...  etc.
router.use(
  "/:dept/public",
  (req, res, next) => {
    req.dept = req.params.dept;
    next();
  },
  publicRoutes,
);

router.use(
  "/:dept/admin",
  (req, res, next) => {
    req.dept = req.params.dept;
    next();
  },
  adminRoutes,
);

// ── Legacy fallback (old /api/public/... still works as CSE) ──
router.use(
  "/public",
  (req, res, next) => {
    req.dept = "cse";
    next();
  },
  publicRoutes,
);

router.use(
  "/admin",
  (req, res, next) => {
    req.dept = "cse";
    next();
  },
  adminRoutes,
);

export default router;
