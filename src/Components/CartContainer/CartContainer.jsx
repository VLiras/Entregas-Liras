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
        // const [id,setId] = useState([])
        const [id,setId] = useState('')
    const [dataForm,setDataForm] = useState({
        name:'',
        lastName:'',
        phone:'',
        email:'',
        confirmEmail:''
    })
    // Clase 13 (Firebase 2) => Minuto 1:02:00
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
                console.log(event)
                // Insertar una orden
                // const db = getFirestore()
                // const getCollection = collection(db,'Orders') // => No existe
                // addDoc(getCollection,order) // => Coloco la coleccion y el objeto que quiero añadir (en addDoc)
                // // .then(ans => console.log(ans),order) 
                // .then(ans => setId(ans.id))
                // .catch(err => console.error(err))
                // .finally(() => {
                //     cleanCart()
                //     setDataForm()    
                // })
                }
        }
        //Aqui va Actualizar un producto => Minuto 1:15:00
     
    // Funcion para detectar los cambios en mi formulario
    const handleChange = (event) => {
        setDataForm({ 
            // => Declaro el cambio de estado para modificar el valor de los inputs al cambiar el estado
            ...dataForm,
            [event.target.name] : event.target.value // => Le aplico una prop dinamica
        })
    }
    return(
        // { id != '' && <h2>Nro. de compra es: {id}</h2> } => Arreglar 
        <div className="cartContainer w-100 rounded-4 mt-4">
            {id !== '' && <Order id={id}/>}
            <div className="row h-100">
            {
                cartList.length === 0 ?
                <div style={{height:'32rem'}} className="">
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
            <hr/>
                <div className="footer col-12">
                    <div>
                        <Total total={totalPrice}/>
                    </div>
                    <div style={{height:'6vw'}} id='cleanCartContainer' className="center p-3 mt-3">
                        <button style={{margin:'0 3%'}} type="button" className="btn btn-danger rounded-pill" onClick={cleanCart}>Vaciar Carrito</button>
                        {/* <button style={{margin:'0 3%'}} type="button" className="btn btn-primary rounded-pill" onClick={()=>{bucle()}}>Crear Orden</button> */}
                    </div>
                </div>
                <br />
                <Form change={handleChange} submit={createOrder} data={dataForm} order={createOrder(event)}/>
            </div>
        </div>
    )
}

export default CartContainer