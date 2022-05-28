import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function Createcard(emojipedia)
{
  return (<Card
  key={emojipedia.id}
  emoji={emojipedia.emoji}
  name={emojipedia.name}
  meaning={emojipedia.meaning}
  />)
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(Createcard)}
      </dl>
    </div>
  );
}

export default App;
