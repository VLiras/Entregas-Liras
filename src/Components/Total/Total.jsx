import React from 'react'
import { Row } from 'react-bootstrap'

const Total = () => {
  return (
    <div className='totalContainer rounded-4 p-3 mt-4'>
      <label role={Row} style={{fontSize:'1vw'}}>Precio Total</label>
      <h2 className='total center'>$ 0</h2>
    </div>
  )
}

export default Total




