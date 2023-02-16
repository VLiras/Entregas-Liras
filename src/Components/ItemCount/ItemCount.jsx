import { useState } from "react";
import products from "../../Utils/products";

const ItemCount=()=>{
     const [initial,setInitial]=useState(1)
     
    return(
        <div className="rounded-3 border mt-5 mb-3 p-3">
            <div style={{margin:'0 auto'}} className="cant row w-100 mt-2">
                <button style={{fontSize:'2vw'}} onClick={() => {setInitial((initial) => initial + 1)}} type="button" className="btn btn-outline-light col-3">+</button>
                <article className="stock col-6"><h3>{initial}</h3></article>
                <button style={{fontSize:'2vw'}} onClick={() => {setInitial((initial) => initial - 1); if(initial < 1){initial++;}}} type="button" className="btn btn-outline-light col-3">-</button>
            </div>
            <div className="w-100 mt-3">
                <button type="button" onClick={()=>{alert('Agregado al carrito')}} className="addCart btn btn-primary w-100 rounded-pill">Agregar al Carrito</button>
            </div>
        </div>
    )
}
export default ItemCount