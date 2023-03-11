import React from 'react'
import Row from 'react-bootstrap/Row'


const Total = () => {
  
  return (
    <div className='totalContainer rounded-4 p-3 mt-4'>
      <label role={Row} style={{fontSize:'2rem'}} className='totalPriceTitle'>Precio Total</label>
      <h2 className='total center'>$ 0{/* Suma de c/precio */}</h2>
    </div>
  )
}

export default Total




