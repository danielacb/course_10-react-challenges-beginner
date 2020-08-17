import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import users from "./users-data";

/**
 * Our React component where we display data
 * -----------------------------
 */
function App() {
  return (
    <div className="App">
      <div className="page-deets">
        <h1>Loop Over an Array of Data</h1>
      </div>

      {/* Iterate over imported array in userData */}
      <div className="users">
        {/* Display each data in array in a card */}
        {/* Each card must have a 'key' attribute */}
        {users.map((user, index) => (
          <div className="user" key={index}>
            <h2>{user.name}</h2>
            <h3>{user.name}</h3>
            <h3>{user.car}</h3>
          </div>
        ))}
      </div>
      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
