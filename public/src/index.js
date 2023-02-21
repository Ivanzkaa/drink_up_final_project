import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, set, get, ref} from "firebase/database";
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

// Call methods from firebase
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


//USER DATA 

var spiritBtn = document.querySelector("#submit-button1");
let preferenceBtn = document.getElementById("submit-button2");

function SpiritData() {
  set(ref(db, "Spirit/"), {
    Spirit : spiritBtn.id
  })
}

function PreferenceData() {
  set(ref(db, "Preference/"), {
    Preference : preferenceBtn.id
})
}

spiritBtn.addEventListener('click', SpiritData);
preferenceBtn.addEventListener('click', PreferenceData);
