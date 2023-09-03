import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/cinnamoroll",
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
    path: "/others",
    name: "Others",
    component: () => import("../views/LinkList.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
