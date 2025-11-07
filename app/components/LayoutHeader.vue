<template>
  <nav
    class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center space-x-8">
          <NuxtLink
            :to="localePath('/')"
            class="text-lg font-semibold text-gray-900 dark:text-white"
          >
            Shrewd Nuxt
          </NuxtLink>

          <div class="hidden md:flex space-x-6">
            <NuxtLink
              :to="localePath('/')"
              class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              active-class="text-blue-600 dark:text-blue-400"
            >
              {{ $t("common.home") }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <UColorModeButton />
          <UDropdownMenu :items="languageItems" :content="{ align: 'end' }">
            <UButton
              variant="ghost"
              :label="currentLocale.toUpperCase()"
              trailing-icon="i-lucide-chevron-down"
            />
          </UDropdownMenu>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const currentLocale = computed(() => locale.value);

const languageItems = computed(() => [
  [
    {
      label: "English",
      icon: "i-lucide-languages",
      onSelect: () => navigateTo(switchLocalePath("en")),
    },
  ],
  [
    {
      label: "Türkçe",
      icon: "i-lucide-languages",
      onSelect: () => navigateTo(switchLocalePath("tr")),
    },
  ],
]);
</script>
