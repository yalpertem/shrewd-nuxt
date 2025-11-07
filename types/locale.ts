/**
 * Supported language codes
 */
export type LocaleCode = "en" | "tr";

/**
 * Language configuration
 */
export interface LocaleConfig {
  code: LocaleCode;
  name: string;
  nativeName: string;
  prefix: string;
}

/**
 * Translation content structure
 */
export interface TranslationContent {
  common: {
    home: string;
    about: string;
    contact: string;
    language: string;
    welcome: string;
  };
  pages: {
    home: {
      title: string;
      description: string;
      learnMore: string;
    };
    about: {
      title: string;
      description: string;
      features: string[];
    };
    contact: {
      title: string;
      description: string;
      email: string;
    };
  };
}

/**
 * Interface for locale data providers
 * This abstraction allows switching between JSON files, APIs, databases, etc.
 */
export interface LocaleDataProvider {
  /**
   * Get available locales configuration
   */
  getLocales(): Promise<LocaleConfig[]>;

  /**
   * Get translations for a specific locale
   */
  getTranslations(locale: LocaleCode): Promise<TranslationContent>;

  /**
   * Get default locale code
   */
  getDefaultLocale(): Promise<LocaleCode>;
}
