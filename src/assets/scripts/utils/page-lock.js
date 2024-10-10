import { ref } from 'vue';

export const isOpen = ref(false);

export const toggleLock = () => {
  if (isOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};