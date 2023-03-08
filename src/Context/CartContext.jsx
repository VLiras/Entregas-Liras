import { createContext, useContext, useState } from "react";


const CartContext = createContext([]);
export const useCartContext = () => {
   return useContext(CartContext)
}
// Falta Funcion para no repetir el Producto
export const CartProvider = ({children}) => {
    //Estados y funciones globales
    const [cartList,setCartList] = useState([])
    const addToCart = (product) => {
        setCartList( [
            ...cartList,
            product
        ] )
    }
    const cleanCart = () => {
        setCartList([])
    }
    const deleteProduct = (product) => {
        setCartList(cartList.filter((cardItem) => cardItem.id !== product))
    }
    
    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,cleanCart,deleteProduct       
        }}>
            {children}
        </CartContext.Provider>
    )
}