import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnVB27FMmuwWpzdYa3JCeh9AYZXKFIHKk",
  authDomain: "instagram-clone-3ea8e.firebaseapp.com",
  projectId: "instagram-clone-3ea8e",
  storageBucket: "instagram-clone-3ea8e.appspot.com",
  messagingSenderId: "493570699101",
  appId: "1:493570699101:web:17aa40ecfc440df1d302b4",
  measurementId: "G-SGZDX1PYYJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
