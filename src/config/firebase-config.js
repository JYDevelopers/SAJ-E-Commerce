// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv9FeS57c8foBYSUMzw1ynMUs-xZZ2PNw",
  authDomain: "saj-e-commerce.firebaseapp.com",
  projectId: "saj-e-commerce",
  storageBucket: "saj-e-commerce.appspot.com",
  messagingSenderId: "730249809129",
  appId: "1:730249809129:web:b20c7d5ecbca62c49df478",
  measurementId: "G-DXF2N4ZVLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);