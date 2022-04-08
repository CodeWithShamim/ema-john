// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIrJDY8RVJBcpU8ZDfWBMTVkBx-T0R0cQ",
    authDomain: "ema-john-100.firebaseapp.com",
    projectId: "ema-john-100",
    storageBucket: "ema-john-100.appspot.com",
    messagingSenderId: "680683252530",
    appId: "1:680683252530:web:4734398a027554b723852b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;