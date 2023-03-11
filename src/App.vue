<template>
  <div
    id="app-wrapper"
    :style="{
      '--bg-img': `url('${currentView.background}')`,
      '--bg-color': white,
      '--bg-pos': currentView.bgPos
    }"
  >
    <Navbar />
    <header class="list-logo">
      <img :src="currentView.logo" :alt="currentView.name">
    </header>
    <main class="list-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import data from "./data/data";
import Navbar from "./components/Navbar.vue";

const route = useRoute();

// Get view setting
const currentView = computed(() => {
  return {
    name: route.name,
    logo: `/src/assets/img/${route.name}/logo.webp`,
    background: `/src/assets/img/${route.name}/background.webp`,
    bgPos: data[route.name].bgPos
  };
});
</script>

<style lang="postcss" scoped>
#app-wrapper {
  background-color: var(--bg-color, white);
  background-image: var(--bg-img);
  background-repeat: no-repeat;
  background-position: var(--bg-pos, center center);
  background-size: cover;
  overflow: auto;
}
</style>
