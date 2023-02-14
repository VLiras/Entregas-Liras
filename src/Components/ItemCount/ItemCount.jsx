import { useState } from "react";

const ItemCount=({initial,stock,onAdd})=>{
    // initial=1;
    // const [initial,setInitial]=useState(0)
       
    
    return(
        <div className="rounded-3 border mt-5 p-3">
            <div style={{margin:'0 auto'}} className="cant row w-100 mt-2">
                <button onClick={(initial)=>{initial+=1;console.log(initial);}} type="button" className="btn btn-outline-light col-3">+</button>
                <article className="stock col-6"><h3>{/*initial*/}1</h3></article>
                <button type="button" className="btn btn-outline-light col-3">-</button>
            </div>
            <div className="w-100 mt-2">
                <button type="button" className="btn btn-primary addCart w-100">Agregar al Carrito</button>
            </div>
        </div>
    )
}
export default ItemCount