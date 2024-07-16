import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig((mode) => {
  return {
    base: "/static/",
    plugins: [react()],
    server: {
      port: 3000,
    },
  };
});
