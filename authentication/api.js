// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want tobr use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwt_wwP22WlgS9UezCl36OGuSiTxMfCJw",
  authDomain: "foodeviry.firebaseapp.com",
  projectId: "Foodivery",
  storageBucket: "foodeviry.appspot.com",
  messagingSenderId: "740955596727",
  appId: "1:740955596727:web:70d07364cc017a83faea32",
  measurementId: "G-87R50NEK60",
};


let app;

if(firebase.apps.length===0){

    app = firebase.initializeApp(firebaseConfig);
}

else{
    app = firebase.app();
}

const auth = firebase.auth();

export {auth};