import { useEffect, useState,useContext } from 'react'
import { useParams } from 'react-router-dom'
import useCartContext, { CartContext }  from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import gProducts  from '../../Utils/gProducts'
import products from '../../Utils/products'
const ItemDetail = () => {
    const {idProduct} = useParams()
    const [product,setProduct]=useState({})
    const [loading,setLoading]=useState(true)
    const {addToCart,cartList} = useContext(CartContext)
    useEffect(()=>{
        gProducts(idProduct)
        .then(ans => setProduct(ans))
        .catch(err=>console.error(err))
        .finally(()=>setLoading(false))
    },[])
    function onAdd (amount){
        // addToCart({...product,amount}) //... => Despliegue
        // console.log('2')
        // console.log(product)
        alert('Soy un alert en onAdd')
    }
    console.log("Cartlist:" ,cartList)
    // console.log(onAdd)
    
    return(
            <div style={{margin:'0 auto'}} className="detailBlock row rounded-4 w-100">
                <div className="images col-6">
                    <div>
                        <div className='p-3'><img className="w-100 h-100 rounded-4" src={product.photo} alt="image" /></div>
                    </div>
                </div>
                <div className="col-6">
                    <div className='details m-3 p-3 rounded-4'>
                        <div>
                            <h2>{product.make} {product.model}</h2>
                            <h3 className='price'>{product.price}</h3>
                            <p style={{fontSize:'1.5rem'}} className='stock'>Disponibles: {product.stock} Unidades</p>
                        </div>
                        <br />
                        <div>
                            <ItemCount initial={1} stock={10} onAdd={onAdd} />   
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ItemDetail