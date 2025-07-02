import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({
  // Options here will be passed to the flat config
}).append({
  ignores: [
    // Build output
    ".nuxt",
    ".output",
    "dist",

    // Dependencies
    "node_modules",

    // Lock files
    "pnpm-lock.yaml",
    "package-lock.json",
    "yarn.lock",

    // Logs
    "*.log",

    // Environment files
    ".env",
    ".env.local",
    ".env.*.local",

    // IDE
    ".vscode",
    ".idea",

    // OS
    ".DS_Store",
    "Thumbs.db",
  ],
});
