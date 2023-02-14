import { createI18n } from "vue-i18n";
import messages from "./message";

const locale = localStorage.site_lang || "zh-hk";
localStorage.site_lang = locale;

const i18n = createI18n({
  // Composition API
  legacy: false,

  // default locale
  locale: locale,

  // translations
  messages: messages,
});

document.documentElement.setAttribute("lang", locale);

export default i18n;
