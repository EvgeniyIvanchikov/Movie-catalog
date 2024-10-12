<script setup>
import MovieCard from '@/components/MovieCard.vue';
import Pagination from '@/modules/Pagination.vue';
import { globalState } from '@/assets/scripts';

</script>

<template>
  <section data-role='section-result' class="section result">
    <div class="container result__container">
      <div v-if='globalState.movies.totalResults' class="heading heading--l">Number of search results: {{ globalState.movies.totalResults }}</div>
      <div class="result__error-message-box">
        <div 
        v-if='globalState.searchErrorMessage && !globalState.movies.list.length' 
        class="heading heading--m">
        Error message: {{globalState.searchErrorMessage}}
      </div>
      </div>
      <div 
      v-if='!globalState.movies.list.length'
      class="result__cta-message-box">
        <div 
        class="heading heading--l">Find your favorite movies</div>
        <div class="paragraph paragraph-m">Just enter your query in the search bar and submit the form</div>
      </div>
      <div class="result__main">
        <div 
        v-if='globalState.movies.list.length'
        class="result__grid">
          <MovieCard 
          v-for="movieData in globalState.movies.list"
          :key="movieData.imdbID"
          :data='movieData'
          />
        </div>
      </div>
      <div
      v-if='globalState.movies.totalResults > 10'
      class="result__pagination">
        <Pagination />
    </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.result {
  position: relative;
  margin-bottom: auto;
  padding: 6.25rem 0;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  &__main {
    width: 100%;
  }
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.25rem;
    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr 1fr;      
      gap: 1rem;
    }
    @media screen and (max-width: 479px) {
      grid-template-columns: 1fr;      
    }
  }
  &__cta-message-box{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  &__pagination{
    width: 100%;
  }
}
</style>
