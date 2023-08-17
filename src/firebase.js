// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgLny0mJsdC84uMrB5ZaMUESdmsaa_lS0",
  authDomain: "auth-app-share.firebaseapp.com",
  projectId: "auth-app-share",
  storageBucket: "auth-app-share.appspot.com",
  messagingSenderId: "684067565347",
  appId: "1:684067565347:web:74ff7f83ffb1a40347a696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}