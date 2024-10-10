<script setup>
import MovieCard from '@/components/MovieCard.vue'

</script>
 
<template>
  
  <div class="section result">
    <div class="container result__container">
      <div class="result__header">You searched for:</div>
      <div class="result__main">
        <div class="result__error-message-box">This is some error</div>
        <div class="result__cta-message-box">This is CTA</div>
        <div class="result__grid">
          <MovieCard /> 
          <MovieCard />  
          <MovieCard /> 
        </div>
      </div>
      <div class="result__pagination">Pagination</div>
</div>
</div>
</template>


<style scoped lang="scss">
.result{
  position: relative;
  margin-bottom: auto;
  padding: 6.25rem 0;

  &__container{
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  &__main{
    width: 100%;
  }
  &__grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.25rem;
  }
}

</style>
