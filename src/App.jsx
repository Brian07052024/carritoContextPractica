import './App.css'
import RenderProducts from './components/renderProducts';
import { useProducts } from './hooks/useProducts';
import Header from './components/Header';
import { Footer } from './components/Footer';

function App() {

  const { products, loading} = useProducts();

  return (
    <>
      <Header />
      <div className='grid-productos'>
        {loading ? <h2>Cargando datos...</h2> : <RenderProducts productsArray={products} />}
      </div>
      <Footer />
    </>
  )
}

export default App
