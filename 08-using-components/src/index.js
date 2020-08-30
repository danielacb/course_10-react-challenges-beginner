import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

// Create child Statcard component here
function StatCard({ icon, label, number }) {
  return (
    <div className="stat-card">
      <div className="stat-line">
        <span>{icon}</span>
        <strong>{label}</strong>
      </div>
      <p>{number.toLocaleString()}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2>Use components and props in React</h2>
      {/* Use child component x4 here */}
      <StatCard icon="💎" label="Diamonds" number={33319} />
      <StatCard icon="🤙" label="Shakas" number={17460} />
      <StatCard icon="⚡" label="Lightnings" number={26122} />
      <StatCard icon="👉" label="Points" number={9119} />
      <ScotchInfoBar seriesNumber={8} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
