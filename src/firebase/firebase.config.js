// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPKbqWcOmpogUxDTyBLDpQt7p6fR033dQ",
  authDomain: "dragon-news-e86d9.firebaseapp.com",
  projectId: "dragon-news-e86d9",
  storageBucket: "dragon-news-e86d9.firebasestorage.app",
  messagingSenderId: "844745444087",
  appId: "1:844745444087:web:4dfe46c946abc678dd21f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;