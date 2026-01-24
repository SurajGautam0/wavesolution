// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX5XeFhpLFCEhWNRKS-455Q-IHxI354AY",
  authDomain: "xbet-53f75.firebaseapp.com",
  projectId: "xbet-53f75",
  storageBucket: "xbet-53f75.firebasestorage.app",
  messagingSenderId: "598292530686",
  appId: "1:598292530686:web:826b55bc40ffb3c8b32caf",
  measurementId: "G-N6XE88VG1B"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage }; 