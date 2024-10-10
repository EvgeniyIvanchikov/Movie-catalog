<script setup>
import { ref } from 'vue';

defineProps({
  type: String,
  message: String
});
</script>

<template>
  <button :type="type" class="button">{{message}}</button>
</template>

<style scoped lang="scss">
.button {
  font-size: 1.25rem;
  font-weight: 400;
  border: 1px solid var(--primary-text-color);
  color: var(--primary-text-color);
  font-family: var(--font-family--base);
  border-radius: 6px;
  padding: 1rem 1.5rem;
  max-width: 100%;
  min-height: 4rem;
}
</style>
