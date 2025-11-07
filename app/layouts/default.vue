<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <LayoutHeader />

    <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <slot />
    </main>

    <LayoutFooter />
  </div>
</template>

<script setup lang="ts"></script>
