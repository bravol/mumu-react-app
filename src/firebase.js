// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCco0Qvvm8jbd9Bk4kUrH7k3sJJr4sjIyY",
  authDomain: "clone2-8ed61.firebaseapp.com",
  projectId: "clone2-8ed61",
  storageBucket: "clone2-8ed61.appspot.com",
  messagingSenderId: "646187862787",
  appId: "1:646187862787:web:10330fa1d4b863d2b23736",
  measurementId: "G-M0BX6PXXJJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
export default app;
