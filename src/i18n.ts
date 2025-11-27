import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import vi from "./locales/vi";

const resources = {
  en: en,
  vi: vi,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "vi",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
