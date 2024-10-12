<script setup>
import { globalState, requestMovies } from '@/assets/scripts';
import Button from '@/components/Button.vue';
import { computed } from 'vue';

const arrayOfPaginationButtons = computed(() => {
  const generalNumberOfPages = Math.ceil(globalState.movies.totalResults / 10);
  const currentPageNumber = globalState.movies.page;
  const array = [];

  for (let index = 0; index < generalNumberOfPages; index += 1) {
    array.push(index + 1);
  }
  const indexOfActiveItem = array.indexOf(currentPageNumber);

  if (array.length < 8) {
    return array;
  }
  let deleteNumber;
  switch (indexOfActiveItem) {
    case 0:
      deleteNumber = array.length - 4;
      array.splice(3, deleteNumber, '...');
      break;
    case 1:
      deleteNumber = array.length -5;
      array.splice(4, deleteNumber, '...');
      break;
    case array.length - 1:
      deleteNumber = array.length - 3;
      array.splice(1, deleteNumber, '...');
      break;
    case array.length - 2:
      deleteNumber = array.length - 4;
      array.splice(1, deleteNumber, '...');
      break;
    case array.length - 3:
      deleteNumber = array.length - 5;
      array.splice(1, deleteNumber, '...');
      break;
    default:
      array.splice(1, array.length - 2, '...', array[indexOfActiveItem - 1], array[indexOfActiveItem], array[indexOfActiveItem + 1], '...' )
      break;
  }
  return array;
})

const searchMovies = (event) => {
  const newPageNumber = event.target.textContent;
  if (newPageNumber === '...') return
  const searchValue = globalState.movies.requestName;

  globalState.movies.page = +newPageNumber;
  requestMovies({ s: searchValue, page: newPageNumber });
};
</script>

<template>
  <div class="pagination">
    <div class="pagination__layout">
      <div class="pagination__list">
        <Button @click="searchMovies" v-for='pageNumber in arrayOfPaginationButtons' key='pageNumber' :class="{'pagination__button--ellipsis': pageNumber === '...'}" class='pagination__button' type="button" :disabled="pageNumber === globalState.movies.page"
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
    @media screen and (max-width: 479px) {
            gap: 0.25rem;
    }
  }

  &__button {
    position: relative;
    @media screen and (max-width: 767px) {
            padding: 0.875rem;
    }
    @media screen and (max-width: 479px) {
            padding: 0.65rem;
    }
    &--ellipsis{
      pointer-events: none;
    }
  }
}
</style>
