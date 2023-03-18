<template>
  <div
    class="container"
    :style="{
      '--container-width': width
    }"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: ""
  }
});
</script>

<style lang="postcss" scoped>
.container {
  width: min(var(--container-width, 50rem), 100%);
  margin: auto;
}
</style>
