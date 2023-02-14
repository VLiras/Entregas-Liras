import { useEffect,useState } from "react"
import ItemList from "../ItemList/ItemList"
import sell from "../../Utils/Loading"
import products from "../../Utils/products"
import Spinner from "react-bootstrap/Spinner"
import { useParams } from "react-router-dom"
//map () => Nuevo array de igual tamaño, pero transformado
//key => Id 

const ItemListContainer=(props)=>{
    const [products,setProducts]=useState([])
    const[loading,setLoading]=useState(true)
    const {idCategory} = useParams()
    console.log(idCategory)
    useEffect(()=>{
        if(idCategory){
            sell()
            .then((ans)=>setProducts(ans.filter(product => product.category == idCategory)))
            .catch((err)=>console.log(err))
            .finally(()=>setLoading(false))
        }
        else{
            sell()
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
            <div className="row rounded-4 bg-primary p-1">
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