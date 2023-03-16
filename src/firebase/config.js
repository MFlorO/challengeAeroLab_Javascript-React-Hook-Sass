import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIMXWasAvi6by22Vh2nGsXRBpeYoyVg90",
  authDomain: "journal-app-35969.firebaseapp.com",
  projectId: "journal-app-35969",
  storageBucket: "journal-app-35969.appspot.com",
  messagingSenderId: "163564040558",
  appId: "1:163564040558:web:06bb2f56c2825b7b2e517f"
};


// Initialize Firebase/app
export const FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase/Auth
export const FirebaseAuth = getAuth( FirebaseApp )

// Initialize Firebase/firebase/firestore/lite
export const FirebaseBD = getFirestore( FirebaseApp )