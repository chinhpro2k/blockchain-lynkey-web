import firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdCe2plWFElM4aZA3fsEBVy3UF2l8CxmU",
  authDomain: "bework-test.firebaseapp.com",
  databaseURL: "https://bework-test.firebaseio.com",
  projectId: "bework-test",
  storageBucket: "bework-test.appspot.com",
  messagingSenderId: "879412864419",
  appId: "1:879412864419:web:bb0294d335add09afc6616",
  measurementId: "G-Q50NNCC3T5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig, "secondary");

export default firebase.firestore();
