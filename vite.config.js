// vite.config.js  (in LNMIIT-PORTAL root)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // ← ADD

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ← ADD
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3022",
        changeOrigin: true,
      },
      "/uploads": {
        target: "http://localhost:3022",
        changeOrigin: true,
      },
    },
  },
});
