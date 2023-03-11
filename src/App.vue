<template>
  <div
    id="app-wrapper"
    :style="{
      '--bg-img': `url('${currentView.background}')`,
      '--bg-color': 'white',
      '--bg-pos': currentView.bgPos
    }"
  >
    <Navbar :links="data" />
    <Container>
      <header class="list-logo">
        <img :src="currentView.logo" :alt="currentView.name">
      </header>
      <main class="list-content">
        <router-view />
      </main>
    </Container>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import data from "./data/data";
import Navbar from "./components/Navbar.vue";
import Container from "./components/Container.vue";

const route = useRoute();

// Get view setting
const currentView = computed(() => {
  return {
    name: route.name,
    logo: `/src/assets/img/${route.name}/logo.webp`,
    background: `/src/assets/img/${route.name}/background.webp`,
    bgPos: data.get(route.name)?.bgPos
  };
});
</script>

<style lang="postcss" scoped>
#app-wrapper {
  position: relative;
  background-color: var(--bg-color, white);
  background-image: var(--bg-img);
  background-repeat: no-repeat;
  background-position: var(--bg-pos, center center);
  background-size: cover;
  overflow: auto;
  isolation: isolate;
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(255 255 255 / .5);
    z-index: -10;
  }
}
</style>
