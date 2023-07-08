<template>
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
  const list = new Set();
  props.data.links.forEach(link => {
    list.add({
      id: link.id,
      icon: `${import.meta.env.BASE_URL}img/${props.data.name}/${link.id}.webp`,
      text: link.text,
      href: link.href,
    });
  });
  return list;
});
</script>

<style lang="postcss" scoped>
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
      transition: all .3s ease;
      @media screen and (width <= 30em) {
        text-align: left;
        padding-right: var(--box-padding, 1rem);
      }
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
