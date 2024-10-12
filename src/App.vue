<script setup>
import { closeMenu } from '@/assets/scripts/index.js';
import { onMounted } from 'vue';
import { globalState } from '@/assets/scripts';
// import PageOverlay from "./layouts/PageOverlay.vue";
import Header from "./layouts/Header.vue";
import GridResult from "./layouts/GridResult.vue";
import Footer from "./layouts/Footer.vue";

onMounted(() => {
  const toggleIsMobileVariable = () =>{
    const checkWindowWidth = () =>{
      const isMobile = window.matchMedia("(max-width: 991px)").matches;
      globalState.isMobile = isMobile;

      if (isMobile) {
        closeMenu();
      }

    }
    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth)
  }
  toggleIsMobileVariable();
})
</script>

<template>
  <!-- <PageOverlay /> -->
  <Header />
  <GridResult />
  <Footer />
</template>
