import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

createApp(App).use(router).mount('#app')

let initialRoute = '/'
// to save current page when reloading
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('lastRoute', router.currentRoute.value.path)
})
initialRoute = sessionStorage.getItem('lastRoute') || initialRoute
router.push(initialRoute)
