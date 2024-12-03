import React from "react";

function Button({buttonText, ...rest}) {
  return (
    <>
      <div className="form-control">
        <button {...rest}>
          {buttonText}
        </button>
      </div>
    </>
  );
}

export default Button;
