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
    const [boolean,setBoolean]=useState(true)
    const {idCategory} = useParams()
    // useEffect(()=>{
    //     if(idCategory){
    //         gProducts()
    //         .then((ans)=>setProducts(ans.filter(product => product.category == idCategory)))
    //         .catch((err)=>console.log(err))
    //         .finally(()=>setLoading(false))
    //     }
    //     else{
    //         gProducts()
    //         .then((ans)=>setProducts(ans))
    //         .catch((err)=>console.log(err))
    //         .finally(()=>setLoading(false))
    //     }
    // },[idCategory])
    // Acceder a un doc => ItemDetailContainer
    // useEffect(()=>{
    //     const db = getFirestore()
    //     const queryDoc = doc(db,'Products','SBaWrzEZD78MBRa60eqA')
    //     getDoc(queryDoc) // => Promise
    //     .then(respProd => setProduct({ id:respProd.id, ...respProd.data() }) )
    // },[])

    //Acceder a todos los docs
    // useEffect(()=>{
    //     const db = getFirestore()
    //     const queryCollection = collection(db,'Products')
    //     getDocs(queryCollection)
    //     .then(respCollection => setProducts( respCollection.docs.map(prod => ({ id:prod.id , ...prod.data()}) )))
    // },[])

    //Traer productos de una coleccion filtrado
    useEffect(()=>{
            const db = getFirestore()
            const queryCollection = collection(db,'Products')
            const filtro = query(queryCollection,where('price','==',150),
            //limit(1),
            //orderBy('price','desc')
            )
            // const filtro = query(queryCollection,where('category','==',idCategory))
            getDocs(filtro)
            .then(respCollection => setProducts( respCollection.docs.map(prod => ({ id:prod.id , ...prod.data()}) )))
        },[])
    
    const handleProduct= () => {
        setProducts([
            ...products,
            {id:products.length+1,name:'Nuevo Producto',price:'780',category:'auriculares'}
        ])
    }

    console.log('ItemListContainer') // => Clase 11
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
                    <button onClick={()=>{}}>Agregar Producto</button>
                    <ItemList key={product.id} photo={product.photo} id={product.id} model={product.model} make={product.make} price={product.price} stock={product.stock}></ItemList>
            </>)
            }
            </div>
        </div>
    )
}
export default ItemListContainer