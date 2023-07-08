import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "Cinnamoroll",
  },
  {
    path: "/cinnamoroll",
    name: "Cinnamoroll",
    component: () => import("../views/LinkList.vue"),
  },
  {
    path: "/capoo",
    name: "Capoo",
    component: () => import("../views/LinkList.vue"),
  },
  {
    path: "/pop-team",
    name: "PopTeam",
    component: () => import("../views/LinkList.vue"),
  },
  {
    path: "/dtto-friends",
    name: "DttoFriends",
    component: () => import("../views/LinkList.vue"),
  },
  {
    path: "/pooh",
    name: "Pooh",
    component: () => import("../views/LinkList.vue"),
  },
  {
    path: "/milk-cat",
    name: "MilkCat",
    component: () => import("../views/LinkList.vue"),
  },
  {
    path: "/sumikko",
    name: "Sumikko",
    component: () => import("../views/LinkList.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  }
];

const router = createRouter({
  history: createWebHistory("/sticker-link/"),
  routes,
});

export default router;
