import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useContext } from 'react'
import Counters from './assets/components/Counters'
import { conterContext } from './assets/components/Context/Counter'





function App() {

  const counterState = useContext(conterContext)
  console.log('Context', counterState);
  

  return (
<div>
  <div>
  <div className="flex  justify-center mt-4"> <h1 className="text-2xl">Counter {conterContext.count}</h1></div></div>
<Counters/>
<Counters/>
<Counters/>
<Counters/>
</div>
     
  )
}

export default App
