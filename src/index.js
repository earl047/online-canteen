// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import{getFirestore, collection, addDoc} from "firebase/firestore";

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

onAuthStateChanged(auth, (user) => {
  if (user){
    alert(`User has signed in! The user in session is: ${user.email}`)
  }else{  
    alert('No user currently')
  }
  })

  const signOutBtn = document.querySelector('.sign-out');

  signOutBtn.addEventListener('click', () => {
    signOut(auth);
  })

  
  const epSignInBtn = document.querySelector('.ep-sign-in');

  epSignInBtn.addEventListener('click', () => {
    const email = 'try@email.com';
    const pass = 'try123456';
    signInWithEmailAndPassword(auth, email, pass).then((result) => {
      alert('Hi, you signed in with an email and password')
    }).catch((error) => {
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`)
    });
  })

const db = getFirestore(app);
const saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click",async() => {
  const collectionRef = collection(db, "desserts")
  const newDessert = await addDoc (collectionRef , {
    name: "Leche Plan",
    price: 120000
  })
  console.log(`Created a new dessert: ${newDessert.name}`)
  })