import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import Total from "../Total/Total"
import NoProduct from "../NoProduct/NoProduct"
const CartContainer = () => {
    const {cartList,cleanCart,deleteProduct} = useCartContext()
        // const [id,setId] = useState([])
    const [dataForm,setDataForm] = useState({
        name:'',
        lastName:'',
        phone:'',
        email:''
        // confirmEmail:''
    })
    const totalPrice = (product) => {
        // cartList.find((price) => price === product.price)
    }
    
    const createOrder = (event) => {
        event.preventDefault() // => Evito que refresque
        // Generando una orden
        const order = {}
        order.buyer = dataForm
        order.item = cartList.map(({id,make,model,price}) => ({id,make,model,price})),    
        order.total = totalPrice()
        console.log(order)
        console.log(totalPrice())
        // Insertar una orden
        const db = getFirestore()
        const getCollection = collection(db,'Orders') // => No existe
        addDoc(getCollection,order) // => Coloco el objeto que quiero añadir (en addDoc)
        .then(ans => console.log(ans)) 
        .catch(err => console.error(err))
        .finally(() => {
            cleanCart()
            setDataForm()
        })
        //Aqui va Actualizar un producto     
    }
    // Funcion para detectar los cambios de mi formulario =>
    const handleChange = (event) => {
        setDataForm({ 
            // => Declaro el cambio de estado para modificar el valor de los inputs al cambiar el estado
            ...dataForm,
            [event.target.name]:event.target.value // => Le aplico una prop dinamica
        })
    }
    // console.log(dataForm)
    console.log(cartList)
            
    return(
        // { id != '' && <h2>Nro. de compra es: {id}</h2> } => Arreglar 
        <div className="cartContainer w-100 rounded-4 mt-4">
            <div className="row h-100">
            {
                cartList.length === 0 ?
                <div style={{height:'32rem'}} className="">
                    <NoProduct/>
                </div> 
                                              
                : 
                cartList.map(prodCart => (
                    <div className="col-3 p-3">
                    <Card>
                        <Card.Img variant="top" className='image rounded-4' src={prodCart.photo} />
                        <Card.Body className='text-start'>
                            <Card.Title className='text-center text-danger'><h2>U$S {prodCart.price}</h2></Card.Title>
                            <Card.Text className='text-center'><h3><strong>{prodCart.make} {prodCart.model}</strong></h3></Card.Text>
                            <Card.Text className='text-center'><h3><strong>{prodCart.cant} Unidades</strong></h3></Card.Text>
                            <Card.Text style={{fontSize:'1vw'}} className='text-center stock'>Disponibles: {prodCart.stock = prodCart.stock - prodCart.cant}</Card.Text>
                            <Card.Text style={{fontSize:'1vw'}} className='text-center stock'>Subtotal: {prodCart.subTotal}</Card.Text>
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
            <hr/>
                <div className="footer col-12">
                    <div>
                        <Total/>
                    </div>
                    <div style={{height:'6vw'}} id='cleanCartContainer' className="center p-3 mt-3">
                        <button style={{margin:'0 3%'}} type="button" className="btn btn-danger rounded-pill" onClick={cleanCart}>Vaciar Carrito</button>
                        {/* <button style={{margin:'0 3%'}} type="button" className="btn btn-primary rounded-pill" onClick={()=>{bucle()}}>Crear Orden</button> */}
                    </div>
                </div>
                <br />
                <div className="order border rounded-4 bg-dark p-3 w-50 center">
                <Form onSubmit={createOrder}>
                    <h2>Datos del Comprador</h2><hr />
                    <div className="row">
                        <Form.Group className="mb-3 col-6" controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="name" onChange={handleChange} value={dataForm.name} placeholder="Nombre" required />
                        </Form.Group>
                        <Form.Group className="mb-3 col-6" controlId="formLastName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" name="lastName" onChange={handleChange} value={dataForm.lastName} placeholder="Apellido" required />
                        </Form.Group>
                        <Form.Text className="text-muted col-12">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </div>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="tel" name="phone" onChange={handleChange} value={dataForm.phone} className="w-75 center" placeholder="11-1234-5678" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleChange} value={dataForm.email} className="w-75 center" placeholder="nombre@example.com" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="confirmEmail">
                        <Form.Label>Confimar Email</Form.Label>
                        <Form.Control type="text" name="confirmEmail" className="w-75 center" required/>
                    </Form.Group><hr/>
                    <div className="formFooter row">
                        <div className="col-6 p-1">
                            <Button style={{fontSize:'1rem',width:'6rem'}} variant="danger" type="submit" className="rounded-pill">
                            Cancelar
                            </Button>
                        </div>
                        <div className="col-6 p-1">
                            <Button style={{fontSize:'1rem',width:'6rem'}} variant="primary" onClick={() => createOrder()} type="submit" className="rounded-pill disabled">
                             Enviar Orden
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
            </div>
        </div>
    )
}
export default CartContainer