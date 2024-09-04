import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyBbEe5T0ew82y9eel9GhTsG-oTL5vATcGc",
  authDomain: "extremecombatshop.firebaseapp.com",
  projectId: "extremecombatshop",
  storageBucket: "extremecombatshop.appspot.com",
  messagingSenderId: "387180555810",
  appId: "1:387180555810:web:710d198c82187f03b5247b"

};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

