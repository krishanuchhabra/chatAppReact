import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
 //firebase config details here
})

const db = firebaseApp.firestore()

export default db
