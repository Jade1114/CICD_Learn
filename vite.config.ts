import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/CICD_Learn/", // 👈 必须带前后斜杠！
});
