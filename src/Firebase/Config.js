// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqdmnAut8C1d28soZar89KAvPkoXiYGyU",
  authDomain: "deepaudio-e-commerce.firebaseapp.com",
  projectId: "deepaudio-e-commerce",
  storageBucket: "deepaudio-e-commerce.appspot.com",
  messagingSenderId: "19665868445",
  appId: "1:19665868445:web:03f0510b9ce6ba0557e674"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const startFirebase = () => app