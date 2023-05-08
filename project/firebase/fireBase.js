// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz2S08eLONO8LZ2Y_-zbJ0wh89-SjL0cA",
  authDomain: "appp-679e9.firebaseapp.com",
  projectId: "appp-679e9",
  storageBucket: "appp-679e9.appspot.com",
  messagingSenderId: "850743449747",
  appId: "1:850743449747:web:05b6b3159229b020cc1566",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage, app };
