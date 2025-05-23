import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "SUSHIRO",
        short_name: "SUSHIRO",
        description: "SUSHIRO calculator",
        categories: ["utilities", "food"],
        theme_color: "#fff",
        background_color: "#fff",
        display: "standalone",
        orientation: "portrait",
        id: "/",
        scope: "/",
        start_url: "/",
        icons: [
          {
            purpose: "maskable",
            src: "/assets/icons/manifest-128-maskable.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            purpose: "maskable",
            src: "/assets/icons/manifest-192-maskable.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            purpose: "maskable",
            src: "/assets/icons/manifest-512-maskable.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icons/manifest-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icons/manifest-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icons/manifest-180.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "/assets/icons/manifest-128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/assets/icons/manifest-120.png",
            sizes: "120x120",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
