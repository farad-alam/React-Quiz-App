import React from "react";

function Input({type, placeholder, label, ...rest}) {
  return (
    <>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </>
  );
}

export default Input;
