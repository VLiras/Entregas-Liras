import Badge from 'react-bootstrap/Badge'
import { useCartContext } from '../../Context/CartContext'

function Cart(){
    const {cartList} = useCartContext()
     
    
    return(
        <div className="cart text-light w-50">
            <i style={{fontSize:'2vw'}} className="fa-solid fa-cart-shopping p-1"/>
            <label style={{color:'crimson'}}>{cartList.length}</label>
            {/* <label style={{color:'crimson'}}>{cartElem()}</label> */}
        </div>
    )
}
export default Cart
