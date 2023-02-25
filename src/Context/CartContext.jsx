import { createContext, useContext, useState } from "react";
// children => Cuando un componente envuelve a otros, y lo inyecta en la prop "children"
//"..." => TODO lo que yo tenga en cartList + el producto
const CartContext = createContext([]);
export const useCartContext = () => {
   return useContext(CartContext)
}
// Falta Funcion para no repetir el Producto
//CartProvider = CartContextProvider
export const CartProvider = ({children}) => {
    //Estados y funciones globales
    const [cartList,setCartList] = useState([])
    
    const addToCart = (product) => {
        console.log(product)
        setCartList([
            ...cartList,
            product
        ])
    }
    const cleanCart = () =>{
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,cleanCart        
        }}>
            {children}
        </CartContext.Provider>
    )
}