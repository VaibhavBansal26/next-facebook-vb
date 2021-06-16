import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB2SlDTfnwV7H0IIUomkthoOAw8mzPeoy8",
    authDomain: "react-facebook-vb.firebaseapp.com",
    databaseURL: "https://react-facebook-vb.firebaseio.com",
    projectId: "react-facebook-vb",
    storageBucket: "react-facebook-vb.appspot.com",
    messagingSenderId: "920185596813",
    appId: "1:920185596813:web:0295602fad2c4e9b082bc4",
    measurementId: "G-ZZSGZJTLL5"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();
  const db = app.firestore();
  const storage = firebase.storage();

  export {db, storage};