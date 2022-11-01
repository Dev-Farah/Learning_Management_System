// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV1N8Fpi0OZYzG0wN4jklH3R6D7rBV04s",
  authDomain: "institute-database.firebaseapp.com",
  projectId: "institute-database",
  storageBucket: "institute-database.appspot.com",
  messagingSenderId: "17751899375",
  appId: "1:17751899375:web:7c79633b4c6da2819c6f1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;