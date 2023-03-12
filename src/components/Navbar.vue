<template>
  <nav class="navbar">
    <ul>
      <template v-for="([key, value], index) in links" :key="key">
        <li :class="{ 'active': route.name === key }">
          <router-link :to="{ name: key }" @click="linkClicked(index)">
            {{ value.title }}
          </router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const emit = defineEmits(["linkClicked"]);
const props = defineProps({
  links: Map,
});

const linkClicked = (index) => {
  emit("linkClicked", index);
};
</script>

<style lang="postcss" scoped>
.navbar {
  li {
    + li {
      margin-top: .75rem;
    }
    > a {
      display: block;
      &.router-link-active {
        color: var(--theme-normal);
        font-weight: 600;
      }
    }
  }
}
</style>
