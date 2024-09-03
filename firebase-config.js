// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAJple2LRx1sOIwKoGBr4u7pWULocL7FqM",
    authDomain: "pwgurukulamvns-teachersday2024.firebaseapp.com",
    projectId: "pwgurukulamvns-teachersday2024",
    storageBucket: "pwgurukulamvns-teachersday2024.appspot.com",
    messagingSenderId: "397386939162",
    appId: "1:397386939162:web:dbceb28b0b1c6b832f4aa3"
  };

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);