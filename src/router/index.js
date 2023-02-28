import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "cinnamoroll",
  },
  {
    path: "/cinnamoroll",
    name: "cinnamoroll",
    component: () => import("../views/Cinnamoroll.vue")
  },
  {
    path: "/capoo",
    name: "capoo",
    component: () => import("../views/Capoo.vue")
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
