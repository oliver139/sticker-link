<template>
  <div
    ref="appWrapper"
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
        <!-- <v-icon name="hi-chevron-right" class="toggler-icon" /> -->
        <HiSolidChevronRight class="toggler-icon" />
        <span>Navigation</span>
      </button>
      <Navbar
        :links="data"
        @linkClicked="navLinkClicked"
      />
    </aside>
    <Container width="55rem">
      <header class="list-logo">
        <img
          :src="currentView.logo"
          :alt="currentView.name"
          @load="imgLoaded = true"
        >
      </header>
      <main class="list-body">
        <h1 class="list-title">{{ currentView.title }}</h1>
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
import { useRoute, useRouter } from "vue-router";
import { useDetectOutsideClick } from "@/utils/functions";
import data from "./data/data";

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
const appWrapper = ref();
const target = ref("");
const coverContent = ref(true);
const showSolidCover = ref(true);
const imgLoaded = ref(false);
const navLinkClicked = group => {
  console.log(group);
  target.value = group;
  coverContent.value = true;
  navExpand.value = false;
  imgLoaded.value = false;
};
const changeContent = () => {
  showSolidCover.value = true;
  router.push({ name: target.value });
  appWrapper.value.scrollTo(0, 0);
  target.value = "";
};
watch(imgLoaded, isLoaded => {
  if (isLoaded) {
    setTimeout(() => {
      showSolidCover.value = false;
      coverContent.value = false;
    }, 1000);
  }
});

// Get view setting
const currentView = computed(() => {
  const view = data.get(route.name);
  return {
    name: route.name,
    title: view?.title,
    logo: `${import.meta.env.BASE_URL}/img/${route.name}/logo.webp`,
    color: view?.color,
    background: `${import.meta.env.BASE_URL}/img/${route.name}/background.webp`,
    bgPos: view?.bgPos,
    links: view?.links,
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
    padding: 3rem;
  }
}

.list-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  min-height: 8rem;
  margin-bottom: 1.5rem;
}
.list-body {
  text-align: center;
  width: 100%;
}

.list-title {
  font-size: 1.5rem;
  display: inline-block;
  position: relative;
  max-width: 100%;
  background: #fff;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.1) ;
  border-radius: 1rem 0;
  padding: .75rem 4rem;
  overflow: hidden;
  &::before, &::after {
    --arrow-size: 1rem;
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    filter: drop-shadow(rgba(0 0 0 / .5) 0px 0px 2px);
  }
  &::before {
    bottom: 0;
    left: 0;
    border-top: var(--arrow-size) solid transparent;
    border-right: var(--arrow-size) solid transparent;
    border-bottom: var(--arrow-size) solid rgb(var(--theme-normal));
    border-left: var(--arrow-size) solid rgb(var(--theme-normal));
  }
  &::after {
    top: 0;
    right: 0;
    border-top: var(--arrow-size) solid rgb(var(--theme-normal));
    border-right: var(--arrow-size) solid rgb(var(--theme-normal));
    border-bottom: var(--arrow-size) solid transparent;
    border-left: var(--arrow-size) solid transparent;
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
  z-index: 1;
  .nav-toggler {
    position: absolute;
    left: 100%;
    bottom: 0;
    padding: .75rem .5rem;
    border-radius: 0 .5rem .5rem 0;
    transition: background .3s ease, color .3s ease;
    .toggler-icon {
      width: 1.5rem;
      height: 1.5rem;
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
  z-index: 2;
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
  transition: background-color .75s ease .25s;
  visibility: hidden;
}
</style>
