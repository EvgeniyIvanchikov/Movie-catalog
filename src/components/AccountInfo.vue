<script setup>
import IconPlaceholder from '@/assets/icons/account-image-placeholder.svg';
import IconArrowDown from '@/assets/icons/arrow-down.svg';
</script>

<template>
  <div class="account-info">
    <button class="account-info__button">
      <IconPlaceholder class="svg account-info__placeholder-svg" />
      <div class="account-info__name-wrapper">
        <div class="paragraph paragraph--l account-info__name">Test Name</div>
        <IconArrowDown class="svg account-info__arrow-svg" />
      </div>
    </button>
  </div>
</template>

<style scoped lang="scss">
.account-info {
  &__button {
    display: flex;
    align-items: center;
  }
  &__name-wrapper {
    display: flex;
    align-items: center;
  }
  &__placeholder-svg {
    width: 3rem;
    min-width: 3rem;
    height: 3rem;
  }
  &__arrow-svg {
    width: 1rem;
    min-width: 1rem;
    height: 1rem;
  }
}
</style>
