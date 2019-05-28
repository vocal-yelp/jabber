import React, { Component } from "react";
import styles from "./JabberMainPage.module.scss";
import firebase from "../../firebase/index";
import axios from "axios";

// firebase.initializeApp()
const storage = firebase.storage();
const auth = firebase.auth();

const AudioType = "audio/webm";

export default class JabberMainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recording: false,
      recordStatus: "Pause",
      blob: "",
      blobURL: ""
    };
  }

  async startUpMedia() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); //turn on device's mic, keep listening until told otherwise.
    // show it to user
    this.mediaRecorder = new MediaRecorder(stream, { mimeType: AudioType });
    // init data storage for video chunks
    this.chunks = [];
    // listen for data from media recorder
    this.mediaRecorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) {
        // if data exist through mediaRecorder, and it's size is greater than 0. Push data into "chunks"
        this.chunks.push(e.data);
      }
    };
    this.startRecording();
  }

  startRecording() {
    // e.preventDefault();
    // wipe old data chunks
    this.chunks = [];
    // start recorder with 10ms buffer
    this.mediaRecorder.start(10);
    // say that we're recording
    this.setState({ recording: true });
  }

  stopRecording(e) {
    e.preventDefault();
    // stop the recorder
    this.mediaRecorder.stop();
    // say that we're not recording
    this.setState({ recording: false });
    // save the video to memory
    this.saveAudio();
  }

  pause() {
    const { recordStatus } = this.state;
    if (recordStatus === "Pause") {
      this.setState({ recordStatus: "Resume" });
    } else {
      this.setState({ recordStatus: "Pause" });
    }
    console.log(this.state.recordStatus);
    if (recordStatus === "Resume") {
      this.mediaRecorder.resume();
    } else {
      this.mediaRecorder.pause();
    }
  }

  async saveAudio() {
    const blob = await new Blob(this.chunks, { type: AudioType });
    this.setState({ blob });
    console.log(blob);
    const blobURL = window.URL.createObjectURL(blob);
    console.log(blobURL);
    this.setState({ blobURL });
    const uploadBlob = storage.ref("audio/audio_size").put(this.state.blob);
    uploadBlob.on(
      "state_changed",
      () => null,
      error => {
        console.log(error);
      },
      () => {
        axios
          .post("/api/sendBlob", {
            name: firebase.auth().currentUser.displayName
          })
          .then(response => {
            console.log(response);
          });
      }
    );
  }

  render() {
    const { recording } = this.state;
    return (
      <div className="camera">
        <div className={styles.logo}>
          <h1>Jabber</h1>
          {/* <h3>{firebase.auth().currentUser.displayName}</h3> */}
          <img src="https://images.vexels.com/media/users/3/158095/isolated/preview/675d732db5174565de6383cb451b20a6-open-mouth-icon-by-vexels.png" />
        </div>
        <div className={styles.recorder_area}>
          <audio controls src={this.state.blobURL} />
          <section className={styles.button_space}>
            {!recording ? (
              <>
                <button onClick={e => this.startUpMedia(e)}>Record</button>
                <button id={styles.invisible_button} />
              </>
            ) : (
              <>
                <button onClick={e => this.stopRecording(e)}>Submit</button>
                <button onClick={() => this.pause()}>
                  {this.state.recordStatus}
                </button>
              </>
            )}
          </section>
        </div>
        {recording ? <h3>Recording...</h3> : <h3>Not Recording Yet</h3>}
        <div className={styles.map_box}>
          <img src="https://www.kulud-pharmacy.com/wp-content/uploads/2018/01/687474703a2f2f692e696d6775722e636f6d2f4f32454f4378662e706e67.png" />
        </div>
      </div>
    );
  }
}
