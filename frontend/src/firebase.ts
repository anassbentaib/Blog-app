import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRENASE_API_KEY,
  authDomain: "blog-app-47d51.firebaseapp.com",
  projectId: "blog-app-47d51",
  storageBucket: "blog-app-47d51.appspot.com",
  messagingSenderId: "652838833644",
  appId: "1:652838833644:web:1a95cc706f984c5aa7c4c9",
};

export const app = initializeApp(firebaseConfig);
