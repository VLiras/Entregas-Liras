import { createContext, useContext, useState } from "react";
const CartContext = createContext([]);
export const useCartContext = () => {
   return useContext(CartContext)
}
// Falta Funcion para no repetir el Producto
export const CartProvider = ({children}) => {
    //Estados y funciones globales
    const [cartList,setCartList] = useState([])
    const [total,setTotal] = useState(0)
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
    const totalPrice = () => cartList.reduce((count,product) => count += (product.cant * product.price),0 )
        // let prices = cartList.map(prodCart => prodCart.cant*prodCart.price)
        // let total = 0
        // setTotal(prices.forEach((price) => {total += price;console.log(total)}))
        // setTotal(total = total + 1)
        // const precioTotal = () => cartList.reduce( (count, producto) => count += (producto.cantidad*producto.price), 0) 
        
    return(
        <CartContext.Provider value={{
            cartList,total,
            addToCart,cleanCart,deleteProduct,totalPrice       
        }}>
            {children}
        </CartContext.Provider>
    )
}