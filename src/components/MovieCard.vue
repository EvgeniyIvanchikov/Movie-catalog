<script setup>
</script>

<template>
  <a href="/" class="card">
    <div class="card__image-wrapper">
      <img src="/images/clapperboard.svg" alt="" class="card__image card__image--placeholder">
      <!-- <img src="/images/clapperboard.svg" alt="" class="card__image"> -->
    </div>
    <div class="card__content">
      <div class="card__content-group">
        <div class="card__position-name">Name:</div>
        <div class="card__position-value">Value</div>
      </div>
      <div class="card__content-group">
        <div class="card__position-name">Year:</div>
        <div class="card__position-value">Value</div>
      </div>
      <div class="card__content-group">
        <div class="card__position-name">imdbID:</div>
        <div class="card__position-value">Value</div>
      </div>
      <div class="card__content-group">
        <div class="card__position-name">Type:</div>
        <div class="card__position-value">Value</div>
      </div>
    </div>
    
  </a>
</template>

<style scoped lang="scss">

.card {
  position: relative;
  width: 100%;
  padding: 1.25rem;
  border-radius: 10px;
  background: linear-gradient(-45deg, var(--palette-1--tone-700), var(--palette-1--tone-300));
  color: var(--palette-1--tone-100);
  // text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.25rem;

  &__image-wrapper{
    width: 100%;
    aspect-ratio: 1.5/1;
    background: var(--palette-1--tone-100);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
  }
  &__image{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    &--placeholder{
      width: 70%;
      height: auto;
      object-fit: contain;
      filter: drop-shadow(0px 0px 2px black);
    }
  }
  &__content{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &-group{
      display: flex;
    }
  }
}
</style>
