import { createWebHistory, createRouter } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import CreateGameView from "@/views/CreateGameView.vue";
import JoinGameView from "@/views/JoinGameView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/create-game',
    name: 'Create game',
    component: CreateGameView,
  },
  {
    path: '/join-game',
    name: 'Join game',
    component: JoinGameView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
