import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAF151DXqJ0wakbjm-bIvii8FszAn5C1sE",
  authDomain: "tienda-registro.firebaseapp.com",
  projectId: "tienda-registro",
  storageBucket: "tienda-registro.firebasestorage.app",
  messagingSenderId: "758569170962",
  appId: "1:758569170962:web:71dd645f5aee29f19340cb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);