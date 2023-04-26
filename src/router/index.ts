import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CreateGameView from '@/views/CreateGameView.vue'
import JoinGameView from '@/views/JoinGameView.vue'
import AboutView from '@/views/AboutView.vue'
import GameVue from '@/views/GameVue.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/create-game',
    name: 'Create game',
    component: CreateGameView
  },
  {
    path: '/join-game',
    name: 'Join game',
    component: JoinGameView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/game/:id',
    name: 'Game',
    component: GameVue
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
