// Vue
import { createApp } from "vue";

// Router
import router from "./router";

// Root Component
import App from "./App.vue";
const app = createApp(App);

// CSS
import "normalize.css";
import "@/assets/css/variable.css";
import "@/assets/css/transition.css";
import "@/assets/css/main.css";

app
  .use(router)
  .mount("#app");
