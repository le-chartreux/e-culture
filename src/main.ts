import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

createApp(App).use(router).mount('#app')

// to save current page when reloading
window.addEventListener('beforeunload', () => {
  localStorage.setItem('lastRoute', router.currentRoute.value.path)
})
const lastRoute = localStorage.getItem('lastRoute')
const initialRoute = lastRoute || '/'
router.push(initialRoute)
