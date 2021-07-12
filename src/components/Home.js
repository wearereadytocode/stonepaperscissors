import React, { useContext } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { CelebrationContext } from '../contexts/Celebration'
import PlayGround from './PlayGround'
import ScoreBoard from './ScoreBoard'
import { ScoreContext } from '../contexts/ScoreContext'

function Home() {
    const [celebration,setcelebration] = useContext(CelebrationContext)
    const [score,setscore] = useContext(ScoreContext)
    const { width, height } = useWindowSize()
    return (
        <div className="w-screen h-screen">
                {
                    celebration?
                    <Confetti
                        width={width}
                        height={height}
                        gravity={2}
                        numberOfPieces={300}
                        recycle={false}
                        wind={0.5}
                    />
                    : null
                }
            <ScoreBoard score={score} />
            <PlayGround />
        </div>
    )
}

export default Home
 