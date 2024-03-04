// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxj22qh6UG-SQsVk35q1sCiGHUD64wjfQ",
  authDomain: "edward-portfolio-cea19.firebaseapp.com",
  projectId: "edward-portfolio-cea19",
  storageBucket: "edward-portfolio-cea19.appspot.com",
  messagingSenderId: "127465153217",
  appId: "1:127465153217:web:46600147062b89b1542a40",
  measurementId: "G-R64VTKP7HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);