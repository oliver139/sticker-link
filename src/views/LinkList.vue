<template>
  <h1 class="list-title">{{ data.title }}</h1>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      name: "name",
      title: "title",
      logo: "logo",
      color: "#fff",
      background: "background",
      bgPos: "center"
    })
  },
});
</script>

<style lang="postcss" scoped>
.list-title {
  font-size: 1.5rem;
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
</style>
