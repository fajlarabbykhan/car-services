// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiEGhJBBaplbj-q1DGwODPs_GCdCUwD4U",
    authDomain: "genious-car-services-6c498.firebaseapp.com",
    projectId: "genious-car-services-6c498",
    storageBucket: "genious-car-services-6c498.appspot.com",
    messagingSenderId: "171822691346",
    appId: "1:171822691346:web:967aff41cd52fc5ab294cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth