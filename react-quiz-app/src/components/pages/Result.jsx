import React from "react";
import Summary from "../Summary";
import Analysis from "../Analysis";
import { useLocation, useParams } from "react-router-dom";
import useOrginalResult from "../../hooks/useOrginalResult";
import _ from "lodash";
import Error from "../Error";
function Result() {
  const { id } = useParams();
  const { loading, error, orginalResults } = useOrginalResult(id);
  const location = useLocation();
  const qna = location.state;

  const calculateScore = () => {
    let score = 0;
    orginalResults.forEach((question, qnaIndex) => {
      let correctIndex = [];
      let checkedIndex = [];
      question.options.forEach((option, opIndex) => {
        if (option.correct) correctIndex.push(opIndex);
        if (qna[qnaIndex].options[opIndex].checked) {
          checkedIndex.push(opIndex);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndex, checkedIndex)) {
        score = score + 5;
      }
    });
    return score;
  };

  const score = calculateScore()

  return (
    <>
      {loading && (
        <span className="loading text-center loading-bars loading-lg text-accent"></span>
      )}
      {error && <Error message={error} />}
      {!loading && !error && orginalResults.length > 0 && (
        <>
          <Summary score={score} noq={orginalResults.length} />
          <Analysis qna={orginalResults} />
        </>
      )}
    </>
  );
}

export default Result;
