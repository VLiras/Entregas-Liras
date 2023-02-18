import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from 'react'
import Badge from 'react-bootstrap/Badge'
import CartContext from '../../Context/CartContext'
function Cart(){
    const {cartList} = useContext(CartContext)
    return(
        <div className="cart text-light w-50">
            <i style={{fontSize:'2vw'}} className="fa-solid fa-cart-shopping p-1">
                <Badge style={{height:'1.6vw',fontSize:'1vw'}} bg='danger' className='m-1'>6</Badge>
            </i>
        </div>
    )
}
export default Cart
