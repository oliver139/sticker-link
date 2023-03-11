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
import { defineProps } from "vue";
const props = defineProps({
  width: {
    type: String,
    default: ""
  }
});
</script>

<style lang="postcss" scoped>
.container {
  width: var(--container-width, 50rem);
  margin: auto;
}
</style>
