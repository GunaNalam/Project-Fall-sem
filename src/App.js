import React from "react";
import ReactDOM from "react-dom/client";
import { AudioRecorder } from 'react-audio-voice-recorder';

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
    else document.body.getElementsByTagName('audio')
  }

  return (
    <>
      <div>Sound Recorder for Emotion Detection</div>
      <AudioRecorder 
      onRecordingComplete={addAudioElement}
      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }} 
      downloadOnSavePress={false}
      downloadFileExtension="webm"/>
    </>
  );
}

export default AudioRecorder1;
