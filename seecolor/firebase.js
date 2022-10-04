// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA44VOJOUFEsku0CUzrwiogswSZrli38gs",
  authDomain: "seecolor-unt.firebaseapp.com",
  databaseURL: "https://seecolor-unt-default-rtdb.firebaseio.com",
  projectId: "seecolor-unt",
  storageBucket: "seecolor-unt.appspot.com",
  messagingSenderId: "675872053877",
  appId: "1:675872053877:web:f1a2f4113d578a0903763c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = initializeApp(app);