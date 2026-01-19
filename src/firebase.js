import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDY67jn7znJlfOFUyOByKIqSYbYYvm7oPg",
  authDomain: "delivery-food-74336.firebaseapp.com",
  projectId: "delivery-food-74336",
  storageBucket: "delivery-food-74336.firebasestorage.app",
  messagingSenderId: "38565311732",
  appId: "1:38565311732:web:9c23459940451e64c15aa1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
