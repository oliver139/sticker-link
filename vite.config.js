import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// AutoImport Composition API methods
import AutoImport from "unplugin-auto-import/vite";
import AutoComponent from "unplugin-vue-components/vite";

// Vue-icons
import VueIconsResolver from "@kalimahapps/vue-icons/resolver";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sticker-link/",
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
    }),
    AutoComponent({
      // dirs: ["src/components"], // Specify the folder of auto-import components
      extensions: ["vue"], // Specify the extension of auto-import components
      deep: true,
      resolvers: [
        VueIconsResolver,
      ],
    }),
  ],
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
