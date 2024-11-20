import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBEOpIUj9v2hoYp9zeWIhcUmOgv3kwFp2M",
  authDomain: "career-compass-website.firebaseapp.com",
  projectId: "career-compass-website",
  storageBucket: "career-compass-website.firebasestorage.app",
  messagingSenderId: "244777493721",
  appId: "1:244777493721:web:d23c9eb41d98346fcccac8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
