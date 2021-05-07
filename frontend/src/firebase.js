import firebase from "firebase";

  var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAOqObkDORLaldQX0Nmv2ukSBXHMvkx5cY",
    authDomain: "contact-4dc69.firebaseapp.com",
    projectId: "contact-4dc69",
    storageBucket: "contact-4dc69.appspot.com",
    messagingSenderId: "134938148581",
    appId: "1:134938148581:web:375cd6ad48d6573b5ade0c"
});

var db = firebaseApp.firestore();

export { db };
