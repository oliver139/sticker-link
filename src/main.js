// Vue
import { createApp } from "vue";

// Pinia
import { createPinia } from "pinia";

// i18n
import i18n from "./i18n";

// icons
import OhVueIcon from "./utils/iconImport";

// Google Analytics
// import VueGtag from "vue-gtag";

// Root Component
import App from "./App.vue";
const app = createApp(App);

app
  .use(createPinia())
  .use(i18n)
  .component("v-icon", OhVueIcon)
  // .use(VueGtag, {
  //   config: {
  //     id: "G-81YR852LSZ"
  //   },
  // }, router)
  .mount("#app");
