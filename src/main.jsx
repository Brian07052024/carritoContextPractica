import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { FiltersProvider } from './contexts/filters.jsx'
import { CartProvider } from './contexts/cart.jsx'

createRoot(document.getElementById('root')).render(

  <FiltersProvider>
    <CartProvider>
      <App />

    </CartProvider>
  </FiltersProvider>



)
