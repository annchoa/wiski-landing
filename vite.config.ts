import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative asset paths: the build works at a domain root and at a GitHub Pages subpath.
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // 0.0.0.0 so the dev server is reachable from outside the container.
    host: true,
    port: 3003,
    strictPort: true,
    watch: {
      // Bind mounts on Docker Desktop do not emit native file events.
      usePolling: process.env.CHOKIDAR_USEPOLLING === "true",
    },
  },
  preview: {
    host: true,
    port: 3003,
    strictPort: true,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
  },
});
