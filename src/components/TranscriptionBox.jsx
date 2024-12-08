import React from "react";
import "./TranscriptionBox.css";

const TranscriptionBox = ({ transcription }) => {
  return (
    <div className="transcription-container">
      <div className="transcription-box">
        {transcription ? (
          <p className="transcription-text">{transcription}</p>
        ) : (
          <p className="placeholder-text">
            Your voice journal entry will appear here...
          </p>
        )}
      </div>
      <div className="transcription-stats">
        <span className="word-count">0 words</span>
        <span className="duration">00:00</span>
      </div>
    </div>
  );
};

export default TranscriptionBox;
