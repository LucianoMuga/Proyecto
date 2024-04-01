import { createContext, useContext, useState } from "react";


export const CartContext = createContext()


function CartProvider({children}) {

    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart( (prevState) => [...prevState, productToAdd])
        } else {
            console.log("El producto ya esta en el carrito");
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartUpdate = cart.filter((prod)=> prod.id !== id)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotalQuantity = () => {
        let acumulador = 0
        cart.forEach((prod) => {
            acumulador += prod.quantity
        });
        return acumulador
    }

    const getTotal = () => {
        let acumulado = 0
        cart.forEach((prod) => {
            acumulado += prod.quantity * prod.price
        })
        return acumulado
    }

    const totalQuantity = getTotalQuantity()

    return (
        <CartContext.Provider value={{
            cart,
            isInCart,
            addItem,
            removeItem,
            clearCart,
            totalQuantity,
            getTotal,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}

export default CartProvider