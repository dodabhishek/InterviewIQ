
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-ecc10.firebaseapp.com",
  projectId: "interviewiq-ecc10",
  storageBucket: "interviewiq-ecc10.firebasestorage.app",
  messagingSenderId: "164183876608",
  appId: "1:164183876608:web:198ec5e0adc2ed6b6824e5"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth, provider};