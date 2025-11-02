import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.png", "logo192.png", "logo512.png"],
      manifest: false, // از فایل manifest.json جداگانه استفاده می‌کنیم
    }),
  ],
  base: "/", // مهم برای Vercel
});
