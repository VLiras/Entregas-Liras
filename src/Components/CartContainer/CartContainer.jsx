// import useCartContext from "../../Context/CartContext"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import products from "../../Utils/products"
const CartContainer = () => {
    const {cartList,cleanCart} = useContext(CartContext) // => Listado de productos
    
    return(
        <div className="cartContainer border mt-4 mb-4 rounded-4 w-100">
            <h1>Componente Carrito</h1><br />
            {
                cartList.map(productCart => (
                    <div key={productCart.id}>
                        <img src={productCart.photo} />
                        <h3>{productCart.make} {productCart.model}</h3>
                        <h3>{productCart.price}</h3>
                        <p>{productCart.amount}</p>
                    </div>
                ))
            }
            <button type="button" onClick={cleanCart}>Vaciar Carrito</button>
        </div>
    )
}
export default CartContainer