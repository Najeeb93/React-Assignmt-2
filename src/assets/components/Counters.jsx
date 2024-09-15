import React from "react";
import { useContext } from "react";
import { conterContext } from "./Context/Counter";

function Counters() {
    
    return (
    
        <div>
            <div className="flex justify-center"><button className="p-2 mt-6 border-2 shadow-md rounded-md">Increment</button>
            <button className="p-2 ml-4 mt-6 border-2 shadow-md rounded-md">Decrement</button></div>
        </div>
    )
}

export default Counters;