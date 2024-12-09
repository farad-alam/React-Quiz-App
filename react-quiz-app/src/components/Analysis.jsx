import React from 'react'
import QuizTitle from './QuizTitle'
import Options from './Options'

function Analysis({qna}) {
  return (
    <>
    <div className="bg-gray-100 rounded p-8">
      {
        qna.map((singleQna, index)=>{
          return (
          <div className='bg-white rounded mt-3' key={index}>
            <QuizTitle title={singleQna.title} />
            <Options options={singleQna.options} result />
          </div>
          )
        })
      }
        
    </div>
    </>
  )
}

export default Analysis