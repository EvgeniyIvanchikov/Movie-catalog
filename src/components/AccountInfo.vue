<script setup>
import { globalState } from '@/assets/scripts';

import IconPlaceholder from '@/assets/icons/account-image-placeholder.svg';
import IconArrowDown from '@/assets/icons/arrow-down.svg';
</script>

<template>
  <div class="account-info">
    <button class="account-info__button">
      <div class="account-info__photo-wrapper">
        <IconPlaceholder class="svg account-info__photo" v-if='!globalState.user.photo' />
        <img v-else :src="globalState.user.photo" alt="" class="account-info__photo">
      </div>
      <div class="account-info__name-wrapper">
        <div class="paragraph paragraph--l account-info__name">{{globalState.user.name}}</div>
        <IconArrowDown class="svg account-info__arrow-svg" />
      </div>
    </button>
  </div>
</template>

<style scoped lang="scss">
.account-info {
  max-width: 12.5rem;
  overflow: hidden;


  &__button {
    display: flex;
    align-items: center;
    min-height: 4rem;
    background: var(--palette-1--tone-100);
    border: none;
    border-radius: 6px;
    gap: 1.25rem;
    padding: 0 1rem;
  }
  &__name-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  &__photo-wrapper{
    position: relative;
    width: 3rem;
    min-width: 3rem;
    height: 3rem;
    border-radius: 100vmax;
    overflow: hidden;
    background: var(--palette-1--tone-500);
    color: var(--palette-1--tone-100);
    padding: 10px;
  }
  &__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
  &__arrow-svg {
    width: 1rem;
    min-width: 1rem;
    height: 1rem;
  }
}
</style>
