import React, { useState, useEffect } from "react";
import "./RecordButton.css";

const RecordButton = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      setTimer(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="record-button-container">
      <button
        className={`record-button ${isRecording ? "recording" : ""}`}
        onClick={toggleRecording}
      >
        <i className="fas fa-microphone"></i>
        <span>{isRecording ? formatTime(timer) : "Start Recording"}</span>
      </button>
    </div>
  );
};

export default RecordButton;
