import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    strategy: "prefix",
    defaultLocale: "en",
    langDir: "locales",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "tr",
        name: "Türkçe",
        file: "tr.json",
      },
    ],
  },

  hooks: {
    "build:before": () => {
      console.log("🚀 Build starting...");
      console.log("📁 Project root:", process.cwd());
      console.log("🌐 Looking for i18n config...");
    },
  },

  css: ["~/assets/css/main.css"],
});
