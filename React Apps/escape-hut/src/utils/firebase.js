// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBA_qJEixvaMsWDRx11VtYrGP3Km7rm8KQ",
  authDomain: "escapehut-59354.firebaseapp.com",
  projectId: "escapehut-59354",
  storageBucket: "escapehut-59354.appspot.com",
  messagingSenderId: "180339741980",
  appId: "1:180339741980:web:def325ec77187490ccd6d9",
  measurementId: "G-K6MLW2R8L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);