import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      include: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.js"],
      exclude: ["./node_modules/**"],
      cache: false,
    }),
  ],
  server: {
    open: true,
    hmr: {
      overlay: true,
    },
  },
});
