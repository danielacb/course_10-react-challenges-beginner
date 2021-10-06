import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Daniela C. Barbosa",
  location: "Goiânia, GO - Brazil",
  foodType: "Everything but pineapple and kiwifruit",
  age: 28,
  likes: "Dogs and sports",
  twitterUsername: "dnlbrbs",
  avatar: "/profile-danielacbaborsa.jpg",
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      <div className="user-deets">
        <div className="img-container">
          <img src={user.avatar} alt={user.name} />
        </div>
        <div className="card">
          <h1>{user.name}</h1>
          <a
            href={`https://twitter.com/${user.twitterUsername}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{user.twitterUsername}
          </a>
          <hr />
          <div className="info">
            <strong>Age</strong>
            <h2>{user.age}</h2>
          </div>
          <div className="info">
            <strong>Location</strong>
            <h2>{user.location}</h2>
          </div>
          <div className="info">
            <strong>Eats</strong>
            <h2>{user.foodType}</h2>
          </div>
          <div className="info">
            <strong>Likes</strong>
            <h2>{user.likes}</h2>
          </div>
        </div>
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
