import React from 'react'

function PlayGround() {
    return (
        <div className="flex">
            <div className="mx-auto relative" >
                <img className="mt-40" src="bg-triangle.svg" alt="" />
                <div className="h-36  w-36 shadow-2xl bg-yellow-500 absolute rounded-full top-28 -left-12 ">
                    <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full" >
                        <img className="mx-auto my-auto" src="icon-scissors.svg" alt="" />
                    </div>
                </div>

                <div className="h-36 w-36 shadow-2xl bg-pink-500 absolute rounded-full top-28 left-48 ">
                    <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full" >
                        <img className="mx-auto my-auto" src="icon-paper.svg" alt="" />
                    </div>
                </div>

                <div className="h-36 w-36 shadow-2xl bg-indigo-500 absolute rounded-full top-80  left-20 ">
                    <div className="h-28 hover:bg-gray-300 flex shadow-2xl w-28 bg-gray-200 mx-auto mt-4 z-10 rounded-full" >
                        <img className="mx-auto my-auto" src="icon-rock.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayGround
