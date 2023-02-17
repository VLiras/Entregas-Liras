import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export default CartContext

export const useCartContext=()=>useContext(CartContext)
// children => Cuando un componente envuelve a otros, y lo inyecta en la prop "children"

export const CartProvider = ({children}) =>{
    //Estados y funciones globales
    const [cartList,setCartList] = useState([])
    const addToCart= (product) => {
        setCartList(product)
    }
    return(
        <CartContext.Provider value={{
            cartList,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}