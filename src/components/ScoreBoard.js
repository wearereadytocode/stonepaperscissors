import React from 'react'

function ScoreBoard({score}) {
    return (
        <div className="lg:mx-96 mx-3 mt-10 md:h-52  border-2 flex border-gray-300 rounded-xl">
            <img className="my-10 md:my-auto ml-2 md:ml-10 " src="logo.svg" alt="" />
            <div className="w-32 md:w-52 h-32 grid grid-flow-row gap-0 grid-cols-1 bg-gray-200 rounded-md ml-auto mr-2 md:mr-8 my-auto">
                <p className="mx-auto scorefont text-2xl mt-4 text-purple-800">SCORE</p>
                <p className="mx-auto text-6xl font-extrabold scorefont text-gray-700">{score}</p>
            </div>
        </div>
    )
}

export default ScoreBoard
