import React from "react";
import Header from "./header";
import HeroText from "./components/HeroText";
import TranscriptionBox from "./components/TranscriptionBox";
import RecordButton from "./components/RecordButton";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroText />
        <TranscriptionBox />
        <RecordButton />
      </main>
    </div>
  );
}

export default App;
