<template>
  <nav class="navbar">
    <ul class="link-list">
      <template v-for="link in links" :key="link.name">
        <li v-if="!link.redirect">
          <router-link :to="link.path">
            {{ link.meta.navName }}
          </router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const links = computed(() => useRouter().getRoutes());
console.log(links.value);
</script>

<style lang="postcss" scoped>

</style>
