import { createWebHistory, createRouter } from "vue-router";
import BookManager from "../components/BookManager.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/book-manager/:action/:index?",
    name: "BookManager",
    component: BookManager,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
