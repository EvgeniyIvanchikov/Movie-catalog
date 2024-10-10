<script setup>
import { isOpen } from '@/assets/scripts/index.js';
import MyIcon from '@/assets/icons/project-logo.svg';
import SearchForm from '@/modules/SearchForm.vue'
import Burger from '@/components/Burger.vue'
import AccountInfo from '@/components/AccountInfo.vue'

</script>
 
<template>
  
  <div class="section header">
    <div class="container header_container">
      <div class="navigation-wrapper" :class="{ 'js--open': isOpen }">
        <div class="navigation">
          <div class="navigation__inner">
            <a href="/" class="logo-link">
            <MyIcon class="logo" />
            </a>  
            <SearchForm />
            <AccountInfo/>
          </div>
        </div>
        <div class="navigation-controls">
          <Burger />
        </div>
      </div>
</div>


</div>
</template>


<style scoped lang="scss">
.header{
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
}
.logo-link{
  width: 12rem;
  max-width: 100%;
}
.navigation-wrapper{
  width: 100%;
  &.js--open{
    .navigation{
      transform: translateX(0);
    }
  }
}
.navigation-controls{
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: none;
  gap: 2rem;

  @media screen and (max-width: 991px) {
    display: flex;
  }
}
.navigation{
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
}
.navigation__inner{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 991px) {
    gap: 2rem;
    flex-direction: column;
    justify-content: flex-start;
    padding: 7rem 0;
    height: 100%;
    overflow: auto;
  }
}
</style>
