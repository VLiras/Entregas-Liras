import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Toast from 'react-bootstrap/Toast'
import Button from 'react-bootstrap/Button'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../Context/CartContext'

const ItemDetail = () => {
    const [show, setShow] = useState(false); // => Toast
    const [product,setProduct]=useState({})
    const {idProduct} = useParams()
    const {addToCart} = useCartContext()
    const [loading,setLoading]=useState(true)
    // const [isCount,setIsCount] = useState(true) => Clase 11
        
    useEffect(() => {
        const db = getFirestore()
        const queryProd = doc(db,'Products', idProduct)
        getDoc(queryProd)
        .then(ans => setProduct({id: ans.id,...ans.data()}))
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    },[])
    const onAdd = (cant) => {
        const precio = product.price
        let subTotal = precio * cant
        addToCart({ ...product, cant,subTotal })
        // setShow(true)
        // addToCart({ ...product, cant }) => En caso de que no funcione
    }
    return(
        <>
            <div className="detailBlock row rounded-4 w-100 center">
                <div className="images col-6">
                    <div>
                        <div className='p-3'><img className="w-100 h-100 rounded-4" src={product.photo} alt="image" /></div>
                    </div>
                </div>
                <div className="col-6">
                    <div className='details m-3 p-3 rounded-4'>
                        <div>
                            <h2>{product.make} {product.model}</h2>
                            <h3 className='price'>U$S {product.price}</h3>
                            <p style={{fontSize:'1.5rem'}} className='stock'>Disponibles: {product.stock} Unidades</p>
                        </div>
                        <br />
                        <div>
                            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />                             
                            {/* {isCount ? <ItemCount initial={1} stock={10} onAdd={onAdd} />
                             : <Link to="/cart"><button className='btn btn-primary'>Ir al Carrito</button></Link>
                            } */}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{border:'white solid'}} className="toast position-absolute">
                <Toast onClose={() => setShow(false)} show={show} delay={5000} bg='dark' autohide>
                    <Toast.Header>
                        <strong className="me-auto text-dark">DeepAudio</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body className='p-2'>
                        <h3><i className="fa-regular fa-circle-check"/>Se agrego exitosamente al carrito</h3>
                        <Link to='/cart'><Button className="btn btn-primary rounded-pill w-100">Ir al carrito</Button></Link>
                    </Toast.Body>
                </Toast>
            </div>
        </>
    )
}
export default ItemDetail