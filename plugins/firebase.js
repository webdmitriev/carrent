import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {

  const config = {
    apiKey: "AIzaSyDGP7QUgre6UPGae55_tXlJ6Og79jx-Dq8",
    authDomain: "carrent-3303f.firebaseapp.com",
    databaseURL: "https://carrent-3303f.firebaseio.com",
    projectId: "carrent-3303f",
    storageBucket: "carrent-3303f.appspot.com",
    messagingSenderId: "739034381916",
    appId: "1:739034381916:web:49d914aae5e4aee5"
  }

  firebase.initializeApp(config)
}

const fireDb = firebase.firestore()

export { fireDb }