import React from 'react'

const Order = (props) => {
  return (
    <div className='rounded-4 w-50'>
        <h2>La orden se envio con exito!</h2>
        <h3>El id de la compra es: {props.id}</h3>
        <button type='button' className='btn btn-primary rounded-circle'><i className="fa-solid fa-house"/></button>
    </div>
  )
}

export default Order