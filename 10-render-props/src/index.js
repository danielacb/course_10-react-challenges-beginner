import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * A card component that has 3 different parts
 */
function Card({ renderHeader, children, renderFooter }) {
  return (
    <div className="card">
      {/* Render the header */}
      {renderHeader && <div className="card-header">{renderHeader()}</div>}

      {/* Render the body */}
      <div className="card-body">{children}</div>

      {/* Render the footer */}
      {renderFooter && <div className="card-footer">{renderFooter()}</div>}
    </div>
  );
}
const Button = () => <button>Click me!</button>;

const Image = () => <img src="http://placekitten.com/g/400/200" alt="cat" />;
/**
 * The main app. Use the Card component twice
 */
function App() {
  return (
    <div className="App">
      <h1>Render Prop Cards!</h1>
      <p>Show cards with different header and footers.</p>
      <p>
        Show a button in the footer of one card.
        <br />
        Show an image in the header of the other card.
      </p>

      <div className="columns">
        {/* first card: button in footer */}
        {/* first card: button in footer */}
        <Card renderFooter={Button}>I am the first card</Card>

        {/* second card: has image in header */}
        <Card renderHeader={Image}>I am the second card</Card>
      </div>

      <ScotchInfoBar seriesNumber="10" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
