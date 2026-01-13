import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage/HomePage'
import MenuPage from './pages/MenuPage/MenuPage'
import '@/styles/main.scss'
import { CartCountProvider } from './store/CartContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartCountProvider>
          {/* <MenuPage /> */}
    <HomePage />
    </CartCountProvider>
  
  </StrictMode>,
)
