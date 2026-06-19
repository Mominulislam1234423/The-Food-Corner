import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "llmf56-5173.csb.app",
      ".csb.app", // এটি দিলে সব Codesandbox ডোমেইন কাজ করবে
    ],
  },
});
