<template>
  <div class="test-page">
    <h1>Test Page</h1>
    <p>Testing GitHub Copilot instructions compliance</p>

    <!-- Component should be auto-imported as per our instructions -->
    <TestComponent initial-text="Test Button" />

    <div class="mt-4">
      <h3>Package Management Test</h3>
      <p>
        This project uses pnpm exclusively as specified in our instructions.
      </p>
      <code>pnpm dev</code> should be used to run this development server.
    </div>
  </div>
</template>

<script setup lang="ts">
// Following our copilot instructions:
// - TypeScript by default
// - <script setup> syntax
// - Server-side rendering (SSR) unless needed otherwise

// Page meta using Nuxt 3 conventions
definePageMeta({
  title: "Test Page",
  description: "Testing GitHub Copilot instructions",
});

// Head management using Nuxt composables (auto-imported)
useHead({
  title: "Test - Shrewd Nuxt",
  meta: [
    {
      name: "description",
      content: "Testing GitHub Copilot instructions compliance",
    },
  ],
});
</script>

<style scoped>
.test-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

code {
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}
</style>
