// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwJ6oKXqSfT0iaSZcfMqWyP01VgaQFchA",
  authDomain: "coderhouse-ecomerce-75094.firebaseapp.com",
  projectId: "coderhouse-ecomerce-75094",
  storageBucket: "coderhouse-ecomerce-75094.appspot.com",
  messagingSenderId: "591653520391",
  appId: "1:591653520391:web:baf4538d6ac2a60f9316a2",
  measurementId: "G-HCFM1GRTM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)