import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJb5wHBK9WZdTTettk01qRw6W162zwIcY",
  authDomain: "shorts-app-435ed.firebaseapp.com",
  projectId: "shorts-app-435ed",
  storageBucket: "shorts-app-435ed.appspot.com",
  messagingSenderId: "807093511633",
  appId: "1:807093511633:web:e05a91d244f148fb832cf0",
  measurementId: "G-7KHYYZB7BP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the auth service
const auth = getAuth(app);

export { auth };
