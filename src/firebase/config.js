// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyArYprF0QPDbatHSr2uXC9T-NENmMAhAiQ",
  authDomain: "eshop-38262.firebaseapp.com",
  projectId: "eshop-38262",
  storageBucket: "eshop-38262.appspot.com",
  messagingSenderId: "197580438813",
  appId: "1:197580438813:web:f4ea8ebd65370a68a5b5f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db =getFirestore(app)
export const storage =getStorage(app)
export default app;