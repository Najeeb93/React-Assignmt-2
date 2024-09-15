import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Counter from './assets/components/Counter'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center mt-3'>
      <h1 className='text-2xl'>Count is 0</h1>
      <div>
      <Counter/></div>
    </div>
     
  )
}

export default App
