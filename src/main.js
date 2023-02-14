// Vue
import { createApp } from "vue";

// Pinia
import { createPinia } from "pinia";

// Root Component
import App from "./App.vue";

// i18n
import i18n from "./i18n";

// Google Analytics
// import VueGtag from "vue-gtag";

const app = createApp(App);

app
  .use(createPinia())
  .use(i18n)
  // .use(VueGtag, {
  //   config: {
  //     id: "G-81YR852LSZ"
  //   },
  // }, router)
  .mount("#app");
