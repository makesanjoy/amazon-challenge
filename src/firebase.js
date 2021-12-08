import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC0SR4tTYGFplY2nyCy_LbFiknfYyRNSI",
  authDomain: "ama-clone-32465.firebaseapp.com",
  projectId: "ama-clone-32465",
  storageBucket: "ama-clone-32465.appspot.com",
  messagingSenderId: "369230726655",
  appId: "1:369230726655:web:4ded922ae54f14815493ca",
  measurementId: "G-VBBF6SM926"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();



export {db ,auth } ;