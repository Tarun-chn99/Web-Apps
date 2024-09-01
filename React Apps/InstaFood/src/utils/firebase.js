import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDMif6jamFvn_VYhrF9zprHNvQfDY3hZes",
  authDomain: "instafood-24.firebaseapp.com",
  projectId: "instafood-24",
  storageBucket: "instafood-24.appspot.com",
  messagingSenderId: "956772658061",
  appId: "1:956772658061:web:078d89e7f18ffe7344ebc4",
  measurementId: "G-4WGVE83SMN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();


// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics(app);