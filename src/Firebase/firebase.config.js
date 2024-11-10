// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgh131bU-h6Y91BgPaOTJ5gwxTeUUGGBg",
  authDomain: "b9a10-client-side-tahmidtausif.firebaseapp.com",
  projectId: "b9a10-client-side-tahmidtausif",
  storageBucket: "b9a10-client-side-tahmidtausif.appspot.com",
  messagingSenderId: "938849247591",
  appId: "1:938849247591:web:b52c4cdc62a94bbc648fc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;