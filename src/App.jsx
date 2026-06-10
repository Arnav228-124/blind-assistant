import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Press button and speak");

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setMessage("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.onstart = () => {
      setMessage("Listening...");
    };

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;

      setMessage(text);
    };

    recognition.onerror = (event) => {
      setMessage("Error: " + event.error);
    };
    recognition.onresult = (event) => {
  const text = event.results[0][0].transcript.toLowerCase();

  setMessage(text);

  const speak = (message) => {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  };

  if (text.includes("time")) {
    const currentTime = new Date().toLocaleTimeString();

    speak(`Current time is ${currentTime}`);
  }
  else if (text.includes("hello")) {
    speak("Hello, how can I help you today?");
  }
  else if (text.includes("help")) {
    speak("Emergency help feature coming soon.");
  }
  else if (text.startsWith("search")) {
    const query = text.replace("search", "").trim();
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
  }
  else {
    speak(`You said ${text}`);
  }
};

    recognition.start();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Blind Assistant</h1>

      <button onClick={startListening}>
        Start Listening
      </button>

      <h2>{message}</h2>
    </div>
  );
}

export default App;