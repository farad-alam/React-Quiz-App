import React from 'react'

function Summary({score, noq}) {
  return (
    <>
    <div className="bg-gray-100 rounded text-center p-10 mb-5">
        <div className="grid grid-cols-2">
            <div className="quiz-mark">
                <h2 className='text-xl'>
                    You got {score} out of {noq*5}
                </h2>
            </div>
            <div className="result-image">
                <img className='rounded shadow-lg' src="https://st3.depositphotos.com/7677414/16494/i/380/depositphotos_164940980-stock-photo-low-key-golden-trophy-blur.jpg" alt="Demo Image" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Summary