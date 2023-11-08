import React from "react";
import emojipedia from "../emojipedia"
import CreateCard from "./card";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div>
        <dl className="dictionary">
       {emojipedia.map(CreateCard)}
        </dl>
      </div>
    </div>
    
  );
}

export default App;
