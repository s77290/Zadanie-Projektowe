import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvNtz55Z6xcIxPaPVW3dQlp1AlwgW1gI0",
  authDomain: "zadanie8-77290.firebaseapp.com",
  projectId: "zadanie8-77290",
  storageBucket: "zadanie8-77290.firebasestorage.app",
  messagingSenderId: "281242408049",
  appId: "1:281242408049:web:83a02ed6bb2e378ea2b7d0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
