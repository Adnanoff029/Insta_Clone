import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "instalight-50127.firebaseapp.com",
  projectId: "instalight-50127",
  storageBucket: "instalight-50127.appspot.com",
  messagingSenderId: "926549257607",
  appId: "1:926549257607:web:a5d983cbe8cec18c1db722",
  measurementId: "G-7CMJSR47WJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
