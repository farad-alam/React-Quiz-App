import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function ProggressBar({
  chnageCurrentQuestion,
  currentQuestionIndex,
  totalQuestion,
  handleSubmit,
}) {
  return (
    <>
      <div className="flex items-center justify-between w-full space-x-3">
        {/* Left Button */}
        <button
          disabled={currentQuestionIndex === 0}
          className="btn btn-success px-3 flex items-center"
          type="button"
          onClick={(e) => chnageCurrentQuestion(e, "-")}
        >
          <i className="material-icons text-white text-2xl">arrow_back</i>
          <span className="ml-2 text-white font-medium">Prev Question</span>
        </button>

        {/* Progress Bar */}
        <progress
          className="progress progress-info flex-1 h-4"
          value={((currentQuestionIndex + 1) * 100) / totalQuestion}
          max="100"
        ></progress>

        {/* Right Button */}
        {currentQuestionIndex + 1 !== totalQuestion ? (
          <Button
            className="btn btn-success px-3 flex items-center"
            type="button"
            onClick={(e) => chnageCurrentQuestion(e, "+")}
          >
            <span className="mr-2 text-white font-medium">Next Question</span>
            <i className="material-icons text-white text-2xl">arrow_forward</i>
          </Button>
        ) : (
          <Button
            className="btn btn-success px-3 flex items-center"
            type="button"
            onClick={handleSubmit}
          >
            <span className="mr-2 text-white font-medium">Show Result</span>
          </Button>
        )}

        {/* <button
          className="btn btn-success px-3 flex items-center"
          type="button"
          onClick={(e) => chnageCurrentQuestion(e, "+")}
        >
          <span className="mr-2 text-white font-medium">Next Question</span>
          <i className="material-icons text-white text-2xl">arrow_forward</i>
        </button> */}
      </div>
    </>
  );
}

export default ProggressBar;
