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
      ref="navbarAside"
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
        @linkClicked="navLinkClicked"
      />
    </aside>
    <Container>
      <header class="list-logo">
        <img :src="currentView.logo" :alt="currentView.name" @click="coverContent = !coverContent" @load="imgLoaded = true">
      </header>
      <main class="list-content">
        <router-view :data="currentView" />
      </main>
    </Container>

    <Transition name="position-y" @after-enter="changeContent">
      <div v-show="coverContent" class="fade-cover" />
    </Transition>
    <div class="solid-cover" :style="showSolidCover ? 'visibility: visible' : null"/>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDetectOutsideClick } from "@/utils/functions";
import data from "./data/data";
import Navbar from "./components/Navbar.vue";
import Container from "./components/Container.vue";

const route = useRoute();
const router = useRouter();

// Navbar
const navbarAside = ref();
const navExpand = ref(false);
const navToggle = () => {
  navExpand.value = !navExpand.value;
};
useDetectOutsideClick(navbarAside, () => {
  navExpand.value = false;
});
// Navbar click handle
const target = ref("");
const coverContent = ref(false);
const showSolidCover = ref(false);
const imgLoaded = ref(true);
const navLinkClicked = group => {
  console.log(group);
  target.value = group;
  coverContent.value = true;
  navExpand.value = false;
  imgLoaded.value = false;
};
const changeContent = el => {
  showSolidCover.value = true;
  router.push({ name: target.value });
  target.value = "";

  setTimeout(() => {
    for (;;) {
      if (imgLoaded.value) {
        showSolidCover.value = false;
        coverContent.value = false;
        break;
      }
    }
  }, 750);
};

// Get view setting
const currentView = computed(() => {
  const view = data.get(route.name);
  return {
    name: route.name,
    title: view?.title,
    logo: new URL(`/src/assets/img/${route.name}/logo.webp`, import.meta.url).pathname,
    color: view?.color,
    background: new URL(`/src/assets/img/${route.name}/background.webp`, import.meta.url).pathname,
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
  > .container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 3rem 2rem;
    .list-logo {
      width: 15rem;
      margin-bottom: 1.5rem;
    }
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

.fade-cover, .solid-cover {
  position: fixed;
  width: 100%;
  :where(&) {
    inset: 0;
  }
}
.fade-cover {
  height: 200%;
  background: transparent linear-gradient(to bottom, rgb(var(--theme-normal)) 50%, transparent 100%) no-repeat;
}
.solid-cover {
  height: 100%;
  background: rgb(var(--theme-normal));
  transition: background-color .75s ease;
  visibility: hidden;
}
</style>
