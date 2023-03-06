import { useEffect,useState } from "react"
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import ItemList from "../ItemList/ItemList"
import Spinner from "react-bootstrap/Spinner"
import { useParams } from "react-router-dom"
//map () => Nuevo array de igual tamaño, pero transformado
//key => Id 

const ItemListContainer=(props)=>{
    const [products,setProducts]=useState([])
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
        if (idCategory) {
        const db = getFirestore()
        const bringCollection = collection(db,'Products')
        console.warn(idCategory)
        const queryFilter = idCategory ? query(bringCollection, where('category','==', idCategory)) : bringCollection
        getDocs(queryFilter)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
        } 
        // else {
        // const db = getFirestore() 
        // const bringCollection = collection(db,'Products')
        // getDocs(bringCollection)
        // .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
        // .catch(err => console.error(err))
        // .finally(() => setLoading(false))    
        // }
        
    },[idCategory])
    console.log(idCategory)
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
            : 
                products.map(product => 
                <>
                    <ItemList key={product.id} photo={product.photo} id={product.id} model={product.model} make={product.make} price={product.price} stock={product.stock}></ItemList>
                    {/* <button onClick={()=>{}}>Agregar Producto</button> */}
                </>)
            }
            </div>
        </div>
    )
}
export default ItemListContainer