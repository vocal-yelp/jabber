require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const { SERVER_PORT } = process.env;

<<<<<<< HEAD
const { sendBlob } = require("./Controllers/AudioController");

/////////////// Audio //////////////////////////
app.post("/api/sendBlob", sendBlob);
=======
const { sendBlob, getFileNum } = require("./Controllers/AudioController");

/////////////// Audio //////////////////////////
app.post("/api/sendBlob", sendBlob);
app.get("/api/audioFiles", getFileNum);
>>>>>>> master

app.listen(SERVER_PORT, () => {
  console.log(`tuning in to ${SERVER_PORT}`);
});
