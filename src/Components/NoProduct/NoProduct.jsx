import React from 'react'
import { Link } from 'react-router-dom'

const NoProduct = () => {
  return (
        <div style={{marginTop:'8rem'}} className="col-12">
            <h1 className="cartTitle mt-5">
                    <i className="fa-solid fa-face-sad-tear"/><br />
                    No hay productos añadidos al Carrito!
            </h1>
            <Link to='/'><button className="btn btn-primary rounded-circle"><i className="fa-solid fa-house"/></button></Link>
        </div>
    )
}
export default NoProduct