
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { MAIN_EN } from "../locales/en/main";
import { MAIN_KR } from "../locales/kr/main";
import { MAIN_JP } from "../locales/ja/main";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({    
    resources: {
      en: {
        main: MAIN_EN,
      },
      kr: {
        main: MAIN_KR,
      },
      jp: {
        main: MAIN_JP,
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }

  });

export default i18n;