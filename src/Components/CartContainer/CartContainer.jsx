import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useCartContext } from "../../Context/CartContext"
import Total from "../Total/Total"
import NoProduct from "../NoProduct/NoProduct"
import Order from "../Order/Order"
const CartContainer = () => {
    const {cartList,cleanCart,deleteProduct,totalPrice} = useCartContext()
    const [id,setId] = useState('')
    const [dataForm,setDataForm] = useState({
        name:'',
        lastName:'',
        phone:'',
        email:'',
        confirmEmail:''
    })
    const formComplete = () => {
        if((dataForm.name === '')||
        (dataForm.lastName === '')||
        (dataForm.phone === '')||
        (dataForm.email === '')||
        (dataForm.confirmEmail === '') 
        ) {alert('Completa todos los campos')}
    }
    const createOrder = (event) => {
        event.preventDefault() // => Evito que refresque y se borran los datos
               
            if(dataForm.confirmEmail !== dataForm.email ){
                console.warn('Los datos son distintos');
            }
            else{
                // Generando una orden
                const order = {}
                order.buyer = dataForm
                order.item = cartList.map(({id,make,model,price,cant}) => ({id,make,model,price,cant})),    
                order.total = totalPrice()
                console.log(order)
                // Insertar una orden
                const db = getFirestore()
                const getCollection = collection(db,'Orders') // => No existe
                addDoc(getCollection,order) // => Coloco la coleccion y el objeto que quiero añadir (en addDoc)
                .then(ans => setId(ans.id))
                .catch(err => console.error(err))
                .finally(() => {
                    cleanCart()
                    setDataForm({
                        name:'',
                        lastName:'',
                        phone:'',
                        email:'',
                        confirmEmail:''
                    })    
                })
                }
        }
    // Funcion para detectar los cambios en mi formulario
    const handleChange = (event) => {
        setDataForm({ 
            // => Declaro el cambio de estado para modificar el valor de los inputs al cambiar el estado
            ...dataForm,
            [event.target.name] : event.target.value // => Le aplico una prop dinamica
        })
    }
    return(
        <div id="cartContainer" className="rounded-4">
            {id !== '' && <Order id={id}/>}
            <div className="row">
                {
                    cartList.length === 0 ?
                    <div style={{height:'32rem'}}>
                        <NoProduct/>
                    </div> 
                    : 
                    cartList.map(prodCart => (
                        <div key={prodCart.id} className="col-3 p-3">
                        <Card>
                            <Card.Img variant="top" className='image rounded-4' src={prodCart.photo} />
                            <Card.Body className='text-start'>
                                <Card.Title className='text-center text-danger'><h2>U$S {prodCart.price}</h2></Card.Title>
                                <Card.Text className='cardDescription text-center'><strong>{prodCart.make} {prodCart.model}</strong></Card.Text>
                                <Card.Text className='cardDescription text-center'><strong>{prodCart.cant} Unidades</strong></Card.Text>
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
            </div>
        <hr/>
            <div>
                <div className="footer col-12">
                    <div>
                        <Total total={totalPrice}/>
                    </div>
                    <div style={{height:'6vw'}} id='cleanCartContainer' className="center p-3 mt-3">
                        <button style={{margin:'0 3%'}} type="button" className="btn btn-danger rounded-pill" onClick={cleanCart}>Vaciar Carrito</button>
                        <button style={{margin:'0 3%'}} type="button" className="btn btn-primary rounded-pill">Crear Orden</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='order border rounded-4 bg-dark p-3 w-50 center'>
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
                                    La informacion contenida en este formulario no sera compartida bajo ningun criterio.
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
                                <Form.Control type="text" name="confirmEmail" onChange={handleChange} value={dataForm.confirmEmail} className="w-75 center" required/>
                            </Form.Group><hr/>
                            <div className="formFooter row">
                                <div className="col-6 p-1">
                                    <Button variant="danger" type="submit" className="formButton rounded-pill">
                                    Cancelar
                                    </Button>
                                </div>
                                <div className="col-6 p-1">
                                    <Button variant="primary" onClick={(event) => createOrder(event)} type="submit" className="formButton rounded-pill">
                                    Generar Orden
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