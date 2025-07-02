<template>
  <div class="test-component">
    <h2>Test Component</h2>
    <p>This is a test to verify GitHub Copilot instructions are working.</p>
    <UButton @click="handleClick">{{ buttonText }}</UButton>
  </div>
</template>

<script setup lang="ts">
// This component should be created following our copilot instructions:
// - Uses TypeScript (lang="ts")
// - Uses <script setup> syntax
// - Uses Nuxt UI components (UButton)
// - Follows Composition API

interface Props {
  initialText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  initialText: "Click me",
});

const buttonText = ref(props.initialText);
const clickCount = ref(0);

const handleClick = () => {
  clickCount.value++;
  buttonText.value = `Clicked ${clickCount.value} times`;
};
</script>

<style scoped>
.test-component {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: #f9fafb;
}
</style>
