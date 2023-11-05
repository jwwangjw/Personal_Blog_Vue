import HomePage from "../pages/HomePage";
import AboutMe from "../pages/AboutMe";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutMe },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
