import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import HttpBackend from "i18next-http-backend";
import resourcesToBackend from "i18next-resources-to-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (lang: string, namespace: string) =>
        import(`@/locales/${lang}/${namespace}.json`)
    )
  )
  .init({
    debug: false,
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    ns: ["translation"],
  });

export default i18n;
