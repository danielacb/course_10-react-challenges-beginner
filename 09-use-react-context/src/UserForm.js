import React, { useContext } from "react";

const Form = () => {
  return (
    <div className="user-form">
      {/* Change user's name in context */}
      <div className="input-item">
        <label className="label">Update Name: </label>
        <input className="input" />
      </div>

      {/* Change user's location in context */}
      <div className="input-item">
        <label className="label">Update Location: </label>
        <input className="input" />
      </div>
    </div>
  );
};

export default Form;
