import React from "react";
import QuizTitle from "./QuizTitle";
import Options from "./Options";

function Quiz({question}) {

  console.log("single question in QUIZ", question)

  return (
    <>
      <div className="bg-neutral-200 text-neutral-content p-10 my-5 rounded">
        <QuizTitle title={question.title} />
      </div>
      <Options options={question.options} />
    </>
  );
}

export default Quiz;
