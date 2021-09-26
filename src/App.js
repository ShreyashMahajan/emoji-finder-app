import "./styles.css";
import { useState } from "react";

var userObjects = {
  "💣": "Bomb",
  "🔪": "Kitchen Knife",
  "🧭": "Compass",
  "🧳": "Luggage",
  "⏲️": "Timer Clock",
  "🛢️": "Oil Drum",
  "🎈": "Balloon",
  "🪁": "Kite",
  "🖼️": "Framed Picture",
  "💎": "Gem Stone"
};
var emojiWeKnow = Object.keys(userObjects);

export default function App() {
  var [meaning, setmeaning] = useState("");
  function inputEmojiHandler(event) {
    var userInput = event.target.value;
    var meaning = userObjects[userInput];

    if (meaning === undefined) {
      meaning = "we don't have in our database";
    }
    setmeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = userObjects[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h2>Emoji meaning finder</h2>
      <input onChange={inputEmojiHandler}></input>
      <h2> {meaning}</h2>
      <h3>Emoji's we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
