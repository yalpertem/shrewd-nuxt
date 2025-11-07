import type {
  LocaleCode,
  LocaleConfig,
  LocaleDataProvider,
  TranslationContent,
} from "~~/types/locale";

import en from "~~/i18n/locales/en.json";
import tr from "~~/i18n/locales/tr.json";

const LOCALES: LocaleConfig[] = [
  { code: "en", name: "English", nativeName: "English", prefix: "/en" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", prefix: "/tr" },
];

const TRANSLATIONS: Record<LocaleCode, TranslationContent> = {
  en: en as unknown as TranslationContent,
  tr: tr as unknown as TranslationContent,
};

export function createLocaleDataProvider(): LocaleDataProvider {
  return {
    async getLocales() {
      return LOCALES;
    },
    async getTranslations(locale: LocaleCode) {
      return TRANSLATIONS[locale];
    },
    async getDefaultLocale() {
      return "en";
    },
  };
}
