require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const { SERVER_PORT } = process.env;

const { sendBlob, getFileNum } = require("./Controllers/AudioController");

/////////////// Audio //////////////////////////
app.post("/api/sendBlob", sendBlob);
app.get("/api/audioFiles", getFileNum);

app.listen(SERVER_PORT, () => {
  console.log(`tuning in to ${SERVER_PORT}`);
});
