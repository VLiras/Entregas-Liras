import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { Card,Button,Toast } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
// import products from "../../Utils/products"
import Order from "../Form/Order"
import Total from "../Total/Total"
import NoProduct from "../NoProduct/NoProduct"
const CartContainer = () => {
    const [show, setShow] = useState(false); // => Toast
    const {cartList,cleanCart,deleteProduct} = useCartContext()
    // => Listado de productos
    // const [id,setId] = useState([])
    const [dataForm,setDataForm] = useState({
        name:'',
        phone:'',
        email:''
    })
    
    const createOrder = (event) => {
        event.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.item = cartList.map(({id,name,price}) => ({id,name,price})),    
        order.total = totalPrice()
        
        const db = getFirestore()
        const queryColection = collection(db,'orders')
        addDoc(queryColection)
        .then(ans => console.log(ans))
        .catch(err => console.log(err))
        .finally(() => {
            cleanCart()
            setDataForm()
        })

        //Actualizar un documento en firestore
        const queryDoc = doc(db,'Productos','7wAjigtpnwKfy8pT8wWD')
        updateDoc(queryDoc, {
            stock:80
        })
        .then(() => console.log('Producto Actualizado'))
        .catch(err => console.error(err))
    }
    const totalPrice = () => {
        cartList.map((price,cant) => price = price*cant)
    }
    const handleOnChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]:e.target.value
        })
    }
    console.log(cartList) 
    
    return(
        // { id != '' && <h2>Nro. de compra es: {id}</h2> } => Arreglar 
        <div className="cartContainer w-100 rounded-4 mt-4">
            <div className="row">
            {
                cartList.length === 0 ? 
                <NoProduct/>
                              
                : 
                // El resto de cosas 
                cartList.map(prodCart => (
                    // <label key={prodCart.id}>
                    //     <img src={prodCart.photo} alt="image" />
                    //     <label>{prodCart.make}</label><br />
                    //     <label>Cantidad {prodCart.cant} </label><br />
                    //     <label>Precio: {prodCart.price} </label><br />
                    // </label>
                    <div className="col-3 p-3">
                    <Card>
                        <Card.Img variant="top" className='image rounded-4' src={prodCart.photo} />
                        <Card.Body className='text-start'>
                            <Card.Title className='text-center text-danger'><h2>U$S {prodCart.price}</h2></Card.Title>
                            <Card.Text className='text-center'><h3><strong>{prodCart.make} {prodCart.model}</strong></h3></Card.Text>
                            <Card.Text className='text-center'><h3><strong>{prodCart.cant} Unidades</strong></h3></Card.Text>
                            <Card.Text style={{fontSize:'1vw'}} className='text-center stock'>Disponibles: {prodCart.stock = prodCart.stock - prodCart.cant}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <div style={{width:'2.5rem',height:'2.5rem'}} className="center ">
                                <Button variant='danger' onClick={()=>{deleteProduct(prodCart.id)}} className='delete w-100 h-100 rounded-circle text-center'>X</Button>
                            </div>
                        </Card.Footer>  
                    </Card>
                    </div>
                ))
            }
                <div className="footer col-12">
                    <div style={{height:'6vw'}} className="center p-3 mt-3">
                        <button style={{margin:'0 3%'}} type="button" className="btn btn-danger rounded-pill" onClick={cleanCart}>Vaciar Carrito</button>
                        <button style={{margin:'0 3%'}} type="button" onClick={() => createOrder()} className="btn btn-primary rounded-pill">Generar Orden</button>
                    </div>
                </div>
                <br />
                <div className="d-none">
                    <Order/>
                </div>
                {/* Agregar a ItemDetail */}
                <div className="d-none position-absolute">
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt="#"
                        />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                        <Link to='/cart'><Button className="btn btn-primary rounded-pill">Ir al carrito</Button></Link>
                    </Toast.Body>
                </Toast>
                </div>
            </div>
        </div>
    )
}
export default CartContainer