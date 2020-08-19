import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

function App() {
  // MOST OF YOUR CODE GOES HERE

  return (
    <div className="App">
      <div>
        <h2>Update Data from an input</h2>
      </div>

      {/* Display Data */}
      <div className="input-display">
        <p>Display Name</p>
        <p>Age</p>
      </div>

      {/* Collect User Inputs */}
      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label>Name: </label>
          <input type="text" placeholder="William" />
        </div>

        {/* Input age */}
        <div className="field">
          <label>Age: </label>
          <input type="number" placeholder="38" />
        </div>
      </div>
      <ScotchInfoBar seriesNumber="3" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
