import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRErc_gm2CJhMwI6Bc1wLNsLgH_W-ikSU",
  authDomain: "proyectofinal-react-99af5.firebaseapp.com",
  projectId: "proyectofinal-react-99af5",
  storageBucket: "proyectofinal-react-99af5.appspot.com",
  messagingSenderId: "57327262243",
  appId: "1:57327262243:web:bd965671c1defcc87c6f96",
  measurementId: "G-5K5Z8K65J3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
