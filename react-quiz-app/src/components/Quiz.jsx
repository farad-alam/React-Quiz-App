import React from "react";
import QuizTitle from "./QuizTitle";
import Options from "./Options";

function Quiz() {
  return (
    <>
      <div className="bg-neutral-200 text-neutral-content p-10 my-5 rounded">
        <QuizTitle />
      </div>
      <Options />
    </>
  );
}

export default Quiz;
