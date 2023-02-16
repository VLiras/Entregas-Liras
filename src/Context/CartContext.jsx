import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export default CartContext

export const useCartContext=()=>useContext(CartContext)


export const CartProvider = ({children}) =>{
    //Estados y funciones globales
    const [cartList,setCartList] = useState([])
    const addCart= (product) => {
        setCartList([
            ...cartList,
            product
        ])
    }
    return(
        <CartContext.Provider value={{
            cartList,
            addCart
        }}>
            {children}
        </CartContext.Provider>
    )
}