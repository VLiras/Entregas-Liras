import { useEffect,useState } from "react"
import ItemList from "../ItemList/ItemList"
import products from "../../Utils/products"
import Spinner from "react-bootstrap/Spinner"
import { useParams } from "react-router-dom"
import gProducts from "../../Utils/gProducts"
//map () => Nuevo array de igual tamaño, pero transformado
//key => Id 

const ItemListContainer=(props)=>{
    const [products,setProducts]=useState([])
    const[loading,setLoading]=useState(true)
    const {idCategory} = useParams()
    useEffect(()=>{
        if(idCategory){
            gProducts()
            .then((ans)=>setProducts(ans.filter(product => product.category == idCategory)))
            .catch((err)=>console.log(err))
            .finally(()=>setLoading(false))
        }
        else{
            gProducts()
            .then((ans)=>setProducts(ans))
            .catch((err)=>console.log(err))
            .finally(()=>setLoading(false))
        }
    },[idCategory])
    
    return(
        <div className="p-3 m-2">
            <div className="p-1 m-2">
                <h1>{props.greeting}</h1>
                <h2>{props.subtitle}</h2>
            </div>
            <div className="listContainer row rounded-4 p-1">
            {
            loading ?
                <Spinner animation="border" role="status" className="center">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                // <li key={product.id}>{product.marca} {product.modelo}</li>
            : 
            products.map(product => <ItemList key={product.id} photo={product.photo} id={product.id} model={product.model} make={product.make} price={product.price} stock={product.stock}></ItemList>)
            }
            </div>
        </div>
    )
}
export default ItemListContainer