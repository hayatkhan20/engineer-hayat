import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    target: "es2019"
  },
  server: {
    port: 5173,
    strictPort: true
  }
});
