import React from "react";

export default function ScotchInfoBar(props) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        fontSize: "14px",
        padding: "20px 10px",
        background: "#333",
        color: "#bbb",
        letterSpacing: "0.5px",
        textAlign: "center",
      }}
    >
      Scotch.io Code Challenges!{" "}
      <a
        href="https://scotch.io/courses/10-react-challenges-beginner/adding-calculator"
        style={{
          color: "#40A8F3",
          textDecoration: "none",
          display: "inline-block",
          padding: "0 0 3px",
          borderBottom: "2px solid #40A8F3",
        }}
      >
        Day {props.seriesNumber} of #10DaysOfReact
      </a>
    </div>
  );
}
