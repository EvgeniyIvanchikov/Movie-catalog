<script setup>
import { ref } from 'vue'

defineProps({
  modelValue: String,    // Это значение, которое будет синхронизироваться с v-model
  type: String,
  placeholder: String
});

const emit = defineEmits(['update:modelValue']);  // Определяем событие для обновления значения
const updateValue = (event) => {
  emit('update:modelValue', event.target.value);  // Сообщаем родительскому компоненту об изменении
};

</script>

<template>
  <input
  :type='type'
  :placeholder='placeholder'
  
  :value="modelValue"  
    @input="updateValue"
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
