import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useContext } from 'react'
import Counters from './assets/components/Counter'





function App() {


  return (
<div>
  <div>
  <div className="flex  justify-center mt-4"> <h1 className="text-2xl">Counter 0</h1></div></div>
<Counters/>
<Counters/>
<Counters/>
<Counters/>
</div>
     
  )
}

export default App
