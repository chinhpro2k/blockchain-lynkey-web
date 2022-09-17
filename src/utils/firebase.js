import firebase from "firebase";
import "firebase/database";
import "firebase/firestore";

// const secondaryAppConfig = {
//   apiKey: process.env.VUE_APP_FIREBASE_KEY,
//   authDomain: "lynkey-production.firebaseapp.com",
//   databaseURL:
//     "https://lynkey-production-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "lynkey-production",
//   storageBucket: "lynkey-production.appspot.com",
//   messagingSenderId: "307446590457",
//   appId: "1:307446590457:web:30c86c9a70d3a169eaeb28",
//   measurementId: "G-8ZS353TBLR",
// };

// const secondaryAppConfig = {
//   apiKey: "AIzaSyBdCe2plWFElM4aZA3fsEBVy3UF2l8CxmU",
//   authDomain: "bework-test.firebaseapp.com",
//   databaseURL: "https://bework-test.firebaseio.com",
//   projectId: "bework-test",
//   storageBucket: "bework-test.appspot.com",
//   messagingSenderId: "879412864419",
//   appId: "1:879412864419:web:bb0294d335add09afc6616",
//   measurementId: "G-Q50NNCC3T5",
// };
const secondaryAppConfig = {
  apiKey: "AIzaSyDnd6_cM8bruxBU-EDsgfRmd5DmxnZpBME",
  authDomain: "blockchain-lynkey-test.firebaseapp.com",
  databaseURL:
    "https://blockchain-lynkey-test-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blockchain-lynkey-test",
  storageBucket: "blockchain-lynkey-test.appspot.com",
  messagingSenderId: "180404467467",
  appId: "1:180404467467:web:d356247e25fcba10fdd40e",
  measurementId: "G-KW2XEDD980",
};
const defaultProject = firebase.initializeApp(secondaryAppConfig);
// const secondaryApp = firebase.initializeApp(secondaryAppConfig, "secondary");

export default defaultProject;
