<template>
  <div class="space-y-8">
    <!-- Hero Section -->
    <div class="text-center py-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {{ $t("pages.home.title") }}
      </h1>
      <p
        class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
      >
        {{ $t("pages.home.description") }}
      </p>
      <NuxtLink
        :to="localePath('/about')"
        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        {{ $t("pages.home.learnMore") }}
      </NuxtLink>
    </div>

    <!-- Best Practices Section -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Template Features & Best Practices
      </h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">
            🌍 Internationalization (i18n)
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            This template demonstrates a clean architecture for i18n with:
          </p>
          <ul
            class="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1"
          >
            <li>Prefix-based routing (/en/page, /tr/page)</li>
            <li>Abstraction layer for data sources</li>
            <li>Type-safe translation interfaces</li>
            <li>Easy language switching</li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">
            🏗️ Clean Architecture
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Backend-friendly patterns adapted for frontend:
          </p>
          <ul
            class="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1"
          >
            <li>Interface-based data providers</li>
            <li>Separation of concerns</li>
            <li>Easy to swap implementations</li>
            <li>Testable and maintainable code</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Code Example -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Current Route Information
      </h2>
      <div class="bg-gray-100 dark:bg-gray-700 rounded p-4 font-mono text-sm">
        <p><strong>Current Locale:</strong> {{ locale }}</p>
        <p><strong>Current Route:</strong> {{ $route.path }}</p>
        <p>
          <strong>Available Locales:</strong> {{ availableLocales.join(", ") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();
const localePath = useLocalePath();

// SEO
useSeoMeta({
  title: "Shrewd Nuxt - Home",
  description: "A minimal, opinionated Nuxt 4 starter with i18n support",
});

const availableLocales = computed(() =>
  locales.value.map((l) => (typeof l === "string" ? l : l.code))
);
</script>
