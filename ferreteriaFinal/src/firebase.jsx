
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBEWRSFD2ult9c_7S5euC1WDrTQ6E2dJcA",
  authDomain: "proyecto-fin-4ff60.firebaseapp.com",
  projectId: "proyecto-fin-4ff60",
  storageBucket: "proyecto-fin-4ff60.appspot.com",
  messagingSenderId: "325190449718",
  appId: "1:325190449718:web:1c196862b1eb7518857697"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };