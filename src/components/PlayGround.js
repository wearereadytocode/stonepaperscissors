import React, { useContext, useState } from 'react'
import { CelebrationContext } from '../contexts/Celebration';
import { ScoreContext } from '../contexts/ScoreContext';
const delay = require('delay');

function PlayGround() {
    const [selected, setselected] = useState(null)
    const [clicked, setclicked] = useState(false)
    const [ , setcelebration] = useContext(CelebrationContext)
    const [score,setscore] = useContext(ScoreContext)
    const [result, setresult] = useState("")
    const [rand, setrand] = useState(null)
    function getOponent() {
        const random =  Math.random() * (4 - 1) + 1;
        console.log(parseInt(random));
        return parseInt(random)
    }
    const celebrate = () =>{
        setcelebration(true)
        delay(2000).then(()=>{
            setcelebration(false)
        })
    }
    var component
    var oponent
    if (selected === 1) {
        component=  <div className="h-36  w-36 shadow-2xl animate-pulse bg-yellow-500 pt-px rounded-full ">
                            <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full"  >
                                <img className="mx-auto my-auto" src="icon-scissors.svg" alt="" />
                            </div>
                    </div>
    }
    if (selected === 2) {
        component=  <div className="h-36  w-36 shadow-2xl animate-pulse bg-pink-500 pt-px rounded-full ">
                            <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full"  >
                                <img className="mx-auto my-auto" src="icon-paper.svg" alt="" />
                            </div>
                    </div>
    }
    if (selected === 3) {
        component=  <div className="h-36  w-36 shadow-2xl animate-pulse bg-indigo-500 pt-px rounded-full ">
                            <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full"  >
                                <img className="mx-auto my-auto" src="icon-rock.svg" alt="" />
                            </div>
                    </div>
    }
    if (rand === 1) {
        oponent=  <div className="h-36  w-36 shadow-2xl animate-pulse bg-yellow-500 pt-px rounded-full ">
                            <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full"  >
                                <img className="mx-auto my-auto" src="icon-scissors.svg" alt="" />
                            </div>
                    </div>
    }
    if (rand === 2) {
        oponent=  <div className="h-36  w-36 shadow-2xl animate-pulse bg-pink-500 pt-px rounded-full ">
                            <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full"  >
                                <img className="mx-auto my-auto" src="icon-paper.svg" alt="" />
                            </div>
                    </div>
    }
    if (rand === 3) {
        oponent=  <div className="h-36  w-36 shadow-2xl animate-pulse bg-indigo-500 pt-px rounded-full ">
                            <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full"  >
                                <img className="mx-auto my-auto" src="icon-rock.svg" alt="" />
                            </div>
                    </div>
    }



    if (!clicked) {
        
        return (
            <div className="flex">

                <div className="mx-16 md:mx-auto relative" >
                    <img className="mt-40" src="bg-triangle.svg" alt="" />
                    <div className="h-36  w-36 shadow-2xl bg-yellow-500 absolute rounded-full top-28 -left-12 ">
                        <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full"  onClick={async()=>{
                            setresult("")
                            setselected(1)
                            const sel = 1
                            setclicked(true)
                            const random = getOponent()
                            setrand(random)
                            console.log("Selected:" + sel);
                            console.log("Rand:" + random);
                            if (sel === 1 && random === 2) {
                                console.log("won");
                                setresult("won")
                                setscore(score + 1)
                                celebrate()
                            }
                            else if (sel === 1 && random === 3) {
                                console.log("los");
                                setresult("lose")
                            }
                            else if (sel === 2 && random === 1) {
                                console.log("los");
                                setresult("lose")
                            }
                            else if (sel === 2 && random === 3) {
                                console.log("won");
                                setresult("won")
                                setscore(score + 1)
                                celebrate()
                            }
                            else if (sel === 3 && random === 1) {
                                console.log("won");
                                setresult("won")
                                setscore(score + 1)
                                celebrate()
                            }
                            else if (sel === 3 && random === 2) {
                                console.log("los");
                                setresult("lose")
                            }else{
                                console.log("tie");
                                setresult("tie")
                            }
                            await delay(2000)
                            setclicked(false)
                        }}>
                            <img className="mx-auto my-auto" src="icon-scissors.svg" alt="" />
                        </div>
                    </div>
    
                    <div className="h-36 w-36 shadow-2xl bg-pink-500 absolute rounded-full top-28 left-48 ">
                        <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full" onClick={async()=>{
                            setresult("")
                            setselected(2)
                            const sel = 2
                            setclicked(true)
                            const random = getOponent()
                            setrand(random)
                            console.log("Selected:" + sel);
                            console.log("Rand:" + random);
                            if (sel === 1 && random === 2) {
                                console.log("won");
                                setresult("won")
                                setscore(score + 1)
                                celebrate()
                            }
                            else if (sel === 1 && random === 3) {
                                console.log("los");
                                setresult("lose")
                            }
                            else if (sel === 2 && random === 1) {
                                console.log("los");
                                setresult("lose")
                            }
                            else if (sel === 2 && random === 3) {
                                console.log("won");
                                setresult("won")
                                setscore(score + 1)
                                celebrate()
                            }
                            else if (sel === 3 && random === 1) {
                                console.log("won");
                                setresult("won")
                                setscore(score + 1)
                                celebrate()
                            }
                            else if (sel === 3 && random === 2) {
                                console.log("los");
                                setresult("lose")
                            }else{
                                console.log("tie");
                                setresult("tie")
                            }
                            await delay(2000)
                            setclicked(false)
                        }}>
                            <img className="mx-auto my-auto" src="icon-paper.svg" alt="" />
                        </div>
                    </div>
    
                    <div className="h-36 w-36 shadow-2xl bg-indigo-500 absolute rounded-full top-80  left-20 ">
                        <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full" onClick={async()=>{
                            setresult("")
                            setselected(3)
                            const sel = 3
                            setclicked(true)
                            const random = getOponent()
                            setrand(random)
                            console.log("Selected:" + sel);
                            console.log("Rand:" + random);
                            if (sel === 1 && random === 2) {
                                console.log("won");
                                setresult("won")
                                setscore(score + 1)
                                celebrate()
                            }
                            else if (sel === 1 && random === 3) {
                                console.log("los");
                                setresult("lose")
                            }
                            else if (sel === 2 && random === 1) {
                                console.log("los");
                                setresult("lose")
                            }
                            else if (sel === 2 && random === 3) {
                                console.log("won");
                                setresult("won")
                                setscore(score + 1)
                                celebrate()
                            }
                            else if (sel === 3 && random === 1) {
                                console.log("won");
                                setresult("won")
                                setscore(score + 1)
                                celebrate()
                            }
                            else if (sel === 3 && random === 2) {
                                console.log("los");
                                setresult("lose")
                            }else{
                                console.log("tie");
                                setresult("tie")
                            }
                            await delay(2000)
                            setclicked(false)
                        }}>
                            <img className="mx-auto my-auto" src="icon-rock.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }else{
       
        return(
            <>
            <div className="flex pt-32">

                <div className="mx-auto flex space-x-20 md:space-x-28">
                    <div className="">
                        <p className="-ml-2 mb-6 -mt-12 text-gray-200 scorefont text-xl">Your selection</p>
                    {component}
                    </div>
                    <div className="">
                        <p className="-ml-2 mb-6 -mt-12 text-gray-200 scorefont text-xl">BOT's selection</p>
                    {oponent}
                    </div>

                
                </div>
            </div>
            <div className="flex pt-16">
                {(result === "lose")?<div className="mx-auto">
                    <p className="text-6xl animate-ping scorefont font-bold md:text-8xl text-red-500">You Lose</p>
                </div>:null}
                {(result === "won")?<div className="mx-auto">
                    <p className="text-6xl scorefont animate-ping font-bold md:text-8xl text-green-500">You Won</p>
                </div>:null}
                {(result === "tie")?<div className="mx-auto">
                    <p className="text-6xl scorefont animate-ping font-bold md:text-8xl text-white">Tie</p>
                </div>:null}
            </div>
            </>
        )
    }
}

export default PlayGround
