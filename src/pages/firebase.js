// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"; // Authentication import 
import { getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm-PBFeQ-FeOBQb5t8YWo4LaDM2JmDrlk",
  authDomain: "chat-app1-dca83.firebaseapp.com",
  projectId: "chat-app1-dca83",
  storageBucket: "chat-app1-dca83.appspot.com",
  messagingSenderId: "74985083954",
  appId: "1:74985083954:web:9e592673291d3c6dae982b",
  measurementId: "G-QZ0E4028GT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);