// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYHg-N8VpH-kexKFn6hqs3zcEtw0-kd1Q",
  authDomain: "rockvale-889b6.firebaseapp.com",
  databaseURL: "https://rockvale-889b6-default-rtdb.firebaseio.com",
  projectId: "rockvale-889b6",
  storageBucket: "rockvale-889b6.firebasestorage.app",
  messagingSenderId: "531866177604",
  appId: "1:531866177604:web:1b1020b9afd02c7a30ac11",
  measurementId: "G-MD1MJ3FQ22"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage, firebaseConfig }; 
