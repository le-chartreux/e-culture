import { createApp } from 'vue'
import router from './router'

import App from './App.vue'
import './assets/main.css'
import 'doodle.css/doodle.css'
import { Player } from '@/firebase/entities/Player'

// basic setup of the app
const app = createApp(App)
app.use(router)
app.mount('#app')

// generating player if it does not exist
let player: Player
if (!Player.savedLocally()) {
  player = Player.generate()
  player.saveLocal()
} else {
  player = Player.loadLocal()
}
// saving the local player on the server every time to prevent case where
// the app was exited before the request was sent to the server and so it's
// impossible to load the user from the server
player.saveServer()

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
