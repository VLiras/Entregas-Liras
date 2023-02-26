import { useState,useContext } from "react";
import products from "../../Utils/products";

const ItemCount=({initial,stock, onAdd})=>{
    const [count,setCount]=useState(initial)
    const add = (props) => {
        if (count < stock) {
            setCount(count+1)    
        }
    }
    const rest = () => {
        if (count > initial) {
            setCount(count-1)    
        }
    }
    return(
        <div className="rounded-3 border mt-3 mb-3 p-3">
            <div style={{margin:'0 auto'}} className="cant row w-100 mt-2">
                <button style={{fontSize:'2vw'}} onClick={() => {add()}} type="button" className="btn btn-outline-light col-3">+</button>
                <article className="stock col-6"><h3>{count}</h3></article>
                <button style={{fontSize:'2vw'}} onClick={() => {rest()}} type="button" className="btn btn-outline-light col-3">-</button>
            </div>
            <div className="w-100 mt-3">
                <button className="btn btn-danger w-100 rounded-pill mt-2 mb-2">Comprar</button>
                <button type="button" onClick={()=>{onAdd(count)}} className="addCart btn btn-primary w-100 rounded-pill mt-2 mb-2">Agregar al Carrito</button>
            </div>
        </div>
    )
}
export default ItemCount