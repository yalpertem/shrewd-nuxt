export default defineI18nConfig(() => {
  console.log("🔍 i18n.config.ts is being loaded!");
  console.log("📁 Current working directory:", process.cwd());

  return {
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
  };
});
