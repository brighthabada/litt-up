import React, { useState } from "react";
import "./RecordButton.css";

const RecordButton = () => {
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="record-button-container">
      <button
        className={`record-button ${isRecording ? "recording" : ""}`}
        onClick={toggleRecording}
      >
        <i className="fas fa-microphone"></i>
        <span>{isRecording ? "Recording..." : "Start Recording"}</span>
      </button>
    </div>
  );
};

export default RecordButton;
