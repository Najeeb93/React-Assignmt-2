import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './assets/components/Counter'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-2xl'>Count is 0</h1>
      <Counter/>
    </div>
     
  )
}

export default App
