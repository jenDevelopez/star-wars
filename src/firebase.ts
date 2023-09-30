
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBZJ7FZwCXQeZo3niy-QmPkKj0JVTW1LgI",
  authDomain: "star-wars-portfolio-64c3e.firebaseapp.com",
  projectId: "star-wars-portfolio-64c3e",
  storageBucket: "star-wars-portfolio-64c3e.appspot.com",
  messagingSenderId: "949975505082",
  appId: "1:949975505082:web:5fd9e64b120719d9148a83"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)