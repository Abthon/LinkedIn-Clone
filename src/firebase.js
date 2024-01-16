import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2OxQWUkqfBABy9iKeiJCa6rBzXEj3lxI",
  authDomain: "linkedinclone-8f212.firebaseapp.com",
  projectId: "linkedinclone-8f212",
  storageBucket: "linkedinclone-8f212.appspot.com",
  messagingSenderId: "805682594422",
  appId: "1:805682594422:web:32c66d542bf9b04d5ed557",
  measurementId: "G-XMC2QCN0X7"
};


firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()

export {firebase, auth, db};