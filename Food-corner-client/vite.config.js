import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      events: "events/",
    },
  },
  server: {
    allowedHosts: ["llmf56-5173.csb.app", ".csb.app"],
  },
});
