import Badge from 'react-bootstrap/Badge'
import { useCartContext } from '../../Context/CartContext'

function Cart(){
    const {cartList} = useCartContext()
    const cartCounter = () => cartList.reduce((count,product) => count += (product.cant * 1),0 )
    return(
        <div className="cart text-light w-50">
            <i style={{fontSize:'2vw'}} className="fa-solid fa-cart-shopping p-1"/>
            {/* <label style={{color:'crimson'}}>{cartList.length}</label> */}
            <label style={{color:'crimson'}}>{cartCounter()}</label>
        </div>
    )
}
export default Cart
