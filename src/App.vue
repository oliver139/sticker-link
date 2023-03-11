<template>
  <div
    id="app-wrapper"
    :style="{
      '--bg-img': `url('${currentView.background}')`,
      '--bg-pos': currentView.bgPos,
      '--theme-normal': currentView.color?.get('normal'),
      '--theme-light': currentView.color?.get('light'),
    }"
  >
    <aside
      ref="navbar"
      :class="[
        'navbar-container',
        { 'expand': navExpand }
      ]"
    >
      <button
        type="button"
        class="nav-toggler"
        @click="navToggle"
      >
        <v-icon name="hi-chevron-right" class="toggler-icon" />
        <span>Navigation</span>
      </button>
      <Navbar
        :links="data"
        @linkClicked="navExpand = false"
      />
    </aside>
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
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useDetectOutsideClick } from "@/utils/functions";
import data from "./data/data";
import Navbar from "./components/Navbar.vue";
import Container from "./components/Container.vue";

const route = useRoute();

// Navbar
const navbar = ref();
const navExpand = ref(false);
const navToggle = () => {
  navExpand.value = !navExpand.value;
};
useDetectOutsideClick(navbar, () => {
  navExpand.value = false;
});

// Get view setting
const currentView = computed(() => {
  const view = data.get(route.name);
  return {
    name: route.name,
    logo: `/src/assets/img/${route.name}/logo.webp`,
    color: view?.color,
    background: `/src/assets/img/${route.name}/background.webp`,
    bgPos: view?.bgPos
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
    pointer-events: none;
  }
}
.navbar-container {
  position: fixed;
  left: 0;
  bottom: 3rem;
  background: #fff;
  border-top-right-radius: .5rem;
  padding: 1.5rem 2rem;
  transform: translateX(-100%);
  transition: transform .3s ease;
  isolation: isolate;
  .nav-toggler {
    position: absolute;
    left: 100%;
    bottom: 0;
    padding: .75rem .5rem;
    border-radius: 0 .5rem .5rem 0;
    transition: background .3s ease, color .3s ease;
    .toggler-icon {
      margin-bottom: 0.25rem;
      transition: transform .3s ease;
    }
    > span {
      writing-mode: vertical-rl;
    }
  }
  &.expand {
    transform: translateX(0);
    .nav-toggler {
      .toggler-icon {
        transform: scaleX(-1);
      }
    }
  }
}
</style>
