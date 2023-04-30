import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBdrW-op61lrviPqesC6ez5K5aSxHf_Y14',
  authDomain: 'e-culture-71815.firebaseapp.com',
  projectId: 'e-culture-71815',
  storageBucket: 'e-culture-71815.appspot.com',
  messagingSenderId: '52761179686',
  appId: '1:52761179686:web:19db1bff3af727288658e7'
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore()
/* do not use these: use entities methods */
const gameRoomsRef = collection(db, 'game-rooms')
const playersRef = collection(db, 'players')
const quizzesRef = collection(db, 'quizzes')

export { firebaseApp, gameRoomsRef, playersRef, quizzesRef }
