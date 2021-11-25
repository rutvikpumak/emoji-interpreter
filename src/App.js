import "./styles.css";
import { useState } from "react";

const emojiSet = {
  "🙂": "Smiling",
  "😴": "Sleeping",
  "😂": "Happy",
  "❤️": "Love",
  "😞": "Sad",
  "😑": "Annoyance",
  "🙃": "Upside-Down"
};
var emojisWeKnow = Object.keys(emojiSet);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiSet[userInput];

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiSet[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter App</h1>

      <input
        onChange={emojiInputHandler}
        style={{
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
          borderTopRightRadius: "1rem",
          borderTopLeftRadius: "1rem",
          fontSize: "2rem",
          textAlign: "center"
        }}
      ></input>

      <h2>{meaning}</h2>

      <h3 style={{ paddingTop: "2rem" }}>emojis we know</h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: "1rem", fontSize: "2rem", borderColor: "blue" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
