<template>
  <div
    id="app-wrapper"
    :style="appStyle"
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
import { computed } from "vue";
import { useRoute } from "vue-router";
import viewData from "./data/viewData";
import Navbar from "./components/Navbar.vue";

const route = useRoute();

// Get view setting
const currentView = computed(() => {
  const imageUrl = new URL(`/src/assets/img/${route.name}/logo.png`, import.meta.url).pathname;
  return {
    name: route.name,
    logo: imageUrl,
    background: viewData[route.name]?.background,
  };
});
// background
const appStyle = computed(() => {
  let styles = {};
  console.log(currentView.value);
  switch (currentView.value.background?.type) {
    case "image":
      styles = {
        "--bg-img": `url(${new URL(`/src/assets/img/${route.name}/background.jpg`, import.meta.url).pathname})`
      };
      break;

    case "color":
      styles = {
        "--bg-color": currentView.value.background?.value
      };
      break;

    default:
      styles = {
        "--bg-color": "black"
      };
      break;
  }
  console.log(styles);
  return styles;
});

</script>

<style lang="postcss" scoped>

#app-wrapper {
  background-color: var(--bg-color);
  background-image: var(--bg-img);
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: cover;
}
</style>
