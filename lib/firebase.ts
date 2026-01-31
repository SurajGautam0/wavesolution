// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcTR29xl_cGjRDLg0dFrdGMq8RsifKqzU",
  authDomain: "wavesolution-59160.firebaseapp.com",
  projectId: "wavesolution-59160",
  storageBucket: "wavesolution-59160.firebasestorage.app",
  messagingSenderId: "153391934944",
  appId: "1:153391934944:web:8c8e2d9aab94c6341a4f85",
  measurementId: "G-0QQDECZB9F"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage }; 