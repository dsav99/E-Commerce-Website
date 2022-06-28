// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDIrlnc30FAJn8BTgKZ3TlDKlBjnW72Rw0",
    authDomain: "project-4dadb.firebaseapp.com",
    projectId: "project-4dadb",
    storageBucket: "project-4dadb.appspot.com",
    messagingSenderId: "192113652036",
    appId: "1:192113652036:web:056a2e7f5899f402986711",
    measurementId: "G-1KPDW3KC6K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};