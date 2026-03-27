import { useCart } from "../hooks/useCart";

function RenderProducts({ productsArray }) {

    const { cart, addToCart } = useCart()

    function handleClick(product) {
        addToCart(product)
    }


    return (
        productsArray.map((product) => {


            return (
                <div key={product.id} className='separate-bet'>
                    <div className='productCard'>
                        <div>
                            <img src="/react.webp" className='productImage' alt="imagen-producto" />
                            <div className='title-price'>
                                <h2 className='title'>{product.title}</h2>
                                <p className='description'>{product.description}</p>
                            </div>
                        </div>
                        <p className='price'>${product.price}</p>
                    </div>

                    <button className='buy-btn' onClick={() => handleClick(product)}>
                        {
                            cart.some((item) => item.id === product.id) ? "Ya esta en carrito" : "Agregar al carrito"
                        }

                    </button>
                </div>
            )

        })
    );
}

export default RenderProducts;