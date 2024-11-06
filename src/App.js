import React from "react";
import ReactDOM from "react-dom/client";
import { AudioRecorder } from 'react-audio-voice-recorder';
import './App.css'
function AudioRecorder1() {
  let b=0;
  const addAudioElement = (blob) => {
    if (!b) {
      const url = URL.createObjectURL(blob);
      const audio = document.createElement("audio");
      audio.src = url;
      audio.controls = true;
      document.body.appendChild(audio);
      b=1;
    }
    else document.body.getElementsByTagName('audio')[0].src=URL.createObjectURL(blob);
  }

  return (
    <>
    <div>
      <div className="Main">Record Your Voice</div>
      <div className="Sub">We will guess your mood!!</div>
      <div className="Mike">
        <AudioRecorder
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }} 
        downloadOnSavePress={true}
        downloadFileExtension="webm"/>
      </div>
    </div>
    </>
  );
}

export default AudioRecorder1;
