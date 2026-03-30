import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/CICD_Learn/", // 👈 这里填你的仓库名！
});
