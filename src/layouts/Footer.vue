<template>
  <footer class="section footer">
    <div class="container footer__container">
      <div class="footer__copyright-wrapper">
        <div class="paragraph paragraph--l footer__copyright">All rights reserved © 2024 Movie Catalog</div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: relative;
  padding: 1.5rem 0;
  background: linear-gradient(-45deg, var(--palette-1--tone-700), var(--palette-1--tone-300));
  color: var(--palette-1--tone-100);
  margin-top: auto;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
