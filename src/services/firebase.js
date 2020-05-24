import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCrmZ7Bjl7Z1Fcsk0Y0mC8sefbYKhrW3nI",
    authDomain: "wallet-76187.firebaseapp.com",
    databaseURL: "https://wallet-76187.firebaseio.com",
    projectId: "wallet-76187",
    storageBucket: "wallet-76187.appspot.com",
    messagingSenderId: "176376236488",
    appId: "1:176376236488:web:1adc8f4cf0daa0bd6718fd",
    measurementId: "G-SVP0ETXS16"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase