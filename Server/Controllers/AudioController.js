const firebase = require("firebase");
// const auth = firebase.auth();

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
});

module.exports = {
  sendBlob: (req, res) => {
    console.log(req.body.blobURL);
    firebase
      .database()
      .ref("audio/audio_size")
      .set({
        name: req.body.name
      })
      .then(response => {
        res.sendStatus(200);
      });
  }
};
