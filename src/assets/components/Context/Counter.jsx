import { createContext, useState } from "react";

 export const conterContext = createContext();

export const CounterProvider = (props) => {
    
    const [count, setCount] = useState(0);
    return (
        <conterContext.Provider value={{count, setCount}}>
            {props.children}

        </conterContext.Provider>
    )

}