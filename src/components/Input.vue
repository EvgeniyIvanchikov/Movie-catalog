<script setup>
import { ref } from 'vue'

defineProps({
  placeholder: String,
  type: String,
})

</script>

<template>
  <input
  :type='type'
  :placeholder='placeholder'
  class="input"
  >
</template>

<style scoped lang="scss">
.input {
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
