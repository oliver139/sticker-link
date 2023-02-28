// Vue
import { createApp } from "vue";

// Router
import router from "./router";

// Pinia
import pinia from "./stores";

// icons
import OhVueIcon from "./utils/iconImport";

// Root Component
import App from "./App.vue";
const app = createApp(App);

// CSS
import "@/assets/css/reset.css";
import "@/assets/css/main.css";

app
  .use(router)
  .use(pinia)
  .component("v-icon", OhVueIcon)
  .mount("#app");
