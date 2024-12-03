import React from 'react'

function Summary() {
  return (
    <>
    <div className="bg-gray-100 rounded text-center p-10 mb-5">
        <div className="grid grid-cols-2">
            <div className="quiz-mark">
                <h2 className='text-xl'>
                    You got 10 out of 20
                </h2>
            </div>
            <div className="result-image">
                <img src="" alt="Demo Image" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Summary