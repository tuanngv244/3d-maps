import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    include: /\.(ts|tsx|js|jsx)$/,
    loader: "tsx",
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  server: {
    port: 3001, // change this to your desired port
    host: true, // optional, allows access via network IP
    open: true, // optional, opens browser on server start,
  },
});
