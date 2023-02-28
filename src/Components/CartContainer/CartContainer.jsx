import { useCartContext } from "../../Context/CartContext"
import products from "../../Utils/products"
const CartContainer = () => {
    const {cartList,cleanCart} = useCartContext()
    // => Listado de productos
    
    return(
        <div className="cartContainer border mt-4 mb-4 rounded-4 w-100 text-center">
            <h2 id="cartEmpty" className="border ">No hay productos en el carrito</h2><br />
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
                        <img src={prodCart.photo} alt="image" />
                        {/* <label>{prodCart.make}</label> */}
                        {/* <label>Cantidad {prodCart.cant} </label> */}
                        {/* <label>Precio: {prodCart.price} </label> */}
                    </label>
                ))
            }
            <br />
            <div className="border w-100">
                <button type="button" className="btn btn-danger rounded-pill center" onClick={cleanCart}>Vaciar Carrito</button>
            </div>
            
        </div>
    )
}
export default CartContainer