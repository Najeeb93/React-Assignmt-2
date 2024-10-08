import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterProvider } from './assets/components/Context/Counter.jsx'
import { CartProvider } from './assets/components/Context/Carts.jsx'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </StrictMode>,
)
