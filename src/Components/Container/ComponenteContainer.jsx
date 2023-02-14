import { useState,useEffect} from "react"


function Container({saludo}){
    return(
        <>
            <h1>{saludo}</h1>
            {/* {[1,2,3,4].map((numero,indice)=><li key={indice}>{numero}</li>)} */}
        </>
    )
}
export default Container