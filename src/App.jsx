import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useContext } from 'react'
import Counters from './assets/components/Counters'
import { conterContext } from './assets/components/Context/Counter'
import Item from './assets/components/Item'





function App() {

  return (
    <div>
      <Item/>
    </div>

  )
}

export default App
