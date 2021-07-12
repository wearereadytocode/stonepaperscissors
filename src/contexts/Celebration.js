import { createContext, useState } from "react";

export const CelebrationContext = createContext()

export const CelebrationContextProvoider = (props) =>{
    const [celebration, setcelebration] = useState(false)

    return(
        <CelebrationContext.Provider value={[celebration, setcelebration]}>
            {props.children}
        </CelebrationContext.Provider>
    )
}