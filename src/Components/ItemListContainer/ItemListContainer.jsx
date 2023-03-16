import { useEffect,useState } from "react"
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import Spinner from "react-bootstrap/Spinner"

const ItemListContainer = (props) => {
    const [products,setProducts]=useState([])
    const[loading,setLoading]=useState(true)
    const {idCategory} = useParams()
    useEffect(() => {
        const db = getFirestore()
        const bringCollection = collection(db,'Products')
        const queryFilter = idCategory ? query(bringCollection, where('category','==', idCategory)) : bringCollection
        getDocs(queryFilter)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data()})))) // En .docs => Llamo al array de productos
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
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
            : 
                products.map(product => 
                <>
                    <ItemList key={product.id} photo={product.photo} id={product.id} model={product.model} make={product.make} price={product.price} stock={product.stock}></ItemList>
                </>)
            }
            </div>
        </div>
    )
}
export default ItemListContainer

// Eliminar codigo repetido => Refactorizacion
// Prohibido el codigo comentado
// Codigo que no usemos
// Importaciones y varibles declarados no usadas
// Importaciones: Librerias y dependencias - Componentes - Estilos
// Ningun console.log(first) => Salvo errores
// No errores en la consola
// Identar bien => Codigo alineado
// Separar logica de componentes 
// No mezclar idiomas
// Corroborar funcionamiento del codigo
