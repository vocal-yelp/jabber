const firebase = require("firebase");
<<<<<<< HEAD
// const auth = firebase.auth();
=======
// const storage = require('firebase/storage')
// const firebase = require('../../src/components/firebase/index')

>>>>>>> master

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
});

<<<<<<< HEAD
module.exports = {
  sendBlob: (req, res) => {
    console.log(req.body.blobURL);
    firebase
      .firestore()
      .collection("audio")
      .add({ name: req.body.name })
      // .set(
      //   {
      //     name: req.body.name
      //   },
      //   { merge: true }
      // )
      .then(response => {
        res.sendStatus(200);
      });
  }
};

// module.exports = {
//   sendBlob: (req, res) => {
//     console.log(req.body.blobURL);
//     firebase
//       .database()
//       .ref("audio/audio_size")
//       .set({
//         name: req.body.name
//       })
//       .then(response => {
//         res.sendStatus(200);
//       });
//   }
// };
=======
// const firestorage = firebase.storage();

module.exports = {
    sendBlob: (req, res) => {
      console.log(req.body.blobURL);
      firebase
        .firestore()
        .collection("audio")
        .add({ name: req.body.name })
        // .set(
        //   {
        //     name: req.body.name
        //   },
        //   { merge: true }
        // )
        .then(response => {
          res.sendStatus(200);
    });
  },

  getFileNum: (res, req) => {
    firebase.database().ref("audio").once('value').then( res => {
      console.log(res.val().audio_size.length - 1)
    })
  }
};
>>>>>>> master
