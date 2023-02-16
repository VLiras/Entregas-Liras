import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import gProducts, { gDetails } from "../../Utils/gProducts"
import ItemDetail from "../ItemDetail/ItemDetail"

const DetailContainer=()=>{
// console.log(idProduct)
    
    
    return(
        <div className="mt-5 p-3 bg-success"><ItemDetail/></div>
    )
}
export default DetailContainer