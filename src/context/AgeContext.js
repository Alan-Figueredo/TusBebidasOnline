import { createContext, useContext, useState } from "react";

export const AgeContext = createContext([]);
export const AgeProvider = ({ children })=>{
    const [mayor, setMayor] = useState("");
    const [hidden, setHidden] = useState(false)
    return(
        <AgeContext.Provider value={{mayor, setMayor, hidden, setHidden}}>
            {children}
        </AgeContext.Provider>
    )
}
export const useAge = ()=> useContext(AgeContext);