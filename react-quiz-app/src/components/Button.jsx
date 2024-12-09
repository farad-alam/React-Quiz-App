import React from "react";

function Button({buttonText, children, ...rest}) {
  return (
    <>
      <div className="form-control">
        <button {...rest}>
          {buttonText}
          {children}
        </button>
      </div>
    </>
  );
}

export default Button;
