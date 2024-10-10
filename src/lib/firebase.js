import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-e78ec.firebaseapp.com",
  projectId: "chat-app-e78ec",
  storageBucket: "chat-app-e78ec.appspot.com",
  messagingSenderId: "589662298850",
  appId: "1:589662298850:web:cda4b36cdfe9695b21f4bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();