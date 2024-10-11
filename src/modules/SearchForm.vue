<script setup>
import { globalState, API } from '@/assets/scripts';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

const searchMovies = (event) => {
  event.preventDefault();
  const searchValue = globalState.searchInput;
  const searchAddress = `${API.ROOT}?apikey=${API.KEY}&s=${searchValue}`;
  console.log(searchValue, searchAddress);};
</script>

<template>
  <form class="form" @submit="searchMovies">
    <p>Current searchInput value: {{ globalState.searchInput }}</p>
    <Input 
      :type="'search'"
      :placeholder="'Enter movie name'" 
      v-model="globalState.searchInput"
    />
    
    <Button type="submit" :message="'Search'" />
  </form>
</template>
