import firebaseConfig from "./config/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebasApp = initializeApp(firebaseConfig);

const auth = getAuth(firebasApp);
const db = getFirestore(firebasApp);

export { auth , db };