import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: 'free-from-finder.firebaseapp.com',
  databaseURL: 'https://free-from-finder.firebaseio.com',
  projectId: 'free-from-finder',
  storageBucket: 'free-from-finder.appspot.com',
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const database = firebase.firestore()
