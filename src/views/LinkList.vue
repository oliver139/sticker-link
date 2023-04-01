<template>
  <h1 class="list-title">{{ data.title }}</h1>
  <div class="list-content">
    <ul class="link-list">
      <li v-for="link in listData" :key="link.href">
        <a :href="link.href" target="_blank" rel="noopener noreferrer">
          <img class="link-icon" :src="link.icon" :alt="link.text">
          <span class="link-text">{{ link.text }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      name: "name",
      title: "title",
      logo: "logo",
      color: "#fff",
      background: "background",
      bgPos: "center",
      links: new Set([]),
    })
  },
});

const listData = computed(() => {
  let index = 0;
  const list = new Set();
  props.data.links.forEach(link => {
    index++;
    list.add({
      icon: new URL(`/src/assets/img/${props.data.name}/${props.data.name}${index}.webp`, import.meta.url).href,
      text: link.text,
      href: link.href,
    });
  });
  return list;
});
</script>

<style lang="postcss" scoped>
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
.link-list {
  --box-padding: 1rem;
  --icon-size: 3rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  > li {
    width: min(100%, 40rem);
    a {
      text-align: center;
      display: flex;
      position: relative;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      height: calc(var(--icon-size, 3rem) + var(--box-padding, 1rem) * 2);
      background: #fff;
      box-shadow: rgba(8, 49, 112, 0.24) 0px 2px 8px 0px;
      border-radius: 10rem;
      padding: var(--box-padding, 1rem) calc(var(--icon-size, 3rem) + var(--box-padding, 1rem) * 2);
    }
  }
  .link-icon {
    position: absolute;
    top: var(--box-padding, 1rem);
    left: var(--box-padding, 1rem);
    width: var(--icon-size, 3rem);
    height: var(--icon-size, 3rem);
    border-radius: 10rem;
    overflow: hidden;
  }
}
</style>
