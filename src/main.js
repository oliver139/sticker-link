// Vue
import { createApp } from "vue";

// Pinia
import { createPinia } from "pinia";

// Root Component
import App from "./App.vue";

// i18n
import i18n from "./i18n";

const app = createApp(App);

app
  .use(i18n)
  .use(createPinia())
  .mount("#app");
