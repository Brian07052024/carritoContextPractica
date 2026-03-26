import { useContext } from "react"
import { CartContext } from "../contexts/cart"

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("useCart debe usarse dentro de CartProvider")
    }

    return context
}