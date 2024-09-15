import { createContext } from "react";

 export const conterContext = createContext();

export const CounterProvider = (props) => {
    
    return (
        <conterContext.Provider>
            {props.children}

        </conterContext.Provider>
    )

}