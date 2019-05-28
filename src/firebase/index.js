import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// Your web app's Firebase configuration
const {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID
} = process.env;
var firebaseConfig = {
  apiKey: "AIzaSyA0ifb48V1SfOyaVN4wc11PDf0LvQYVKvU",
  authDomain: "jabber-dm22.firebaseapp.com",
  databaseURL: "https://jabber-dm22.firebaseio.com",
  projectId: "jabber-dm22",
  storageBucket: "jabber-dm22.appspot.com",
  messagingSenderId: "765924833453",
  appId: "1:765924833453:web:90651fb9bd23a801"
};

console.log(
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID
);

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const auth = firebase.auth();
// const firestore = firebase.firestore();

export { storage, auth, firebase as default };
