import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBhrNlRZB01pTEnDUNoblVmaHSstdY2fec",
  authDomain: "netflix-s-clone-dc8bb.firebaseapp.com",
  projectId: "netflix-s-clone-dc8bb",
  storageBucket: "netflix-s-clone-dc8bb.appspot.com",
  messagingSenderId: "759290090571",
  appId: "1:759290090571:web:8b0f9b00d7c65fe16a29ce",
  measurementId: "G-DHW7Z0SS7F",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
