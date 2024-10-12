
<template>
  <div class="section overlay">
    <div class="container overlay__container">
      <div class="overlay__layout">
        <div v-for='i in 12' class="overlay__column"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overlay {
  position: fixed;
  width: 100%;
  height: 100vh;
  inset: 0;
  z-index: 10;
  pointer-events: none;

  &__container {
    height: 100%;
  }
  &__layout {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1.25rem;
  }
  &__column {
    width: 100%;
    height: 100%;
    background-color: var(--palette-1--tone-1000); 
    opacity: 0.1;
  }
}
</style>
