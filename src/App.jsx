import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Press button");

  const testfun = () => {
    const msg = new SpeechSynthesisUtterance("Hello, this is a test message.");
    window.speechSynthesis.speak(msg);
    setMessage("Voice test completed.");
  };
  const testRecognition = () => {
  console.log("clicked");

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("SpeechRecognition not supported");
    return;
  }

  alert("SpeechRecognition found");

  const recognition = new SpeechRecognition();

  recognition.onstart = () => {
    alert("Recognition started");
  };

  recognition.onerror = (event) => {
    alert("Error: " + event.error);
  };

  recognition.start();
};

  return (
    <div>
      <h1>Blind Assistant</h1>

      <button onClick={testRecognition}>
        Test Voice
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;