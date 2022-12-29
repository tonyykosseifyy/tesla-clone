import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
export const provider = new GoogleAuthProvider();



const firebaseConfig = {
  apiKey: "AIzaSyB_iqeZKbF9d2nYNMLZSGOO2U5UtjDN82w",
  authDomain: "tesla-clone-cbdc1.firebaseapp.com",
  projectId: "tesla-clone-cbdc1",
  storageBucket: "tesla-clone-cbdc1.appspot.com",
  messagingSenderId: "43819711387",
  appId: "1:43819711387:web:761528b27cce7554663f3e",
  measurementId: "G-B1Q9LRE4TJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
