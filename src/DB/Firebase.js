import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDO_MZqWOJlLIbZCTAmsMV87FbKQstnk7o",
  authDomain: "reactapp-storage.firebaseapp.com",
  projectId: "reactapp-storage",
  storageBucket: "reactapp-storage.appspot.com",
  messagingSenderId: "670751960769",
  appId: "1:670751960769:web:eabacf1e2b5cfd34abae40"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

