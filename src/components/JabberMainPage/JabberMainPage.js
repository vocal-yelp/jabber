import React, {Component} from 'react';
import styles from './JabberMainPage.module.scss';
import firebase from '../firebase/index';
import { Link } from 'react-router-dom';
import axios from 'axios';

const storage = firebase.storage();
const auth = firebase.auth();

export default class JabberMainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recording: false,
      recordStatus: "Pause",
      blob: "",
      blobURL: "",
  };
}

async startUpMedia() {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true}); 
    this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm'});
    this.chunks = [];
    this.mediaRecorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) {  
        this.chunks.push(e.data);
}};
    this.startRecording();
}

startRecording() {
    this.chunks = [];
    this.mediaRecorder.start(10);
    this.setState({recording: true});
}

stopRecording(e) {
    e.preventDefault();
    this.mediaRecorder.stop();
    this.setState({recording: false});
    this.saveAudio();
}

async saveAudio() {
const blob = await new Blob(this.chunks, {type: 'audio/webm'}); console.log(blob);
const blobURL = window.URL.createObjectURL(blob);
this.setState({blob, blobURL})
storage.ref("audio").put(this.state.blob)    
const uploadBlob = storage.ref(`audio`).put(this.state.blob);
uploadBlob.on("state_changed", () => null, error => { console.log(error) },
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
  
pause() {
    const {recordStatus} = this.state
    if(recordStatus === "Pause")  {this.setState({recordStatus: "Resume"})} else {this.setState({recordStatus: "Pause"})}
    if (recordStatus === "Resume") {
      this.mediaRecorder.resume()
    }
    else {
      this.mediaRecorder.pause()
    }
  }
  
  
  render() {
    const {recording} = this.state;
        return (
          <div className="camera">
        <div className={styles.logo}>
            <h1>Jabber</h1>
            {auth.currentUser ? (<h3>{auth.currentUser.displayName}</h3>) : <h3> Hello, guest! </h3>}
            <img src="https://images.vexels.com/media/users/3/158095/isolated/preview/675d732db5174565de6383cb451b20a6-open-mouth-icon-by-vexels.png"/>
        </div>
        <div className={styles.recorder_area}>
            <audio controls src={this.state.blobURL}> Video stream not available. </audio>
            {auth.currentUser ?
            <section className={styles.button_space}>
                {!recording ? ( 
                  <><button onClick={e => this.startUpMedia(e)}>Record</button>
                <button id={styles.invisible_button}></button>
                </> ) :
                <>
                <button onClick={e => this.stopRecording(e)}>Submit</button>
                <button onClick={() => this.pause()}>{this.state.recordStatus}</button>
                </>
                }
                <button onClick={() => this.button()}>Test</button>
            </section>
            : <div><h2>Please login to record your own jabs </h2><Link to="/"><h3>Here:</h3></Link></div>}
        </div>
            {recording ? (<h3>Recording...</h3>) : <h3>Not Recording Yet</h3>}
        <div className={styles.map_box}>
            <img src="https://www.kulud-pharmacy.com/wp-content/uploads/2018/01/687474703a2f2f692e696d6775722e636f6d2f4f32454f4378662e706e67.png"/>
        </div>
      </div>
    );
  }
}