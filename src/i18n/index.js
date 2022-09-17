import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context("./json", true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

// const messages = {
//   en: {
//     welcomeMsg: "Welcome to Your Vue.js App",
//   },
//   vi: {
//     welcomeMsg: "Chào mừng đến với ứng dụng Vue.js của bạn",
//   },
// };

const i18n = new VueI18n({
  locale: window.localStorage.getItem("bc-lang"),
  fallbackLocale: window.localStorage.getItem("bc-lang"),
  messages: loadLocaleMessages(),
});

export default i18n;
