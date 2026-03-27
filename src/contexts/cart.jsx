import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const CART_STORAGE_KEY = "cart";

export function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {
        try {
            const cartFromStorage = localStorage.getItem(CART_STORAGE_KEY);
            if (!cartFromStorage) return [];

            const parsedCart = JSON.parse(cartFromStorage);
            return Array.isArray(parsedCart) ? parsedCart : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }, [cart]);



    const addToCart = (product) => {
        setCart((prevCart) => {
            const isInCart = prevCart.some((item) => item.id === product.id);
            //si SI esta:
            if (isInCart) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            //sino, agregamos:
            return [...prevCart, { ...product, qty: 1 }];
        });
    }

    const increaseQty = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, qty: item.qty + 1 } : item
            )
        );
    }

    const decreaseQty = (productId) => {
        setCart((prevCart) =>
            prevCart
                .map((item) => {
                    if (item.id !== productId) return item;
                    if (item.qty === 1) return null;
                    return { ...item, qty: item.qty - 1 };
                })
                .filter(Boolean)
        );
    }



    const clearCart = () => setCart([])

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, increaseQty, decreaseQty }}>
            {children}
        </CartContext.Provider>
    )
}