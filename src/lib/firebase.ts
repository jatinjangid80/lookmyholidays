import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKNkXEsg4CykGfayfvC9NB80eo_8fh4wA",
  authDomain: "custom-oasis-454718-j6.firebaseapp.com",
  projectId: "custom-oasis-454718-j6",
  storageBucket: "custom-oasis-454718-j6.firebasestorage.app",
  messagingSenderId: "751151095052",
  appId: "1:751151095052:web:7ddd897fe7d09a89713d29"
};

// Initialize Firebase (SSR-safe check to prevent duplicate app initialization)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
