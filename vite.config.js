import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? process.env.VITE_BASE_PATH || "/web-portfolio/" : "/",
}));
