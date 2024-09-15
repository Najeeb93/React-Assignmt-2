import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useContext } from 'react'
import Counters from './assets/components/Counters'
import { conterContext } from './assets/components/Context/Counter'





function App() {

  const counterState = useContext(conterContext)
  
  

  return (
<div>
  <div>
  <div className="flex  justify-center mt-4"> <h1 className="text-2xl bg-slate-400 font-bold shadow-xl">Counter {counterState.count}</h1></div></div>
<Counters/>
<Counters/>
<Counters/>
<Counters/>
</div>
     
  )
}

export default App
