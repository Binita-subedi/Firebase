import * as firebase from "firebase";



var firebaseConfig = {
    apiKey: "AIzaSyD6U_EATwxmvLvJxIwclpPchWq5VC-eSUk",
    authDomain: "react-crud-4b338.firebaseapp.com",
    databaseURL: "https://react-crud-4b338-default-rtdb.firebaseio.com",
    projectId: "react-crud-4b338",
    storageBucket: "react-crud-4b338.appspot.com",
    messagingSenderId: "976799110795",
    appId: "1:976799110795:web:f170d4fec34608a9ece68e",
    measurementId: "G-MK2JVPLMC3"
  };

  // Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();



