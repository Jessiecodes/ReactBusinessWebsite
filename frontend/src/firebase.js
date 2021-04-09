import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
    apiKey: "AIzaSyCk8VElsRuZsLdZbD1MSbRAz-OAk31cA-k",
    authDomain: "contactform-635e9.firebaseapp.com",
    projectId: "contactform-635e9",
    storageBucket: "contactform-635e9.appspot.com",
    messagingSenderId: "10376118702",
    appId: "1:10376118702:web:7351cd691000c53fd1083f"


});

var db = firebaseApp.firestore();

export { db };
