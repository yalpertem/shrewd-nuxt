import { defineAppConfig } from "nuxt/app";

export default defineAppConfig({
  ui: {
    icons: {
      light: "i-lucide-sun",
      dark: "i-lucide-moon",
    },
    colors: {
      primary: "green",
      neutral: "slate",
    },
  },
});
