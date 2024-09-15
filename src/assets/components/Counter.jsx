import React from "react";

function Counter() {
    return (
    
        <div>
           <div className="flex  justify-center mt-4"> <h1 className="text-2xl">Counter 0</h1></div>
            <div className="flex justify-center"><button className="p-2 mt-6 border-2 shadow-md rounded-md">Increment</button>
            <button className="p-2 ml-4 mt-6 border-2 shadow-md rounded-md">Decrement</button></div>
        </div>
    )
}

export default Counter;