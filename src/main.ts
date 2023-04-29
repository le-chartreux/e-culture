import { createApp } from 'vue'
import router from './router'
import { firebaseApp } from '@/firebase'
import { VueFire, VueFireFirestoreOptionsAPI } from 'vuefire'

import App from './App.vue'
import './assets/main.css'
import { Player } from '@/firebase/entities/Player'

// basic setup of the app
const app = createApp(App)
app.use(router)
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireFirestoreOptionsAPI()]
})
app.mount('#app')

// generating player if it does not exist
if (!Player.storedOnLocalStorage()) {
  const player = Player.generate()
  player.saveOnLocalStorage()
  player.push()
}

// saving current page when reloading
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('lastRoute', router.currentRoute.value.path)
})
const initialRoute = sessionStorage.getItem('lastRoute') || '/'
router
  .push(initialRoute)
  .then(() => {
    console.debug(`location set to ${initialRoute}.`)
  })
  .catch((reason) => {
    console.error(`impossible to set location to ${initialRoute} because ${reason}`)
  })
