import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import gProducts  from '../../Utils/gProducts'
import products from '../../Utils/products'
const ItemDetail = () => {
    const {idProduct} = useParams()
    const [product,setProduct]=useState({})
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        gProducts(idProduct)
        .then((ans)=>setProduct(ans.find(product => product.id == idProduct)))
        .catch((err)=>console.error(err))
        .finally(()=>setLoading(false))
    },[])

    
    return(
              
            <div style={{margin:'0 auto'}} className="detailBlock row rounded-4 w-100">
                <div className="images col-6">
                    <div className="m-3 p-3">
                        <img className="w-100 h-100 rounded-4" src={product.photo} alt="#" />
                    </div>
                </div>
                <div className="col-6">
                    <div className='details m-3 p-3 rounded-4'>
                        <h3>{product.make} {product.model}</h3>
                        <h3 className='price'>{product.price}</h3>
                        <br />
                        {/* <ItemCount initial={1} stock={10} onClick={()=>{onAdd={onAdd}}} /> */}
                        <ItemCount></ItemCount>
                    </div>
                </div>
            </div>
    )
}
export default ItemDetail