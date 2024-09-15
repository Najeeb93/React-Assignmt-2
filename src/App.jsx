import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Counter from './assets/components/Counter'




function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <div>
  <div className="flex  justify-center mt-4"> <h1 className="text-2xl">Counter 0</h1></div></div>
<Counter/>
<Counter/>
<Counter/>
<Counter/>
</div>
     
  )
}

export default App
