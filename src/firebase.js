// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuwjv4hvSwefSZA94MQCkKUTWf7ld-1Yc",
  authDomain: "random-data-a2724.firebaseapp.com",
  projectId: "random-data-a2724",
  storageBucket: "random-data-a2724.appspot.com",
  messagingSenderId: "974006159549",
  appId: "1:974006159549:web:f8953527b27fb32c9f0fd4",
  measurementId: "G-FDH7H553ZG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// const analytics = getAnalytics(app);
