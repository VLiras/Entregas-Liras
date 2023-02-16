import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import products from '../../Utils/products'
import gProducts from '../../Utils/gProducts'
import { Link } from "react-router-dom"
import { useContext } from 'react'

const ItemList=(props)=>{
            
    return(
        <div className="itemList mt-5 p-2 center col-4">
            <Card className="card rounded-4 w-100 h-100">
                <Card.Img variant="top" className='image rounded-4' src={props.photo} />
                <Card.Body className='text-start'>
                    <Card.Title className='text-center'><h2>{props.price}</h2></Card.Title>
                    <Card.Text className='text-center'><h3><strong>{props.make} {props.model}</strong></h3></Card.Text>
                    <Card.Text style={{fontSize:'1vw'}} className='text-center stock'>Disponibles: {props.stock}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/detalle/${props.id}`}><Button style={{backgroundColor:'crimson'}} variant='danger' className='more w-100 rounded-pill'>Detalle</Button></Link>
                </Card.Footer>
            </Card>
        </div>
    )
}
export default ItemList