import React, { useContext } from "react";

// This component displays name from Context
const RandomComponent = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2 className="is-size-4">
        {/* Pass name from context here */}
        <strong>Name</strong>: {"William"}
      </h2>
    </div>
  );
};

export default RandomComponent;
