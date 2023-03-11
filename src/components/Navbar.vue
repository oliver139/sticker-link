<template>
  <nav class="navbar">
    <ul class="link-list">
      <template v-for="[key, value] in links" :key="key">
        <li>
          <router-link :to="{ name: key }">
            {{ value.title }}
          </router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  links: Map,
});
</script>

<style lang="postcss" scoped>

</style>
