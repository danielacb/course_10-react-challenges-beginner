import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

function App() {
  // MOST OF YOUR CODE GOES HERE
  const [name, setName] = useState("Clark Kent");
  const [age, setAge] = useState("22");
  return (
    <div className="App">
      <div>
        <h2>Update Data from an input</h2>
      </div>

      {/* Display Data */}
      <div className="input-display">
        <p>{name}</p>
        <p> {age} years old</p>
      </div>

      {/* Collect User Inputs */}
      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label>Name: </label>
          <input type="text" placeholder={name} onChange={e => setName(e.target.value)} />
        </div>

        {/* Input age */}
        <div className="field">
          <label>Age: </label>
          <input type="number" placeholder={age} onChange={e => setAge(+e.target.value)} />
        </div>
      </div>
      <ScotchInfoBar seriesNumber="3" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
