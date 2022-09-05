// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHJe6KVuPVmuZGFOcxZ6fadafvcOvl8aU",
  authDomain: "pt-project-f9d91.firebaseapp.com",
  projectId: "pt-project-f9d91",
  storageBucket: "pt-project-f9d91.appspot.com",
  messagingSenderId: "937707669793",
  appId: "1:937707669793:web:43ff8544fe6ef1a03b5660"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);