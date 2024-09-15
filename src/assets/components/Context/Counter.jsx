import { createContext } from "react";

 export const conterContext = createContext();

export const CounterProvider = (props) => {
    
    return (
        <conterContext.Provider>
            
        </conterContext.Provider>
    )

}