import React, { useEffect, useReducer, useState } from "react";
import Quiz from "../Quiz";
import ProggressBar from "../ProggressBar";
import useQuestions from "../../hooks/useQuestions";
import { useParams, useNavigate } from "react-router-dom";
import  useAuth  from "../../contexts/AuthContext";
import _, { values } from "lodash";
import { getDatabase, ref, set } from "firebase/database";

const initialState = null;

function reducer(state, action) {
  switch (action.type) {
    case "initialQuestion":
      action.values.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.values;
    case "changeAnswer":
      const questions = _.cloneDeep(state);
      questions[action.questionIndex].options[action.optionIndex].checked =
        action.values;
      return questions;
    default:
      return state;
  }
}

function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { id } = useParams();
  const { loading, error, questionList } = useQuestions(id);
  const { currentUser } = useAuth();
  const [qna, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "initialQuestion",
      values: questionList,
    });
  }, [questionList]);

  const hnadleAnswerChnage = (e, index) => {
    console.log("cliked called");
    dispatch({
      type: "changeAnswer",
      questionIndex: currentQuestion,
      optionIndex: index,
      values: e.target.checked,
    });
  };

  const handleCurrentQuestion = (e, chnage) => {
    if (chnage === "+" && qna.length > currentQuestion + 1) {
      setCurrentQuestion((prevCQ) => prevCQ + 1);
    } else if (chnage === "-" && currentQuestion > 0) {
      setCurrentQuestion((prevCQ) => prevCQ - 1);
    }
  };

  async function handleSubmit() {
    const { uid } = currentUser;
    const db = getDatabase();
    const qnaRef = ref(db, `result/${uid}`);

    await set(qnaRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, { state: qna });
  }

  return (
    <>
      {!loading && qna && qna.length > 0 ? (
        <>
          <Quiz
            question={qna[currentQuestion]}
            hnadleAnswerChnage={hnadleAnswerChnage}
          />
          <ProggressBar
            currentQuestionIndex={currentQuestion}
            totalQuestion={qna.length}
            chnageCurrentQuestion={handleCurrentQuestion}
            handleSubmit={handleSubmit}
          />
        </>
      ) : (
        <>
          <span className="loading text-center loading-bars loading-lg text-accent"></span>
        </>
      )}
    </>
  );
}

export default Question;
