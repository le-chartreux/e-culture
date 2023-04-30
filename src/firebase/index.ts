import { initializeApp, type FirebaseApp } from 'firebase/app'
import { collection, getFirestore, CollectionReference, Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBdrW-op61lrviPqesC6ez5K5aSxHf_Y14',
  authDomain: 'e-culture-71815.firebaseapp.com',
  projectId: 'e-culture-71815',
  storageBucket: 'e-culture-71815.appspot.com',
  messagingSenderId: '52761179686',
  appId: '1:52761179686:web:19db1bff3af727288658e7'
}

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig)
const db: Firestore = getFirestore()
/* do not use these outside this package: use entities methods instead */
const gameRoomsRef: CollectionReference = collection(db, 'game-rooms')
const playersRef: CollectionReference = collection(db, 'players')
const quizzesRef: CollectionReference = collection(db, 'quizzes')

export { firebaseApp, gameRoomsRef, playersRef, quizzesRef }
