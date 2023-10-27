// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF4re6cq8eBzE543aoscJsvfOmA7Ld3kc",
  authDomain: "easyteckelectronics.firebaseapp.com",
  projectId: "easyteckelectronics",
  storageBucket: "easyteckelectronics.appspot.com",
  messagingSenderId: "910791398262",
  appId: "1:910791398262:web:ace90df7167f8b2bbaa057",
  measurementId: "G-VPY7V2GPCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);