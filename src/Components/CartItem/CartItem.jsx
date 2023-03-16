import { useCartContext } from "../../Context/CartContext"

const CartItem = () => {
    const {cartList,deleteProduct} = useCartContext()
    return(
        <>
            <Card>
                <Card.Img variant="top" className='image rounded-4' src={prodCart.photo} />
                <Card.Body className='text-start'>
                    <Card.Title className='text-center text-danger'><h2>U$S {prodCart.price}</h2></Card.Title>
                    <Card.Text className='cardDescription text-center'><strong>{prodCart.make} {prodCart.model}</strong></Card.Text>
                    <Card.Text className='cardDescription text-center'><strong>{prodCart.cant} Unidades</strong></Card.Text>
                    <Card.Text style={{fontSize:'1vw'}} className='text-center stock'>Disponibles: {prodCart.stock = prodCart.stock - prodCart.cant}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div style={{width:'2.5rem',height:'2.5rem'}} className="center ">
                        <Button variant='danger' onClick={()=>{deleteProduct(prodCart.id)}} className='delete w-100 h-100 rounded-circle text-center'>X</Button>
                    </div>
                </Card.Footer>  
            </Card>
        </>

    )
}