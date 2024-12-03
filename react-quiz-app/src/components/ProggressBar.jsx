import React from "react";

function ProggressBar() {
  return (
    <>
      <div className="flex items-center justify-between w-full space-x-3">
        {/* Left Button */}
        <button
          className="btn btn-success px-3 flex items-center"
          type="button"
        >
          <i className="material-icons text-white text-2xl">arrow_back</i>
          <span className="ml-2 text-white font-medium">Prev Question</span>
        </button>

        {/* Progress Bar */}
        <progress
          className="progress progress-info flex-1 h-4"
          value="70"
          max="100"
        ></progress>

        {/* Right Button */}
        <button
          className="btn btn-success px-3 flex items-center"
          type="button"
        >
          <span className="mr-2 text-white font-medium">Next Question</span>
          <i className="material-icons text-white text-2xl">arrow_forward</i>
        </button>
      </div>
    </>
  );
}

export default ProggressBar;