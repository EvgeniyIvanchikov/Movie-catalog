<script setup>

defineProps({
  type: String,
  message: String,
  class: String,
});

</script>

<template>
  <button :type="type" class="button" :class='class'>
    <div class="paragraph paragraph--xl">
      {{message}}
    </div>
    
    </button>
</template>

<style scoped lang="scss">
.button {
  font-size: 1.25rem;
  font-weight: 400;
  border: 1px solid var(--primary-text-color);
  color: var(--primary-text-color);
  font-family: var(--font-family--base);
  border-radius: 6px;
  padding: 1rem 1.5rem;
  max-width: 100%;
  min-height: 4rem;
  transition: all 0.3s ease;
  border: none;
  background: var(--palette-1--tone-100);

  &[disabled] {
    background: var(--palette-1--tone-500);
    color: var(--palette-1--tone-100);
  }
  &.pagination__button{
    @media screen and (max-width: 767px) {
      min-height: none;
      div{
        font-size: 1rem ;

      }
        }
    }
}
</style>
