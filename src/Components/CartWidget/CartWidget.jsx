import Badge from 'react-bootstrap/Badge'
import { useCartContext } from '../../Context/CartContext'

function Cart(){
    const {cartList} = useCartContext()
    
    return(
        <div className="cart text-light w-50 border">
            <i style={{fontSize:'2vw'}} className="fa-solid fa-cart-shopping p-1">
                {/* <Badge style={{height:'1.6vw',fontSize:'1vw'}} bg='danger' className='m-1'>6</Badge> */}
            </i>
            <Badge style={{height:'1.6vw',fontSize:'1vw'}} bg='danger' className='m-1'>6</Badge>
        </div>
    )
}
export default Cart
