import { createContext, useState } from "react";

export const ScoreContext = createContext()

export const ScoreContextProvoider = (props) =>{
    const [score, setscore] = useState(0)
    return(
        <ScoreContext.Provider value={[score, setscore]}>
            {props.children}
        </ScoreContext.Provider>
    )
}