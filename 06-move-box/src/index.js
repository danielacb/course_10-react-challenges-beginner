import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [top, setTop] = useState(450);

  function moveBoxUp() {
    setTop(top - 20);
  }

  const boxPosition = {
    transform: `translateY(${top}px)`,
  };

  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={moveBoxUp}>
        <span role="img" aria-label="move up">
          👆
        </span>{" "}
        Click me{" "}
        <span role="img" aria-label="move up">
          👆
        </span>
      </button>

      {/* move this box using inline styles */}
      <div className="box" style={boxPosition} />

      <ScotchInfoBar seriesNumber={6} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
