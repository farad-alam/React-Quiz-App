import React from "react";
import Checkbox from "./Checkbox";

function Options({ options, hnadleAnswerChnage, result }) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-12">
        {options.map((singleOption, index) => {
          return result ? (
            <Checkbox
            answerColor={
              singleOption.correct ? "bg-teal-400" : (singleOption.checked ? "bg-rose-400": null)
            }
              label={singleOption.title}
              defaultChecked={singleOption.checked}
              key={index}
              disabled={result}
            />
          ) : (
            <Checkbox
              label={singleOption.title}
              checked={singleOption.checked}
              key={index}
              onChange={(e) => hnadleAnswerChnage(e, index)}
            />
          );
        })}
      </div>
    </>
  );
}

export default Options;
