// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFtqOzTK0AJWvCgxwx0-vJ39_E8RdCNTg",
  authDomain: "react-ecommerce-4e9ef.firebaseapp.com",
  projectId: "react-ecommerce-4e9ef",
  storageBucket: "react-ecommerce-4e9ef.appspot.com", // ✅ corrected `.app` → `.appspot.com`
  messagingSenderId: "325709461943",
  appId: "1:325709461943:web:4711f5a52968cb38511032",
  measurementId: "G-0B7BN7XQC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Analytics
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };
