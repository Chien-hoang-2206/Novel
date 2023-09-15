// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA38Liip3bPVJem9J6MtyP6wEviLBPzcYM",
  authDomain: "webnovel-eee3f.firebaseapp.com",
  projectId: "webnovel-eee3f",
  storageBucket: "webnovel-eee3f.appspot.com",
  messagingSenderId: "201939309789",
  appId: "1:201939309789:web:b0a089abb9803a2ffb7734",
  measurementId: "G-LP0JPHZ93F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);