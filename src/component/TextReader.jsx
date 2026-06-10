import { useState } from "react";
import Tesseract from "tesseract.js";

function TextReader() {
  const [text, setText] = useState("");

  const handleImage = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setText("Reading image...");

    const result = await Tesseract.recognize(
      file,
      "eng"
    );

    setText(result.data.text);

    const speech = new SpeechSynthesisUtterance(
      result.data.text
    );

    window.speechSynthesis.speak(speech);
  };

  return (
    <div>
      <h2>Read Text From Image</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
      />

      <p>{text}</p>
    </div>
  );
}

export default TextReader;