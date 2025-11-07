import type { LocaleDataProvider, LocaleCode } from "~~/types/locale";
import { createLocaleDataProvider } from "~~/services/locale-data-provider";

/**
 * Composable for accessing locale data through the abstraction layer
 * This demonstrates how the data provider can be used in components
 */
export const useLocaleData = () => {
  const dataProvider: LocaleDataProvider = createLocaleDataProvider();

  /**
   * Get available locales from the data provider
   */
  const getAvailableLocales = async () => {
    return await dataProvider.getLocales();
  };

  /**
   * Get translations for a specific locale
   */
  const getLocaleTranslations = async (locale: LocaleCode) => {
    return await dataProvider.getTranslations(locale);
  };

  /**
   * Get the default locale
   */
  const getDefaultLocale = async () => {
    return await dataProvider.getDefaultLocale();
  };

  /**
   * Example: Get all locale data (for demonstration)
   */
  const getAllLocaleData = async () => {
    const locales = await getAvailableLocales();
    const defaultLocale = await getDefaultLocale();

    const translationsMap = new Map();
    for (const locale of locales) {
      const translations = await getLocaleTranslations(locale.code);
      translationsMap.set(locale.code, translations);
    }

    return {
      locales,
      defaultLocale,
      translations: Object.fromEntries(translationsMap),
    };
  };

  return {
    getAvailableLocales,
    getLocaleTranslations,
    getDefaultLocale,
    getAllLocaleData,
    // Expose the provider for advanced usage
    dataProvider,
  };
};
