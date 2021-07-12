import React, { useState } from 'react'

function PlayGround() {
    
    const [selected, setselected] = useState(null)
    const [clicked, setclicked] = useState(false)
    const [rand, setrand] = useState(null)
    function getOponent() {
        const random =  Math.random() * (4 - 1) + 1;
        console.log(parseInt(random));
        return parseInt(random)
    }
    const getResult = () =>{
        if (selected === 1 && rand === 1) {
            
        }
    }
    var component
    var oponent
    if (selected === 1) {
        component=  <div className="h-36  w-36 shadow-2xl bg-yellow-500 pt-px rounded-full ">
                            <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full"  >
                                <img className="mx-auto my-auto" src="icon-scissors.svg" alt="" />
                            </div>
                    </div>
    }
    if (selected === 2) {
        component=  <div className="h-36  w-36 shadow-2xl bg-pink-500 pt-px rounded-full ">
                            <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full"  >
                                <img className="mx-auto my-auto" src="icon-paper.svg" alt="" />
                            </div>
                    </div>
    }
    if (selected === 3) {
        component=  <div className="h-36  w-36 shadow-2xl bg-indigo-500 pt-px rounded-full ">
                            <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full"  >
                                <img className="mx-auto my-auto" src="icon-rock.svg" alt="" />
                            </div>
                    </div>
    }
    if (rand === 1) {
        oponent=  <div className="h-36  w-36 shadow-2xl bg-yellow-500 pt-px rounded-full ">
                            <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full"  >
                                <img className="mx-auto my-auto" src="icon-scissors.svg" alt="" />
                            </div>
                    </div>
    }
    if (rand === 2) {
        oponent=  <div className="h-36  w-36 shadow-2xl bg-pink-500 pt-px rounded-full ">
                            <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full"  >
                                <img className="mx-auto my-auto" src="icon-paper.svg" alt="" />
                            </div>
                    </div>
    }
    if (rand === 3) {
        oponent=  <div className="h-36  w-36 shadow-2xl bg-indigo-500 pt-px rounded-full ">
                            <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full"  >
                                <img className="mx-auto my-auto" src="icon-rock.svg" alt="" />
                            </div>
                    </div>
    }



    if (!clicked) {
        return (
            <div className="flex">
                <div className="mx-auto relative" >
                    <img className="mt-40" src="bg-triangle.svg" alt="" />
                    <div className="h-36  w-36 shadow-2xl bg-yellow-500 absolute rounded-full top-28 -left-12 ">
                        <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full"  onClick={()=>{
                            setselected(1)
                            setclicked(true)
                            setInterval(()=>{
                                setclicked(false)
                            },3000)
                            console.log("scissor");
                        }}>
                            <img className="mx-auto my-auto" src="icon-scissors.svg" alt="" />
                        </div>
                    </div>
    
                    <div className="h-36 w-36 shadow-2xl bg-pink-500 absolute rounded-full top-28 left-48 ">
                        <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full" onClick={()=>{
                            setselected(2)
                            setclicked(true)
                            console.log("paper");
                        }}>
                            <img className="mx-auto my-auto" src="icon-paper.svg" alt="" />
                        </div>
                    </div>
    
                    <div className="h-36 w-36 shadow-2xl bg-indigo-500 absolute rounded-full top-80  left-20 ">
                        <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full" onClick={()=>{
                            setselected(3)
                            setclicked(true)
                            console.log("rock");
                        }}>
                            <img className="mx-auto my-auto" src="icon-rock.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }else{
        return(
            <div className="flex pt-32">
                <div className="mx-auto flex space-x-28">
                    <div className="">
                        <p className="-ml-2 mb-6 -mt-12 text-gray-200 scorefont text-xl">Your selection</p>
                    {component}
                    </div>
                
                {oponent}
                </div>
                
            </div>
        )
    }
}

export default PlayGround
