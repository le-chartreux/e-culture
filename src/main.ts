import { createApp } from 'vue'
import router from './router'
import { firebaseApp } from "@/firebase";
import { VueFire, VueFireFirestoreOptionsAPI } from "vuefire";

import App from './App.vue'
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.use(
  VueFire,
  {
    firebaseApp,
    modules: [
      VueFireFirestoreOptionsAPI()
    ]
  }
)
app.mount('#app')

// to save current page when reloading
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('lastRoute', router.currentRoute.value.path)
})
const initialRoute = sessionStorage.getItem('lastRoute') || '/'
router.push(initialRoute)
  .then(() => { console.log(`location set to ${initialRoute}.`) })
  .catch((reason) => {console.error(`impossible to set location to ${initialRoute} because ${reason}`)})
