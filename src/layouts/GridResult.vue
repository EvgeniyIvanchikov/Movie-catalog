<script setup>
import MovieCard from '@/components/MovieCard.vue'

</script>
 
<template>
  
  <div class="section result">
    <div class="container result_container">
      <div class="result__header">Header</div>
      <div class="result__main">
        <div class="result__grid">
          <MovieCard /> 
          <MovieCard />  
          <MovieCard /> 
        </div>
        <div class="result__pagination">Pagination</div>
      </div>
</div>
</div>
</template>


<style scoped lang="scss">
.result{
  position: relative;
}

</style>
