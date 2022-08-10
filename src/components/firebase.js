import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIXnzvLqY5d1AGEjtXMYyu97MIFj3S9Aw",
  authDomain: "clone-1cafa.firebaseapp.com",
  projectId: "clone-1cafa",
  storageBucket: "clone-1cafa.appspot.com",
  messagingSenderId: "625248872982",
  appId: "1:625248872982:web:ef0c178e1bae4a37e5a337",
  measurementId: "G-L1MPPN1X95"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

const auth = firebase.auth();

export { db, auth };