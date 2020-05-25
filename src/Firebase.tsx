import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "free-from-finder.firebaseapp.com",
  databaseURL: "https://free-from-finder.firebaseio.com",
  projectId: "free-from-finder",
  storageBucket: "free-from-finder.appspot.com",
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);

export const uiConfig: firebaseui.auth.Config = {
  signInFlow: "popup",
  callbacks: {
    signInSuccessWithAuthResult: (): boolean => false
  },
  siteName: "Free From Finder",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    }
  ],
  credentialHelper: "none"
};
export const auth = firebase.auth();
export const database = firebase.firestore();
