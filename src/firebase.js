import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJbwGdUt74LPxvNHl5xWmWAf2ArkzKzE0",
  authDomain: "messengerapp-4cbaa.firebaseapp.com",
  projectId: "messengerapp-4cbaa",
  storageBucket: "messengerapp-4cbaa.appspot.com",
  messagingSenderId: "544277255132",
  appId: "1:544277255132:web:ac9ce44ffeacd3b31f3519",
  measurementId: "G-NBDPQSGR4L"
})

const db = firebaseApp.firestore()

export default db