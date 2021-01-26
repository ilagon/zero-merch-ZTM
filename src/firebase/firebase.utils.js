import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCcTu6xXygqfQ4oneXi-fpGYGbZtVj41bo",
    authDomain: "ztm-project.firebaseapp.com",
    projectId: "ztm-project",
    storageBucket: "ztm-project.appspot.com",
    messagingSenderId: "11839025294",
    appId: "1:11839025294:web:a49334b05bd69997b019df",
    measurementId: "G-ZCWEY7EWV8"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;