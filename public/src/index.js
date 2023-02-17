import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { AggregateField, getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCkVFHVxgQigRuvRNwByMcXzR_q3vxzSWg",
  authDomain: "drink-up-195cf.firebaseapp.com",
  databaseURL: "https://drink-up-195cf-default-rtdb.firebaseio.com",
  projectId: "drink-up-195cf",
  storageBucket: "drink-up-195cf.appspot.com",
  messagingSenderId: "49108513412",
  appId: "1:49108513412:web:ada66590542f189d5b88d1",
  measurementId: "G-8MWJ6SWSN7"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

//Detect authorization state
onAuthStateChanged(auth, user => {
    if (user != null){
        console.log('Welcome!');
    } else {
        console.log('UNAVAILABLE: User under 18');
    }
});
