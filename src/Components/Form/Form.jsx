import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const Form = () => {
    const {cartList,cleanCart} = useCartContext()
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
  return (
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
  )
}

export default Form