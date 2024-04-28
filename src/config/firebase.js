import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7ZIqcblXKhMfRd-UTP-LDg6iJme0B4I0",
  authDomain: "vite-contact-5674a.firebaseapp.com",
  projectId: "vite-contact-5674a",
  storageBucket: "vite-contact-5674a.appspot.com",
  messagingSenderId: "213894069490",
  appId: "1:213894069490:web:baac310be394494146646b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);