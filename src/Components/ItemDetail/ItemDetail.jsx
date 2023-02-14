import ItemCount from '../ItemCount/ItemCount'
const ItemDetail=()=>{
    return(
        <div className="details border row rounded-4 w-100 center bg-primary">
            <div className="images col-6">
                <div className="m-3 p-3">
                    <img className="w-100 h-100 rounded-4" src="https://images.fravega.com/f300/49c246f72a2baa1b8f440f95c0f9d408.jpg.webp" alt="#" />
                </div>
            </div>
            <div className="details col-6">
                <div className='border m-3 p-3 rounded-4'>
                    <h3>Marca + Modelo</h3>
                    <h3>Precio</h3>
                    <br />
                    <button className="btn btn-danger w-100">Comprar</button>
                    <ItemCount initial={1} stock={10} onAdd={()=>{}}/>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail