import React from 'react'
import { Link } from 'react-router-dom'
import  Button  from 'react-bootstrap/Button'
const NoProduct = () => {
  return (
        <div className="col-12">
            <h1 className="cartTitle mt-5">
                    <i className="fa-solid fa-face-sad-tear"/><br />
                    No hay productos añadidos al Carrito!
            </h1>
            <Link to='/'><Button className="btn btn-primary rounded-circle"><i className="fa-solid fa-house"></i></Button></Link>
        </div>
    )
}
export default NoProduct