import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB8xq14ZNu2OZbf66tDcuCYngH4JVEo3Rw",
    authDomain: "react-tfm-blog.firebaseapp.com",
    databaseURL: "https://react-tfm-blog.firebaseio.com",
    projectId: "react-tfm-blog",
    storageBucket: "react-tfm-blog.appspot.com",
    messagingSenderId: "454034508794",
    appId: "1:454034508794:web:e0a91c33eb24e63250f243",
    measurementId: "G-DP26W464RB"
  };

  var firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;