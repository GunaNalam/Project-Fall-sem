import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AudioRecorder } from 'react-audio-voice-recorder';

function AudioRecorder1() {
  const [audioUrl, setAudioUrl] = useState(null);

  const handleRecordingComplete = async (blob) => {
    // Assuming the Flask backend is running on http://127.0.0.1:5000
    const formData = new FormData();
    formData.append('audio', blob);

    try {
      const response = await fetch('http://127.0.0.1:5000/upload-audio', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setAudioUrl(data.audioUrl);
    } catch (error) {
      console.error('Error uploading audio:', error);
    }
  };

  return (
    <>
      <div>Sound Recorder for Emotion Detection</div>
      <AudioRecorder
        onRecordingComplete={handleRecordingComplete}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        downloadOnSavePress={false}
        downloadFileExtension="webm"
      />
      {audioUrl && <div>Audio URL: <a href={audioUrl}>{audioUrl}</a></div>}
    </>
  );
}

export default AudioRecorder1;
