// Vue
import { createApp } from "vue";

// icons
import OhVueIcon from "./utils/iconImport";

// Root Component
import App from "./App.vue";
const app = createApp(App);

app
  .component("v-icon", OhVueIcon)
  .mount("#app");
