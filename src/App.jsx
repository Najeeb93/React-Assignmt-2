import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Counter from './assets/components/Counter'




function App() {
  const [count, setCount] = useState(0)

  return (
<div>
<Counter/>
<Counter/>
<Counter/>
<Counter/>
</div>
     
  )
}

export default App
