import { createContext, useContext, useState } from "react";
// children => Cuando un componente envuelve a otros, y lo inyecta en la prop "children"

export const CartContext = createContext([]);
export const useCartContext = () => {
   return useContext(CartContext)
}


// Funcion para no repetir el Producto

export const CartProvider = ({children}) =>{
    //Estados y funciones globales
    const [cartList,setCartList] = useState([])
    const addToCart= (product) => {
        setCartList([
            ...cartList,  // => TODO lo que yo tenga en cartList + el producto
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