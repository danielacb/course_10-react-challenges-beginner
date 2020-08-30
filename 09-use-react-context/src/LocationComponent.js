import React, { useContext } from "react";

// This component displays location from context
const Location = () => {
  return (
    <div>
      {/* Display user's location from Context */}
      <h2 className="is-size-4">
        <strong>Location</strong>: {"Mars"}
      </h2>
    </div>
  );
};

export default Location;
