import { getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const ADMIN_FIREBASE_APP_NAME = "admin"

const adminFirebaseConfig = {
  apiKey: "AIzaSyDYHg-N8VpH-kexKFn6hqs3zcEtw0-kd1Q",
  authDomain: "rockvale-889b6.firebaseapp.com",
  projectId: "rockvale-889b6",
  storageBucket: "rockvale-889b6.firebasestorage.app",
  messagingSenderId: "531866177604",
  appId: "1:531866177604:web:1b1020b9afd02c7a30ac11",
  measurementId: "G-MD1MJ3FQ22",
}

const adminApp =
  getApps().find((existingApp) => existingApp.name === ADMIN_FIREBASE_APP_NAME) ??
  initializeApp(adminFirebaseConfig, ADMIN_FIREBASE_APP_NAME)

const adminDb = getFirestore(adminApp)

export { adminApp, adminDb, adminFirebaseConfig }
