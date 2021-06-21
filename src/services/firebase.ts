import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDVBmT0yjq6Dw_1EVYqJxi4KY1f4oUnfmQ",
  authDomain: "letmeask-react-f23ee.firebaseapp.com",
  databaseURL: "https://letmeask-react-f23ee-default-rtdb.firebaseio.com",
  projectId: "letmeask-react-f23ee",
  storageBucket: "letmeask-react-f23ee.appspot.com",
  messagingSenderId: "913280626992",
  appId: "1:913280626992:web:1d90d5c504873a3ef198f5",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
