import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBP4gWOHp9Gj1agwGkAEh_eUGDOz8NXr8",
  authDomain: "free-from-finder.firebaseapp.com",
  databaseURL: "https://free-from-finder.firebaseio.com",
  projectId: "free-from-finder",
  storageBucket: "free-from-finder.appspot.com",
  messagingSenderId: "558285081036",
  appId: "1:558285081036:web:6b08d5dbcd22eea7753569",
  measurementId: "G-BBLXHKF9WN"
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
export const auth = firebase.auth;
export const database = firebase.firestore();
