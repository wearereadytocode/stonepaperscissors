import React from 'react'
import PlayGround from './PlayGround'
import ScoreBoard from './ScoreBoard'

function Home() {
    return (
        <div className="w-screen h-screen">
            <ScoreBoard />
            <PlayGround />
        </div>
    )
}

export default Home
 