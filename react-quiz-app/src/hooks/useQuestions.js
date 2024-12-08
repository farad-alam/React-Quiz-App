import React, { useState, useEffect } from 'react'
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";

function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState()
  const [questionList, setQuestionList] = useState([]);



  useEffect(() => {
    async function fetchVideo() {
      const db = getDatabase();
      const questionRef = ref(db, `quiz/${videoID}/questions`);
      const questionQuery = query(
        questionRef,
        orderByKey()
      );

      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(questionQuery);
        setLoading(false);

        if (snapshot.exists()) {
          const questions = snapshot.val();
          console.log(questions)
          if (questions) {
            setQuestionList((pevQuestionList) => {
              return [...pevQuestionList, ...Object.values(questions)];
            });
          }
        } else {
            console.log("No question Avilable")
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Failed to fetch Question data");
      }
    }

    fetchVideo();
  }, [videoID]);

  return {
    loading,
    error,
    questionList
  }
}

export default useQuestions