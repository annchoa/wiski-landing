import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths, so the built site works both at a domain root and
  // at a GitHub Pages project subpath (https://<user>.github.io/wiski-landing/)
  // without hard-coding the repo name here.
  base: "./",
  resolve: {
    alias: {
      // `~` always means "src/", so an import never has to know how many
      // folders deep the importing file lives (no more `../../assets/...`).
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // 0.0.0.0 so the dev server is reachable from outside the container
    // (Vite binds to localhost only by default, which docker can't publish).
    host: true,
    port: 3003,
    strictPort: true,
    watch: {
      // Bind-mounted source on Docker Desktop (macOS/Windows) doesn't emit
      // native fs events, so file changes go unnoticed without polling.
      // Harmless outside Docker since the env var is only set in compose.yml.
      usePolling: process.env.CHOKIDAR_USEPOLLING === "true",
    },
  },
  preview: {
    host: true,
    port: 3003,
    strictPort: true,
  },
});
