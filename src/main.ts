import { createApp } from 'vue'
import App from './App.vue'
import HomeView from "@/views/HomeView.vue";
import router from './router'

import './assets/main.css'

createApp(App).use(router).mount('#app')
router.push(HomeView)
