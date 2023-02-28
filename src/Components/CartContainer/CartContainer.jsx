import { useCartContext } from "../../Context/CartContext"
import products from "../../Utils/products"
import Total from "../Total/Total"
const CartContainer = () => {
    const {cartList,cleanCart} = useCartContext()
    // => Listado de productos
    return(
        <div className="cartContainer w-100 rounded-4 p-0">
            <div style={{width:'200%'}}>
                <Total/>
                <h1 className="cartTitle mt-5">
                    <i className="fa-solid fa-face-sad-tear"></i>
                    No hay productos añadidos al Carrito!
                </h1>
            </div><br />
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
                        {/* <label>{prodCart.make}</label><br /> */}
                        {/* <label>Cantidad {prodCart.cant} </label><br /> */}
                        {/* <label>Precio: {prodCart.price} </label><br /> */}
                    </label>
                ))
            }
            <div style={{width:'200%',height:'4rem'}} className="border center p-3 mt-3">
                <button type="button" className="btn btn-danger rounded-pill" onClick={cleanCart}>Vaciar Carrito</button>
            </div>
        </div>
    )
}
export default CartContainer