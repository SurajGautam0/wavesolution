// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZpEAaOEigaNRG1PG4Ak1PrUGoQoZ2LVg",
  authDomain: "crystalfront-9a84c.firebaseapp.com",
  projectId: "crystalfront-9a84c",
  storageBucket: "crystalfront-9a84c.firebasestorage.app",
  messagingSenderId: "202367112109",
  appId: "1:202367112109:web:af90534914eb40a42e4724",
  measurementId: "G-KN88T9EB0F"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage }; 