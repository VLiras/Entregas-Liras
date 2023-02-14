import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const DetailContainer=()=>{
const {idProduct}=useParams()
console.log(idProduct)
//sell(idProducto){}
    const inputHandler=(event)=>{
        event.preventDefault()
        event.stopPropagation()
        console.log(event.key)
    }


    return(
        <div className="border">
            <ItemDetail/>
            {/* <input onClick={inputHandler} type={Text} className='text-light'/> */}
        </div>
    )
}
export default DetailContainer