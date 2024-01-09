import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_DUunA7WqSWps2HeCBE2q3SvYCCYyL74",
  authDomain: "exmple-react-js-firebase.firebaseapp.com",
  projectId: "exmple-react-js-firebase",
  storageBucket: "exmple-react-js-firebase.appspot.com",
  messagingSenderId: "569586583343",
  appId: "1:569586583343:web:d12bfece906d4268e043da",
  measurementId: "G-JE91FXGHTJ",
};

//init firebase app
initializeApp(firebaseConfig);

//init services
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
