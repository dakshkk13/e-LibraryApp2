import firebase from "firebase";
require("@firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsG64HeOOBjsJH4laA_GfmBc2Cw41ozP4",
  authDomain: "e-libraryapp-305fe.firebaseapp.com",
  projectId: "e-libraryapp-305fe",
  storageBucket: "e-libraryapp-305fe.appspot.com",
  messagingSenderId: "683702919445",
  appId: "1:683702919445:web:1c31855eb0872a823f091c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
