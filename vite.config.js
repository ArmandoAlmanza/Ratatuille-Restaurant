import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 8080,
        open: true,
    },
    preview: {
        port: 8000,
    },
    build: {
        outDir: "./dist",
    },
});
