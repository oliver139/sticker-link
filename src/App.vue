<template>
  <div>
    <Navbar />
    <hr />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import { useViewStore } from "@/stores/view";

const view = useViewStore();

</script>

<style lang="scss" scoped>

</style>
