<script setup>
import { globalState, requestMovies } from '@/assets/scripts';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

const isValidInput = (searchValue) => {
  if (searchValue.trim()) {
    return true;
  } else {
    globalState.validationErrorMessage = 'This is a required field';
    return false;
  }
}

const searchMovies = (event) => {
  event.preventDefault();
  if (!isValidInput(globalState.searchInputValue)) return;

  const searchValue = globalState.searchInputValue.trim();
  globalState.movies.page = 1;
  globalState.movies.requestName = searchValue;
  requestMovies({s:searchValue, page: 1});
  };
</script>

<template>
  <form class="form" @submit="searchMovies">
    <div class="form__group">
      <Input 
      class='form__input'
      :type="'search'" 
      :placeholder="'Enter movie name'" 
      v-model="globalState.searchInputValue" 
      @input='globalState.validationErrorMessage = ""'
      
      />
      <Button       
      class='form__button'
      type="submit" 
      :disabled="globalState.isSearchButtonDisabled"
      :message="'Search'" />
    </div>
    <div v-if='globalState.validationErrorMessage' class="form__group form__group--error">
      <div class="paragraph paragraph--l">
        {{ globalState.validationErrorMessage }}
      </div>
    </div>

  </form>
</template>


<style scoped lang="scss">
.form {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;

  &__group {
    width: 100%;
    display: flex;
    @media screen and (max-width: 479px) {
        flex-direction: column;
        gap: 4px;
    }

    &--error {
      position: absolute;
      width: 100%;
      top: 100%;
      left: 0;
      color: var(--palette-2--tone-100);
      @media screen and (max-width: 991px) {
        color: var(--palette-2--tone-200);
        top: calc(100% + 1rem);
    }
    }
  }
  &__input {
    width: 100%;
  }
  &__button {
    position: relative;
  }
}
</style>
