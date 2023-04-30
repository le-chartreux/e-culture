import { createApp } from 'vue'
import router from './router'

import App from './App.vue'
import './assets/main.css'
import { Player } from '@/firebase/entities/Player'

// basic setup of the app
const app = createApp(App)
app.use(router)
app.mount('#app')

// generating player if it does not exist
if (!Player.savedLocally()) {
  const player = Player.generate()
  player.saveLocal()
  player.saveServer()
}

// saving current page when reloading
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('lastRoute', router.currentRoute.value.path)
})
const initialRoute: string = sessionStorage.getItem('lastRoute') || '/'
router
  .push(initialRoute)
  .then((): void => {
    console.debug(`location set to ${initialRoute}.`)
  })
  .catch((reason): void => {
    console.error(`impossible to set location to ${initialRoute} because ${reason}`)
  })
