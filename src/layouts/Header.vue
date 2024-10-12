<script setup>
import { globalState } from '@/assets/scripts';
import MyIcon from '@/assets/icons/project-logo.svg';
import SearchForm from '@/modules/SearchForm.vue';
import Burger from '@/components/Burger.vue';
import AccountInfo from '@/components/AccountInfo.vue';
</script>

<template>
  <header class="section header">
    <div class="container header_container">
      <div class="header__navigation-wrapper" :class="{ 'js--open': globalState.isMenuOpen }">
        <AccountInfo v-if="globalState.isMobile" />
        <div class="navigation">
          <div class="navigation__layout">
            <div class="navigation__layout-item">
              <a href="/" class="logo-link">
                <MyIcon class="logo" />
              </a>
            </div>
            <div class="navigation__layout-item">
              <SearchForm />
              <AccountInfo v-if="!globalState.isMobile" />
            </div>
          </div>
        </div>
        <div class="navigation__controls">
          <Burger />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: sticky;
  overflow: visible;
  top: 0;
  width: 100%;
  z-index: 5;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  background: linear-gradient(-45deg, var(--palette-1--tone-700), var(--palette-1--tone-300));

  @media screen and (max-width: 991px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-top: 0;
  }
  &__navigation-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.js--open {
      .navigation {
        transform: translateX(0);
      }
    }
  }
}
.logo-link {
  width: 12rem;
  max-width: 100%;
}

.navigation {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 991px) {
    transition: transform var(--transition-duration) var(--transition-timing-function);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100vh;
    width: 100vw;
    background-color: var(--palette-1--tone-400);
    transform: translateX(-100%);
  }

  &__layout {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 1.25rem;
    @media screen and (max-width: 991px) {
      gap: 2rem;
    padding: 7rem 1.5rem;
    height: 100%;
    overflow: auto;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    }
    &-item{
      display: flex;
      align-items: center;
      gap: 1.25rem;
      width: 100%;
    }
  }
  &__controls {
    width: auto;
    justify-content: space-between;
    align-items: center;
    display: none;
    gap: 2rem;

    @media screen and (max-width: 991px) {
      display: flex;
    }
  }
}
</style>
