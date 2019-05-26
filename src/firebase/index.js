import firebase from "firebase/app";
// import 'firebase/storage';
<script src="https://www.gstatic.com/firebasejs/6.0.4/firebase-app.js" />;

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
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);

// const storage = firebase.storage();

//   export {
//     storage, firebase as default
// }
