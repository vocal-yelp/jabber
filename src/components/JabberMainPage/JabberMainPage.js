import React, { Component } from "react";
import axios from "axios";
import styles from "./JabberMainPage.module.scss";
const AudioType = "audio/webm";

export default class JabberMainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recording: false,
      audioURL: ""
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
    this.mediaRecorder.pause();
  }

  resume() {
    this.mediaRecorder.resume();
  }

  saveAudio() {
    // convert saved chunks to blob
    const blob = new Blob(this.chunks, { type: AudioType });
    console.log(blob);
    // generate video url from blob
    const videoURL = window.URL.createObjectURL(blob);
    console.log(videoURL);
    // append videoURL to list of saved videos for rendering
    const videos = this.state.audioURL.concat([videoURL]);
    // this.setState({videos});
    this.setState({ audioURL: videoURL });
  }

  render() {
    const { recording } = this.state;
    return (
      <div className="camera">
        <div className={styles.logo}>
          <h1>Jabber</h1>
          <img src="https://images.vexels.com/media/users/3/158095/isolated/preview/675d732db5174565de6383cb451b20a6-open-mouth-icon-by-vexels.png" />
        </div>
        <div className={styles.recorder_area}>
          <audio controls src={this.state.audioURL}>
            {" "}
            Video stream not available.
          </audio>
          {!recording && (
            <button onClick={e => this.startUpMedia(e)}>Record</button>
          )}
          {recording && (
            <button onClick={e => this.stopRecording(e)}>Stop</button>
          )}
          <button onClick={() => this.pause()}>Pause</button>
          <button onClick={() => this.resume()}>Resume</button>
          <button onClick={() => this.putData()}>
            Send Something to fireB
          </button>
        </div>
        {this.state.recording ? <h3>recording...</h3> : null}
        <div className={styles.map_box}>
          <img src="https://www.kulud-pharmacy.com/wp-content/uploads/2018/01/687474703a2f2f692e696d6775722e636f6d2f4f32454f4378662e706e67.png" />
        </div>
      </div>
    );
  }
}
