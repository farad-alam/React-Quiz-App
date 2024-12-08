import React, { useState } from 'react'
import Quiz from '../Quiz'
import ProggressBar from '../ProggressBar'
import useQuestions from '../../hooks/useQuestions'
import { useParams } from 'react-router-dom'

function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const {id} = useParams()
  const {loading, error, questionList} = useQuestions(id)

  const handleCurrentQuestion = (e, chnage) =>{
    if (chnage === "+") {
      setCurrentQuestion((prevCQ)=> prevCQ +1)
    } else{
      setCurrentQuestion((prevCQ)=> prevCQ -1)
    }
  }
  return (
    <>
    {
      !loading ? (
        <>
        <Quiz question={questionList[currentQuestion]} />
        <ProggressBar chnageCurrentQuestion={handleCurrentQuestion} />
        </>
      ): (
        <>
        <span className="loading text-center loading-bars loading-lg text-accent"></span>
        </>
      )
    }
    </>
  )
}

export default Question