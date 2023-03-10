import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='border rounded-4 mt-4 p-3'>
        <div style={{fontSize:'8rem',color:'crimson'}}>
            <i className="fa-solid fa-circle-exclamation"/>
        </div>
        <div>
            <h2 style={{color:'crimson',fontSize:'3rem'}}>Error! Sus direcciones de correo son diferentes</h2>
            <p>Verifique su direccion y asegurese que sea la misma</p>
        </div>
        <Link to='/cart'><button type='button' className="btn btn-danger rounded-pill mt-3">Reintentar</button></Link>
    </div>
  )
}

export default Error