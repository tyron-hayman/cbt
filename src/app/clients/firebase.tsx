// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIRE_AUTHDOM,
  projectId: process.env.NEXT_PUBLIC_FIRE_PROID,
  storageBucket: process.env.NEXT_PUBLIC_FIRE_STOREB,
  messagingSenderId: process.env.NEXT_PUBLIC_FIRE_MESSENDID,
  appId: process.env.NEXT_PUBLIC_FIRE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIRE_MEASID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;
