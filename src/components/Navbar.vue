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
const route = useRoute();

const emit = defineEmits(["linkClicked"]);
const props = defineProps({
  links: Map,
});

const linkClicked = (group) => {
  if (route.name === group) return;
  emit("linkClicked", group);
};
</script>

<style lang="postcss" scoped>
.navbar {
  li {
    > a {
      display: block;
    }
    &.active {
      color: rgb(var(--theme-normal));
      font-weight: 600;
      > a {
        cursor: default;
        pointer-events: none;
      }
    }
    + li {
      margin-top: .75rem;
    }
  }
}
</style>
