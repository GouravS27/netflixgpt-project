// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZkx3uSqdoeDTla2blL9YUPLe78hcTdJw",
  authDomain: "netflixgpt-gaurav27.firebaseapp.com",
  projectId: "netflixgpt-gaurav27",
  storageBucket: "netflixgpt-gaurav27.firebasestorage.app",
  messagingSenderId: "623735872687",
  appId: "1:623735872687:web:95a8531f969b82b4ba885a",
  measurementId: "G-RBSC2X5VN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
