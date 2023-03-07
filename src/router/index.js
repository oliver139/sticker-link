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
    meta: {
      navName: "Cinnamoroll"
    }
  },
  {
    path: "/capoo",
    name: "capoo",
    component: () => import("../views/LinkList.vue"),
    meta: {
      navName: "Capoo"
    }
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
