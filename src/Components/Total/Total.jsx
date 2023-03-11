import React from 'react'
import Row from 'react-bootstrap/Row'
import { useCartContext } from '../../Context/CartContext'


const Total = (totalPrice) => {
  const {cartList,} = useCartContext()
  return (
    <div className='totalContainer rounded-4 p-3 mt-4'>
      <label role={Row} style={{fontSize:'2rem'}} className='totalPriceTitle'>Precio Total</label>
      {/* <h2 className='total center'>$ 0</h2> */}
      
    </div>
  )
}

export default Total




