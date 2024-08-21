
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBn7inKOF6tNF7164v3Snepxm4130lQfrk",
  authDomain: "tienda-react-311bf.firebaseapp.com",
  projectId: "tienda-react-311bf",
  storageBucket: "tienda-react-311bf.appspot.com",
  messagingSenderId: "449597285592",
  appId: "1:449597285592:web:0b0e3619b49b44d5a223ad"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db;