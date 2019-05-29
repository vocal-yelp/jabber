import React, { Component } from "react";
// import firebase from "firebase";
// import firebase from "firebase/index.js";
import * as firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Icon from "../Pics/jabber-Icon.png";

import styles from "../FirebaseLogin/FirebaseLogin.module.scss";

// firebase.initializeApp({
//   apiKey: "AIzaSyA0ifb48V1SfOyaVN4wc11PDf0LvQYVKvU",
//   authDomain: "jabber-dm22.firebaseapp.com"
// });

class FirebaseLogin extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false
    };
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  }

  render() {
    return (
      <div className={styles.mainDiv}>
        <h1>Firebase Login Page</h1>
        <img className={styles.Icon} src={Icon} />
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h3>Welcome {firebase.auth().currentUser.displayName}</h3>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default FirebaseLogin;
