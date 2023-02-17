import { useState } from "react";
import products from "../../Utils/products";

const ItemCount=(onAdd)=>{
     const [count,setCount]=useState(1)
    console.log(count) 
    const add =(props)=>{
        setCount(count => count+1)
        if(count >10){count--}
     }
    const rest =()=>{
        setCount(count => count-1)
        if(count < 1){count++}
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
                <button type="button" onClick={()=>{onAdd}} className="addCart btn btn-primary w-100 rounded-pill mt-2 mb-2">Agregar al Carrito</button>
            </div>
        </div>
    )
}
export default ItemCount