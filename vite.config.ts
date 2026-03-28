import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // 2MB limit (three.js is large)
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-three": ["three", "three-stdlib"],
          "vendor-r3f": [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
          ],
          "vendor-gsap": ["gsap"],
        },
      },
    },
  },
});
