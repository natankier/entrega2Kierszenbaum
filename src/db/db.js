// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhCZcNyOF-8t-lTNokbY1DruCx6yZIjRQ",
  authDomain: "ecommerce-natan.firebaseapp.com",
  projectId: "ecommerce-natan",
  storageBucket: "ecommerce-natan.firebasestorage.app",
  messagingSenderId: "1065868769132",
  appId: "1:1065868769132:web:d3be4e39792aa6964c2549"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db;