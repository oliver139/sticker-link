// Vue
import { createApp } from "vue";

// Router
import router from "./router";

// icons
import OhVueIcon from "./utils/iconImport";

// Root Component
import App from "./App.vue";
const app = createApp(App);

// CSS
import "normalize.css";
import "@/assets/css/variable.css";
import "@/assets/css/main.css";

app
  .use(router)
  .component("v-icon", OhVueIcon)
  .mount("#app");
