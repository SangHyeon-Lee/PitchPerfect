import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyD77qeEEgwUNEAj6XDaOLZGM8YJh29q2PA",
  authDomain: "fyeesh.firebaseapp.com",
  databaseURL: "https://fyeesh.firebaseio.com",
  projectId: "fyeesh",
  storageBucket: "fyeesh.appspot.com",
  messagingSenderId: "167708075968",
  appId: "1:167708075968:web:7b487c33ee10ec616fca25",
  measurementId: "G-LGEWZSYSGG"
};
firebase.initializeApp(firebaseConfig);

// utils
const firestore = firebase.firestore();
const firestorage = firebase.storage();

// export utils/refs
export { firestore, firestorage };
