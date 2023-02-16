import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// AutoImport Composition API methods
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
      vueTemplate: true,
      // eslintrc: {
      //   enabled: true,
      //   filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
      //   globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      // },
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
  optimizeDeps: {
    exclude: ["oh-vue-icons/icons"]
  }
});
