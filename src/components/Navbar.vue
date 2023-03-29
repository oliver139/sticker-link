<template>
  <nav class="navbar">
    <ul>
      <template v-for="[key, value] in links" :key="key">
        <li :class="{ 'active': route.name === key }">
          <a href="javascript:void(0)" @click="linkClicked(key)">
            {{ value.title }}
          </a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const emit = defineEmits(["linkClicked"]);
const props = defineProps({
  links: Map,
});

const linkClicked = (group) => {
  emit("linkClicked", group);
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
        color: rgb(var(--theme-normal));
        font-weight: 600;
      }
    }
  }
}
</style>
