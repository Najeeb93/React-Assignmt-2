import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useContext } from 'react'
import Counters from './assets/components/Counters'
import { conterContext } from './assets/components/Context/Counter'
import Item from './assets/components/Item'
import Cart from './assets/components/Cart'





function App() {

  return (
    <div>
      <Item name='MacBook Pro' price={100000}/>
      <Item name='Pendrive' price={4000}/>
      <Item name='Mobile' price={35000}/>
      <Cart/>
    </div>

  )
}

export default App
