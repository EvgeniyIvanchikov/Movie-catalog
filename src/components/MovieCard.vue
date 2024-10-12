<script setup>

defineProps({
  data: Object,
});
</script>

<template>
  <a href="/" class="card">
    <div class="card__image-wrapper">
      <img
      v-if='!data.Poster || data.Poster === "N/A"'
      src="/images/clapperboard.svg" alt="" class="card__image card__image--placeholder">
      <img v-else :src=data.Poster alt="" class="card__image card__image--main">
    </div>
    <div class="card__content">
      <div class="card__content-group">
        <div class="card__position-name">
          <div class="paragraph paragraph--l">
            Name:
          </div>
        </div>
        <div class="card__position-value">
            <div class="paragraph paragraph--l">
              {{data.Title}}      
            </div>
        </div>
      </div>
      <div class="card__content-group">
        <div class="card__position-name">
          <div class="paragraph paragraph--l">
            Year:
          </div>
        </div>
        <div class="card__position-value">
            <div class="paragraph paragraph--l">
              {{data.Year}}      
            </div>
        </div>
      </div>
      <div class="card__content-group">
        <div class="card__position-name">
          <div class="paragraph paragraph--l">
            imdbID:
          </div>
        </div>
        <div class="card__position-value">
            <div class="paragraph paragraph--l">
              {{data.imdbID}}      
            </div>
        </div>
      </div>
      <div class="card__content-group">
        <div class="card__position-name">
          <div class="paragraph paragraph--l">
            Type:
          </div>
        </div>
        <div class="card__position-value">
            <div class="paragraph paragraph--l">
              {{data.Type}}      
            </div>
        </div>
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
    position: relative;
    aspect-ratio: 1/1.3;
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
    &--main{
      position: absolute;
      inset: 0;
      z-index: 2;
    }
  }
  &__content{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    &-group{
      display: grid;
    grid-template-columns: 60px auto;
    gap: 1rem;
    align-items: start;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--palette-1--tone-400);
    width: 100%;
    &:last-of-type{
      border:none;
    }
    }
  }
}
</style>
