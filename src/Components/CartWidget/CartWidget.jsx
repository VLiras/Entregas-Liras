import 'bootstrap/dist/css/bootstrap.min.css'
import Badge from 'react-bootstrap/Badge'
function Cart(){
    return(
        <div className="cart text-light">
            <i className="fa-solid fa-cart-shopping"><Badge bg='danger' className='m-2'>6</Badge></i>
        </div>
    )
}
export default Cart