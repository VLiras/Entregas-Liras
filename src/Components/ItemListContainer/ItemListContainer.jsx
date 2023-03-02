import { useEffect,useState } from "react"
import {getDoc, getFirestore,doc, collection, getDocs, query, where, limit, orderBy} from 'firebase/firestore'
import ItemList from "../ItemList/ItemList"
import products from "../../Utils/products"
import Spinner from "react-bootstrap/Spinner"
import { useParams } from "react-router-dom"
import gProducts from "../../Utils/gProducts"
//map () => Nuevo array de igual tamaño, pero transformado
//key => Id 

const ItemListContainer=(props)=>{
    const [products,setProducts]=useState([])
    const [product,setProduct]=useState({})
    const[loading,setLoading]=useState(true)
    // const [boolean,setBoolean]=useState(true)
    const {idCategory} = useParams()
    // useEffect(()=>{
    //     if(idCategory){
    //         gProducts()
    //         .then((ans) => setProducts(ans.filter(product => product.category == idCategory)))
    //         .catch((err)=>console.log(err))
    //         .finally(()=>setLoading(false))
    //     }
    //     else{
    //         gProducts()
    //         .then((ans) => setProducts(ans))
    //         .catch((err) => console.log(err))
    //         .finally(() => setLoading(false))
    //     }
    // },[idCategory])
    // useEffect(() => {
    //     if (idCategory) {
    //         const isFilter = getFirestore()
    //         const queryCategory = collection(isFilter,'Products')
    //         const filter = query(queryCategory,where('category', '==',idCategory))
    //         getDocs(filter)
    //         .then(ans => setProducts(ans.docs.map(product => ({id:product.id, ...product.data(product)}))))
    //         .catch(err => console.log(err))
    //         .finally(() => setLoading(false))
    //     } 
    //     else {
    //         const all = getFirestore()
    //         const allProducts = collection(all,'Products')
    //         getDocs(allProducts)
    //         .then(ans => setProducts(ans.docs.map(product => ({id:product.id, ...product.data()}))))
    //         .catch(err => console.log(err))
    //         .finally(() => setLoading(false))
    //     }
    // },[idCategory])
    // console.log('ItemListContainer')
    
    //data() => Metodo de Firestore con el cual yo puedo extraer el resto de los datos del documento
    //Acceder a un producto
    // useEffect(() => {
    //     const db = getFirestore()
    //     const bringing = doc(db,'Products','7wAjigtpnwKfy8pT8wWD')
    //     getDoc(bringing)
    //     .then(resp => setProduct({id: resp.id, ...resp.data()}))
    // },[])
    // En .docs => Estoy llamando al array de productos
    useEffect(() => {
        const db = getFirestore()
        const bringCollection = collection(db,'Products')
        getDocs(bringCollection)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    },[])
    
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
                
            products.map(product => 
            <>
                    {/* <button onClick={()=>{}}>Agregar Producto</button> */}
                    <ItemList key={product.id} photo={product.photo} id={product.id} model={product.model} make={product.make} price={product.price} stock={product.stock}></ItemList>
            </>)
            //  <ItemList key={product.id}></ItemList>
            }
            </div>
        </div>
    )
}
export default ItemListContainer