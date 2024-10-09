<script setup>
import { isOpen, toggleLock } from '@/assets/scripts/utils/index.js';

defineProps({
  class: String,
});

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  toggleLock();
};
</script>

<template>
  <button type="button" class="burger" :class="{ 'js--open': isOpen }" @click="toggleMenu">
    <div class="burger_line burger_line--top"></div>
    <div class="burger_line burger_line--bottom"></div>
  </button>
</template>

<style scoped lang="scss">

.burger{
  width: 3.75rem;
  min-width: 3.75rem;
  height: 3.75rem;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.95);
  position: relative;
  z-index: 3;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
  overflow: hidden;

  .burger_line{
    position: absolute;
    width: 2.5rem;
    height: 3px;
    background: #000;
    border-radius: 10px;
    transition : var(--transition-default);
    z-index: 2;

    &.burger_line--top{
      top: 2.125rem;
    }
    &.burger_line--bottom{
      bottom: 2.125rem;
    }
  }

  &.js--open{
    .burger_line{
      &.burger_line--top{
        transform: rotate(45deg);
        top: 1.75rem;
      }
      &.burger_line--bottom{
        transform: rotate(-45deg);
        bottom: 1.75rem;
      }
    }
  }
}
</style>
