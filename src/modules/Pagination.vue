<script setup>
import { globalState, requestMovies } from '@/assets/scripts';
import Button from '@/components/Button.vue';
import { computed } from 'vue';

const numberOfPaginationButtons = computed(() => {
  return Math.ceil(globalState.movies.totalResults / 10);
})

const searchMovies = (event) => {
  console.log(event.target.textContent);
  const newPageNumber = event.target.textContent;
  const searchValue = globalState.movies.requestName;

  globalState.movies.page = +newPageNumber;
  requestMovies({s:searchValue, page: newPageNumber});
  };
</script>

<template>
  <div class="pagination">
    <div class="pagination__layout">
      <div class="pagination__list">


        <Button 
         @click="searchMovies"
        v-for='pageNumber in numberOfPaginationButtons' 
        key='pageNumber'     
        class='pagination__button'
        type="button" 
        :disabled="pageNumber === globalState.movies.page"
        :message="pageNumber.toString()" />

      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.pagination {
  width: 100%;

  &__layout {
    width: 100%;    

  }
  &__list {
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }

  &__button {
    position: relative;
  }
}
</style>
