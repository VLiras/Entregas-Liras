import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../Context/CartContext'

const ItemDetail = () => {
    const [product,setProduct]=useState({})
    const {idProduct} = useParams()
    const {addToCart,totalPrice} = useCartContext()
    const [loading,setLoading]=useState(true)
           
    useEffect(() => {
        const db = getFirestore()
        const queryProd = doc(db,'Products', idProduct)
        getDoc(queryProd)
        .then(ans => setProduct({id: ans.id,...ans.data()}))
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    },[])
    const onAdd = (cant) => {
        addToCart({ ...product, cant })
        totalPrice()
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
        </>
    )
}
export default ItemDetail