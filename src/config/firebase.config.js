// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4ysU7DPRkcwcRbMt4yZF7obKMsa1qJAQ",
  authDomain: "sami-shop.firebaseapp.com",
  projectId: "sami-shop",
  storageBucket: "sami-shop.appspot.com",
  messagingSenderId: "880864026866",
  appId: "1:880864026866:web:af6e7c8cd51c5dbb35706b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app