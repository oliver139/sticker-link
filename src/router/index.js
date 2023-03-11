import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "cinnamoroll",
  },
  {
    path: "/cinnamoroll",
    name: "cinnamoroll",
    component: () => import("../views/LinkList.vue"),
  },
  {
    path: "/capoo",
    name: "capoo",
    component: () => import("../views/LinkList.vue"),
  },
  {
    path: "/pop_team",
    name: "pop_team",
    component: () => import("../views/LinkList.vue"),
  },
  {
    path: "/dtto_friends",
    name: "dtto_friends",
    component: () => import("../views/LinkList.vue"),
  },
  {
    path: "/pooh",
    name: "pooh",
    component: () => import("../views/LinkList.vue"),
  },
  {
    path: "/milk_cat",
    name: "milk_cat",
    component: () => import("../views/LinkList.vue"),
  },
  {
    path: "/sumikko",
    name: "sumikko",
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
