import { createContext, useContext, useState } from "react";
import products from "../Utils/products";
// children => Cuando un componente envuelve a otros, y lo inyecta en la prop "children"
//"..." => TODO lo que yo tenga en cartList + el producto
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
    const deleteProduct = () => {
        // setCartList(cartList.splice())
        alert('Producto eliminado')
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