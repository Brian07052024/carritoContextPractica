import './App.css'
import { useState } from 'react';
import RenderProducts from './components/renderProducts';
import { useProducts } from './hooks/useProducts';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Cart from './components/Cart';
import { useCart } from './hooks/useCart';

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const { products, loading} = useProducts();
  const {cart} = useCart()
  
  return (
    <>
      <button className='cart-toggle-btn' onClick={() => setIsCartOpen(true)}>
        Abrir carrito
      </button>

      <Header />
      <div className='grid-productos'>
        {loading ? <h2>Cargando datos...</h2> : <RenderProducts productsArray={products} />}
      </div>
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      <Footer />
    </>
  )
}

export default App
