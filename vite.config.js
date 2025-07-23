import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // change this to your desired port
    host: true, // optional, allows access via network IP
    open: true, // optional, opens browser on server start
  },
});
