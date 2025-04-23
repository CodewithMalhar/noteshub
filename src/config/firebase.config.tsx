// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig:{
    apiKey:string,
    authDomain:string,
    projectId:string,
    storageBucket:string,
    messagingSenderId:string,
    appId:string,
    measurementId:string
} = {

  apiKey: "AIzaSyBVxnqD-hfwefmwUpVmLhjSWLZgwPf6mhM",

  authDomain: "git-notes-4dc75.firebaseapp.com",

  projectId: "git-notes-4dc75",

  storageBucket: "git-notes-4dc75.appspot.com",

  messagingSenderId: "520762389922",

  appId: "1:520762389922:web:5731904297ea71be3d6efb",

  measurementId: "G-13V20ESP01"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// const firestore=firebase.firestore();
const analytics = getAnalytics(app);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);
export {db, analytics, app, storage, auth, googleProvider};
