import { useCartContext } from "../../Context/CartContext"
import products from "../../Utils/products"
const CartContainer = () => {
    const {cartList,cleanCart} = useCartContext()
    // => Listado de productos
    
    return(
        <div className="cartContainer border mt-4 mb-4 rounded-4 w-100">
            <h1>Componente Carrito</h1><br />
            {
                // cartList.map(productCart => (
                //     <div key={productCart.id}>
                //         <img src={productCart.photo} />
                //         <h3>{productCart.make} {productCart.model}</h3>
                //         <h3>{productCart.price}</h3>
                //         <p>{productCart.amount}</p>
                //     </div>
                // ))
                cartList.map(prodCart => (
                    <label key={prodCart.id}>
                        <img src={prodCart.photo} alt="algo" />
                        {/* <label>{prodCart.make}</label> */}
                        {/* <label>Cantidad {prodCart.cant} </label> */}
                        {/* <label>Precio: {prodCart.price} </label> */}
                    </label>
                ))
            }
            <button type="button" onClick={cleanCart}>Vaciar Carrito</button>
        </div>
    )
}
export default CartContainer