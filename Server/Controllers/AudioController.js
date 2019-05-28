const firebase = require("firebase");
// const storage = require('firebase/storage')
// const firebase = require('../../src/components/firebase/index')


firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
});

// const firestorage = firebase.storage();

module.exports = {
  sendBlob: (req, res) => {
    console.log("hit");
    firebase
      .firestore()
      .ref("audio/audio_size")
      .set({ blob: req.body.blob})
      .then(response => res.sendStatus(200));
  },

  getFileNum: (res, req) => {
    firebase.database().ref("audio").once('value').then( res => {
      console.log(res.val().audio_size.length - 1)
    })
  }
};