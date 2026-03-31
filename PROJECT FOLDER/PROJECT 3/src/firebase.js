import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    
    apiKey: "AIzaSyDyzjvz_j-GVjwaiHcMbeilVkAR_74Z_Qg",
    authDomain: "login-project-6ab24.firebaseapp.com",
    projectId: "login-project-6ab24",
    storageBucket: "login-project-6ab24.firebasestorage.app",
    messagingSenderId: "87351390612",
    appId: "1:87351390612:web:9317d97e9e0ffcd73adf81",
    measurementId: "G-2W26T8W2SL"
    
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

