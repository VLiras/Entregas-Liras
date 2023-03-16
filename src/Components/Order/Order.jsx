import React from 'react'
import { Link } from 'react-router-dom'

const Order = (props) => {
  return (
    <div style={{backgroundColor:'#222',border:'green solid 2px'}} className='rounded-4 w-75 center p-3'>
      <i style={{fontSize:'4rem',color:'green'}} className="fa-regular fa-circle-check"/>
        <h2 style={{fontSize:'3rem'}}>La orden se envio con exito!</h2>
        <article style={{backgroundColor:'#111',border:'crimson solid 2px',width:'30rem'}} className='p-3 rounded-4 center'>
          <h3>El id de la compra es: </h3>
          <label style={{backgroundColor:'crimson',padding:'1%',fontSize:'1.5rem'}} className='rounded-4 p-3'>{props.id}</label>
        </article>
        <Link to='/'><button type='button' className='btn btn-primary rounded-circle border'><i className="fa-solid fa-house"/></button></Link>
    </div>
  )
}

export default Order