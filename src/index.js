// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJwqggPEu48DrkBhf_x1mdjycRSGRNO10",
  authDomain: "online-canteen-a75bd.firebaseapp.com",
  projectId: "online-canteen-a75bd",
  storageBucket: "online-canteen-a75bd.appspot.com",
  messagingSenderId: "322987029756",
  appId: "1:322987029756:web:c295cd39737e5a7abf9379",
  measurementId: "G-30L69TX0P7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)

const googleSignInBtn = document.querySelector('.google-sign-in');
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

googleSignInBtn.addEventListener('click', () => {
  signInWithPopup(auth, provider).then((result) => {  //needs these parameters
    const user = result.user;
    alert(`Hello ${user.displayName}`)
  }).catch((error) => {
    const errorMessage = error.message;
    alert(`Error ${errorMessage}`)
  });
});