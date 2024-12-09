import React from "react";

function Checkbox({ label, answerColor, ...rest }) {
  return (
    <>
      <label className={`flex items-center space-x-2 p-2 my-2 border rounded-lg shadow-md ${answerColor}`}>
        <input
          type="checkbox"
          // defaultChecked
          {...rest}
          className="checkbox checkbox-accent"
        />
        <span>{label}</span>
      </label>
    </>
  );
}

export default Checkbox;
