import React from "react";
import DictionaryXY from "./Card";
import emojipedia from "../emojipedia";

function Processcard(emopart) {
  return (
    <DictionaryXY
      emoji={emopart.emoji}
      name={emopart.name}
      meaning={emopart.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(Processcard)}
    </div>
  );
}

export default App;
