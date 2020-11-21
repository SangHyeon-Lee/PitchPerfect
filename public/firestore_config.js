import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD77qeEEgwUNEAj6XDaOLZGM8YJh29q2PA",
  authDomain: "fyeesh.firebaseapp.com",
  databaseURL: "https://fyeesh.firebaseio.com",
  projectId: "fyeesh",
  storageBucket: "fyeesh.appspot.com",
  messagingSenderId: "167708075968",
  appId: "1:167708075968:web:7b487c33ee10ec616fca25",
  measurementId: "G-LGEWZSYSGG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);