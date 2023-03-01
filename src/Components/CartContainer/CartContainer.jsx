import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import products from "../../Utils/products"
import Total from "../Total/Total"
const CartContainer = () => {
    const {cartList,cleanCart} = useCartContext()
    // => Listado de productos
    const [dataForm,setDataForm] = useState({
        name:'',
        phone:'',
        email:''
    })
    const totalPrice = () => {
        cartList.map((price,cant) => price = price*cant)
    }
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
        .finally(()=>{})

        //Actualizar un documento en firestore
        const queryDoc = doc(db,'Productos','7wAjigtpnwKfy8pT8wWD')
        updateDoc(queryDoc, {
            stock:80
        })
        .then(() => console.log('Producto Actualizado'))
        .catch(err => console.error(err))
    }
    const handleOnChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]:e.target.value
        })
    }                                    
    return(
        <div className="cartContainer w-100 rounded-4 p-0">
            <div style={{width:'200%'}}>
                <Total/>
                <h1 className="cartTitle mt-5">
                    <i className="fa-solid fa-face-sad-tear"></i><br />
                    No hay productos añadidos al Carrito!
                </h1>
            </div><br />
            {
                // cartList.map(productCart => (
                //     <div key={productCart.id}>
                //         <img src={productCart.photo} />
                //         <h3>{productCart.make} {productCart.model}</h3>
                //         <h3>{productCart.price}</h3>
                //         <p>{productCart.amount}</p>
                //     </div>
                // ))
                cartList.map(prodCart => (
                    <label key={prodCart.id}>
                        <img src={prodCart.photo} alt="image" />
                        <label>{prodCart.make}</label><br />
                        {/* <label>Cantidad {prodCart.cant} </label><br /> */}
                        {/* <label>Precio: {prodCart.price} </label><br /> */}
                    </label>
                ))
            }
            <div style={{width:'200%',height:'4rem'}} className="border center p-3 mt-3">
                <button type="button" className="btn btn-danger rounded-pill" onClick={cleanCart}>Vaciar Carrito</button>
                <button type="button" onClick={() => createOrder()} className="btn btn-primary rounded-pill">Generar Orden</button>
            </div>
            <div>
                <form>
                    {/* Crear Formulario */}
                </form>
            </div>
        </div>
    )
}
export default CartContainer