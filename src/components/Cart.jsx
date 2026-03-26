import { useCart } from "../hooks/useCart"

function Cart({ onClose }) {


  return (
    <div className='cart-overlay' onClick={onClose}>
      <aside className='cart-panel' onClick={(event) => event.stopPropagation()}>
        <div className='cart-header'>
          <h3>Tu carrito</h3>
          <button className='cart-close-btn' onClick={onClose} aria-label='Cerrar carrito'>
            x
          </button>
        </div>

        <div className='cart-item'>
          <img
            src='/react.webp'
            alt='Producto de ejemplo'
            className='cart-item-image'
          />
          <div className='cart-item-info'>
            <p className='cart-item-title'>Laptop Placeholder Pro 14</p>
            <p className='cart-item-subtitle'>1 unidad <button>+</button></p>
            
            <p className='cart-item-price'>$999</p>
          </div>
        </div>

        <div className='cart-footer'>
          <div className='cart-total'>
            <span>Total</span>
            <strong>$999</strong>
          </div>
          <button className='checkout-btn'>Ir a pagar</button>
        </div>
      </aside>
    </div>
  )
}

export default Cart