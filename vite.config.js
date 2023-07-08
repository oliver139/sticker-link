import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sticker-link/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  esbuild: {
    pure: ["console.log"],
    drop: ["debugger"],
  },
  optimizeDeps: {
    exclude: ["oh-vue-icons/icons"]
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         "capoo": [
  //           "./src/views/Capoo.vue",
  //         ],
  //         "cinnamoroll": [
  //           "./src/views/Cinnamoroll.vue",
  //         ],
  //       },
  //     },
  //   },
  // },
});
