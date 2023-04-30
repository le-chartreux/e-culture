import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CreateGameRoomView from '@/views/CreateGameRoomView.vue'
import JoinGameRoomView from '@/views/JoinGameRoomView.vue'
import AboutView from '@/views/AboutView.vue'
import GameRoomVue from '@/views/GameRoomVue.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/create-game-room',
    name: 'Create a Game Room',
    component: CreateGameRoomView
  },
  {
    path: '/join-game-room',
    name: 'Join a Game Room',
    component: JoinGameRoomView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/game-room/:id',
    name: 'Game Room',
    component: GameRoomVue
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
