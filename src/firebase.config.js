import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "house-marketplace-c93b7.firebaseapp.com",
  projectId: "house-marketplace-c93b7",
  storageBucket: "house-marketplace-c93b7.appspot.com",
  messagingSenderId: "369832680903",
  appId: "1:369832680903:web:d32f48cfa6f8bdc8758de2",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
