import RU from "./ru.json";
import EN from "./en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: EN,
    ru: RU,
  },
}));
