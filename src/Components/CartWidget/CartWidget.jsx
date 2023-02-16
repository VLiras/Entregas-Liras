import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from 'react'
import Badge from 'react-bootstrap/Badge'
import CartContext from '../../Context/CartContext'
function Cart(){
    const {cartList} = useContext(CartContext)
    return(
        <div className="cart text-light">
            <i className="fa-solid fa-cart-shopping"><Badge bg='danger' className='m-2'>6</Badge></i>
        </div>
    )
}
export default Cart
