import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GiveAway from "../views/GiveAway.vue";
import Sort from "../views/Sort.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/giveaway/:id",
    name: "GiveAway",
    component: GiveAway,
  },
  {
    path: "/sort/",
    name: "Sort",
    component: Sort,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
