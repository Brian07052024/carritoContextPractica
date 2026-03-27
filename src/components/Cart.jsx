import { useCart } from "../hooks/useCart"

function Cart({ onClose }) {

  const { cart, clearCart, increaseQty, decreaseQty } = useCart();
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0)

  function handleClickClear() {
    const confirmClear = window.confirm("Deseas vaciar el carrito?")
    if (confirmClear) clearCart()
  }

  return (
    <div className='cart-overlay' onClick={onClose}>
      <aside className='cart-panel' onClick={(event) => event.stopPropagation()}>
        <div className='cart-header'>
          <h3>Tu carrito</h3>
          <button className='cart-close-btn' onClick={onClose} aria-label='Cerrar carrito'>
            x
          </button>
        </div>

        {
          cart.length > 0
          &&
          cart.map((product) => {
            return (
              <div key={product.id} className='cart-item'>
                <img
                  src='/react.webp'
                  alt='Producto de ejemplo'
                  className='cart-item-image'
                />
                <div className='cart-item-info'>
                  <p className='cart-item-title'>{product.title}</p>
                  <div className='cart-item-subtitle'>
                    <button onClick={() => decreaseQty(product.id)}>-</button>
                    <span>{product.qty}</span>
                    <button onClick={() => increaseQty(product.id)}>+</button>
                  </div>

                  <p className='cart-item-price'>{product.price}</p>
                </div>
              </div>
            )
          })
        }

        <div className='cart-footer'>
          <div className='cart-total'>
            <span>Total</span>
            <strong>${total}</strong>
          </div>
          <button className='checkout-btn-red' onClick={handleClickClear}>Vaciar carrito</button>
          <button className='checkout-btn'>Ir a pagar</button>
        </div>
      </aside>
    </div>
  )
}

export default Cart