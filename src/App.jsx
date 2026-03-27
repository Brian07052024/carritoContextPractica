import './App.css'
import { useState } from 'react';
import RenderProducts from './components/RenderProducts';
import { useProducts } from './hooks/useProducts';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Cart from './components/Cart';

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const { products, loading} = useProducts();
  
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
